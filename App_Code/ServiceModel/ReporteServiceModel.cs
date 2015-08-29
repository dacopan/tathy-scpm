using SCPMdbModel;
using System;
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