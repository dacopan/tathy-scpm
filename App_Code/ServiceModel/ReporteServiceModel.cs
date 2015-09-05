using SCPMdbModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Descripción breve de ReporteServiceModel
/// </summary>
public class ReporteServiceModel
{
    public ReporteServiceModel()
    {

    }
    public List<CargoHistory> getCargosHistory()
    {

        SCPMdbEntities db = new SCPMdbEntities();

        List<CargoHistory> _res = new List<CargoHistory>();

        var hist = db.SCPM_PUESTO_HIST.ToList();

        foreach (var item in hist)
        {
            item.SCPM_PERSONALESReference.Load();
            item.SCPM_CARGOSReference.Load();
            item.SCPM_CARGOS.SCPM_AREASReference.Load();
            item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDADReference.Load();
            item.SCPM_RELACIONES_LABORALESReference.Load();
            //String.Format("{0} {1} {2} {3}", x.PER_APE_PAT, x.PER_APE_MAT, x.PER_NOM1, x.PER_NOM2)
            _res.Add(new CargoHistory()
            {
                area = item.SCPM_CARGOS.SCPM_AREAS.ARE_NOM,
                car_id = Convert.ToInt32(item.SCPM_CARGOS.CAR_ID),
                car_nom = item.SCPM_CARGOS.CAR_NOM,
                fecha_end = item.PST_HIS_FEC_FIN.HasValue ? item.PST_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd") : "",
                fecha_start = item.PST_HIS_FEC_INI.Value.ToString("yyyy-MM-dd"),
                per_nom = String.Format("{0} {1} {2} {3}", item.SCPM_PERSONALES.PER_APE_PAT, item.SCPM_PERSONALES.PER_APE_MAT, item.SCPM_PERSONALES.PER_NOM1, item.SCPM_PERSONALES.PER_NOM2),
                relLab = item.SCPM_RELACIONES_LABORALES.REL_LAB_NOM,
                unidad = item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM
            });
        }
        return _res;
        //return 
    }

    public List<SubrogacionHistory> getSubrogacionHistory()
    {

        SCPMdbEntities db = new SCPMdbEntities();

        List<SubrogacionHistory> _res = new List<SubrogacionHistory>();

        var hist = db.SCPM_SUBROGA_HIST.ToList();

        foreach (var item in hist)
        {
            item.SCPM_PERSONALESReference.Load();
            item.SCPM_CARGOSReference.Load();
            item.SCPM_CARGOS.SCPM_AREASReference.Load();
            item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDADReference.Load();

            //String.Format("{0} {1} {2} {3}", x.PER_APE_PAT, x.PER_APE_MAT, x.PER_NOM1, x.PER_NOM2)
            _res.Add(new SubrogacionHistory()
            {
                unidad = item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM,
                area = item.SCPM_CARGOS.SCPM_AREAS.ARE_NOM,
                car_id = Convert.ToInt32(item.SCPM_CARGOS.CAR_ID),
                car_nom = item.SCPM_CARGOS.CAR_NOM,
                fecha_end = item.SUB_HIS_FEC_FIN.HasValue ? item.SUB_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd") : "",
                fecha_start = item.SUB_HIS_FEC_INI.Value.ToString("yyyy-MM-dd"),
                per_nom = String.Format("{0} {1} {2} {3}", item.SCPM_PERSONALES.PER_APE_PAT, item.SCPM_PERSONALES.PER_APE_MAT, item.SCPM_PERSONALES.PER_NOM1, item.SCPM_PERSONALES.PER_NOM2),
                tipo = item.SUB_HIS_IS_ENCARGO.Value ? "Encargo" : "Subrogación"

            });
        }
        return _res;
        //return 
    }

    public IEnumerable getRazaCount(DateTime? fecha_start, DateTime? fecha_fin)
    {

        SCPMdbEntities db = new SCPMdbEntities();

        var razas = db.SCPM_RAZAS.ToList();
        var _res = new Dictionary<decimal, PersonaRaza>();

        foreach (var item in razas)
        {
            _res.Add(item.RAZ_ID, new PersonaRaza()
            {
                count = 0,
                raza = item.RAZ_NOM
            });
        }

        var personas = db.SCPM_PERSONALES.ToList();
        foreach (var p in personas)
        {
            p.SCPM_PUESTO_HIST.Load();
            if (p.SCPM_PUESTO_HIST.Count > 0)
            {
                SCPM_PUESTO_HIST lastCargo = p.SCPM_PUESTO_HIST.OrderBy(c => c.PST_HIS_FEC_INI).FirstOrDefault();
                p.SCPM_RAZASReference.Load();
                if ((lastCargo.PST_HIS_FEC_INI <= fecha_fin) && (fecha_start == null || lastCargo.PST_HIS_FEC_INI >= fecha_start))
                    _res[p.SCPM_RAZAS.RAZ_ID].count++;

            }
        }
        return _res.Values.ToList();
    }

    public IEnumerable getGeneroCount(DateTime? fecha_start, DateTime? fecha_fin)
    {

        SCPMdbEntities db = new SCPMdbEntities();

        var _res = new Dictionary<decimal, PersonaRaza>();


        _res.Add(0, new PersonaRaza()
        {
            count = 0,
            raza = "Hombre"
        });
        _res.Add(1, new PersonaRaza()
        {
            count = 0,
            raza = "Mujer"
        });


        var personas = db.SCPM_PERSONALES.ToList();
        foreach (var p in personas)
        {
            p.SCPM_PUESTO_HIST.Load();
            if (p.SCPM_PUESTO_HIST.Count > 0)
            {
                SCPM_PUESTO_HIST lastCargo = p.SCPM_PUESTO_HIST.OrderBy(c => c.PST_HIS_FEC_INI).FirstOrDefault();

                if ((lastCargo.PST_HIS_FEC_INI <= fecha_fin) && (fecha_start == null || lastCargo.PST_HIS_FEC_INI >= fecha_start))
                    _res[p.PER_GEN.Value ? 0 : 1].count++;

            }
        }
        return _res.Values.ToList();
    }

    public IEnumerable getDiscapacidadCount(DateTime? fecha_start, DateTime? fecha_fin)
    {
        SCPMdbEntities db = new SCPMdbEntities();

        var razas = db.SCPM_TIPO_DISCAPACIDADES.ToList();
        var _res = new Dictionary<decimal, PersonaRaza>();

        foreach (var item in razas)
        {

            _res.Add(item.TIP_DIS_ID, new PersonaRaza()
            {
                count = 0,
                raza = item.TIP_DIS_NOM
            });
        }

        var personas = db.SCPM_PERSONALES.ToList();
        foreach (var p in personas)
        {
            p.SCPM_PUESTO_HIST.Load();
            if (p.SCPM_PUESTO_HIST.Count > 0)
            {
                SCPM_PUESTO_HIST lastCargo = p.SCPM_PUESTO_HIST.OrderBy(c => c.PST_HIS_FEC_INI).FirstOrDefault();

                if ((lastCargo.PST_HIS_FEC_INI <= fecha_fin) && (fecha_start == null || lastCargo.PST_HIS_FEC_INI >= fecha_start))
                {
                    p.SCPM_DISCAPACIDADES.Load();
                    var dis = p.SCPM_DISCAPACIDADES.ToList();
                    foreach (var d in dis)
                    {
                        d.SCPM_TIPO_DISCAPACIDADESReference.Load();
                        _res[d.SCPM_TIPO_DISCAPACIDADES.TIP_DIS_ID].count++;
                    }

                }

            }
        }

        return _res.Values.ToList();
    }

    public IEnumerable getPersonasDiscapacidadCount(DateTime? fecha_start, DateTime? fecha_fin)
    {
        SCPMdbEntities db = new SCPMdbEntities();

        var razas = db.SCPM_TIPO_DISCAPACIDADES.ToList();
        var _res = new Dictionary<decimal, PersonaRaza>();



        _res.Add(0, new PersonaRaza()
        {
            count = 0,
            raza = "Sin discapacidad"
        });

        _res.Add(1, new PersonaRaza()
        {
            count = 0,
            raza = "Con discapacidad"
        });

        var personas = db.SCPM_PERSONALES.ToList();
        foreach (var p in personas)
        {
            p.SCPM_PUESTO_HIST.Load();
            if (p.SCPM_PUESTO_HIST.Count > 0)
            {
                SCPM_PUESTO_HIST lastCargo = p.SCPM_PUESTO_HIST.OrderBy(c => c.PST_HIS_FEC_INI).FirstOrDefault();

                if ((lastCargo.PST_HIS_FEC_INI <= fecha_fin) && (fecha_start == null || lastCargo.PST_HIS_FEC_INI >= fecha_start))
                {
                    p.SCPM_DISCAPACIDADES.Load();
                    var dis = p.SCPM_DISCAPACIDADES.ToList();
                    if (dis.Count > 0)
                        _res[1].count++;
                    else
                        _res[0].count++;
                }

            }
        }

        return _res.Values.ToList();

    }
    public List<SubrogacionHistory> getPersonaHistory(string tipo, SCPM_PERSONALES p)
    {

        SCPMdbEntities db = new SCPMdbEntities();

        List<SubrogacionHistory> _res = new List<SubrogacionHistory>();

        //SCPM_PERSONALES p = (from a in db.SCPM_PERSONALES where a.PER_ID == per_id select a).ToList().FirstOrDefault();


        if (tipo == "1" || tipo == "2")
        {
            p.SCPM_SUBROGA_HIST.Load();
            var hist = p.SCPM_SUBROGA_HIST.ToList();
            foreach (var item in hist)
            {
                item.SCPM_CARGOSReference.Load();
                item.SCPM_CARGOS.SCPM_AREASReference.Load();
                item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDADReference.Load();

                _res.Add(new SubrogacionHistory()
                {
                    unidad = item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM,
                    area = item.SCPM_CARGOS.SCPM_AREAS.ARE_NOM,
                    car_id = Convert.ToInt32(item.SCPM_CARGOS.CAR_ID),
                    car_nom = item.SCPM_CARGOS.CAR_NOM,
                    fecha_end = item.SUB_HIS_FEC_FIN.HasValue ? item.SUB_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd") : "",
                    fecha_start = item.SUB_HIS_FEC_INI.Value.ToString("yyyy-MM-dd"),
                    tipo = item.SUB_HIS_IS_ENCARGO.Value ? "Encargo" : "Subrogación"

                });
            }
        }
        if (tipo == "1" || tipo == "3")
        {
            p.SCPM_PUESTO_HIST.Load();
            var fijo = p.SCPM_PUESTO_HIST.ToList();
            foreach (var item in fijo)
            {

                item.SCPM_CARGOSReference.Load();
                item.SCPM_CARGOS.SCPM_AREASReference.Load();
                item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDADReference.Load();

                _res.Add(new SubrogacionHistory()
                {
                    unidad = item.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM,
                    area = item.SCPM_CARGOS.SCPM_AREAS.ARE_NOM,
                    car_id = Convert.ToInt32(item.SCPM_CARGOS.CAR_ID),
                    car_nom = item.SCPM_CARGOS.CAR_NOM,
                    fecha_end = item.PST_HIS_FEC_FIN.HasValue ? item.PST_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd") : "",
                    fecha_start = item.PST_HIS_FEC_INI.Value.ToString("yyyy-MM-dd"),
                    tipo = "Fijo"

                });
            }
        }
        return _res.OrderByDescending(a => a.fecha_start).ToList();
    }
}

public class PersonaRaza
{
    public string raza { get; set; }
    public int count { get; set; }
}

public class SubrogacionHistory
{
    public string unidad { get; set; }
    public string area { get; set; }

    public int car_id { get; set; }
    public string car_nom { get; set; }
    public string tipo { get; set; }

    public string per_nom { get; set; }

    public string fecha_start { get; set; }
    public string fecha_end { get; set; }
}
public class CargoHistory
{
    public CargoHistory()
    {

    }
    public string unidad { get; set; }
    public string area { get; set; }

    public int car_id { get; set; }
    public string car_nom { get; set; }

    public string per_nom { get; set; }

    public string fecha_start { get; set; }
    public string fecha_end { get; set; }
    public string relLab { get; set; }


}