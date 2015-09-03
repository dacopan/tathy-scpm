using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Descripción breve de PuestoServiceModel
/// </summary>
public class PuestoServiceModel
{
    SCPMdbEntities db;
    public PuestoServiceModel()
    {
        db = new SCPMdbEntities();
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }

    public List<SCPM_UNIDAD> getAllUnidades()
    {
        return db.SCPM_UNIDAD.ToList();
    }

    public bool addUnidad(SCPM_UNIDAD newx)
    {

        var contains = db.SCPM_UNIDAD.ToList().Any(u => u.UNI_NOM.Equals(newx.UNI_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.UNI_NOM == "") return false;

        db.AddToSCPM_UNIDAD(newx);
        db.SaveChanges();
        return true;
    }

    public bool editUnidad(SCPM_UNIDAD newx)
    {
        var contains = db.SCPM_UNIDAD.ToList().Any(u => u.UNI_NOM.Equals(newx.UNI_NOM, StringComparison.InvariantCultureIgnoreCase) && u.UNI_COD != newx.UNI_COD);
        if (contains || newx.UNI_NOM == "") return false;

        var _unidad = from u in db.SCPM_UNIDAD where u.UNI_COD == newx.UNI_COD select u;
        if (_unidad.Count() < 1) return false;
        var unidad = _unidad.FirstOrDefault();

        unidad.UNI_EST = newx.UNI_EST;
        unidad.UNI_NOM = newx.UNI_NOM;
        db.SaveChanges();
        return true;
    }


    public List<SCPM_AREAS> getAllAreas()
    {
        return db.SCPM_AREAS.ToList();
    }

    public List<SCPM_AREAS> getAreasByUnidad(int unidad)
    {
        var areas = from area in db.SCPM_AREAS where area.SCPM_UNIDAD.UNI_COD == unidad select area;
        return areas.ToList();
    }

    public bool addArea(SCPM_AREAS newx, int unidad)
    {
        var contains = db.SCPM_AREAS.Include("SCPM_UNIDAD").ToList().Any(u => u.ARE_NOM.Equals(newx.ARE_NOM, StringComparison.InvariantCultureIgnoreCase)&& u.SCPM_UNIDAD.UNI_COD==unidad);
        if (contains || newx.ARE_NOM == "") return false;

        var _a = from a in db.SCPM_UNIDAD where a.UNI_COD == unidad select a;
        if (_a.Count() > 0)
        {
            _a.First().SCPM_AREAS.Add(newx);
            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool editArea(SCPM_AREAS newx)
    {
        var contains = db.SCPM_AREAS.Include("SCPM_UNIDAD").ToList().Any(u => u.ARE_NOM.Equals(newx.ARE_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_UNIDAD.UNI_COD == newx.SCPM_UNIDAD.UNI_COD && u.ARE_COD != newx.ARE_COD);
        if (contains || newx.ARE_NOM == "") return false;

        var _a = from a in db.SCPM_AREAS where a.ARE_COD == newx.ARE_COD select a;
        var area = _a.First();

        area.ARE_NOM = newx.ARE_NOM;
        area.ARE_EST = newx.ARE_EST;

        db.SaveChanges();
        return true;
    }



    public object getAllDenominaciones()
    {
        return db.SCPM_DENOMINACIONES.ToList();
    }

    public object getAllCargos()
    {
        return db.SCPM_CARGOS.ToList();
    }


    public object getAllRelacionLab()
    {
        return db.SCPM_RELACIONES_LABORALES.ToList();
    }

    public bool addRelacionLab(SCPM_RELACIONES_LABORALES newx)
    {
        var contains = db.SCPM_RELACIONES_LABORALES.ToList().Any(u => u.REL_LAB_NOM.Equals(newx.REL_LAB_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.REL_LAB_NOM == "") return false;
        db.AddToSCPM_RELACIONES_LABORALES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editRelacionLab(SCPM_RELACIONES_LABORALES newx)
    {
        var contains = db.SCPM_RELACIONES_LABORALES.ToList().Any(u => u.REL_LAB_NOM.Equals(newx.REL_LAB_NOM, StringComparison.InvariantCultureIgnoreCase) && u.REL_LAB_ID != newx.REL_LAB_ID);
        if (contains || newx.REL_LAB_NOM == "") return false;
        
        var _unidad = from u in db.SCPM_RELACIONES_LABORALES where u.REL_LAB_ID == newx.REL_LAB_ID select u;
        if (_unidad.Count() < 1) return false;
        var unidad = _unidad.FirstOrDefault();

        unidad.REL_LAB_EST = newx.REL_LAB_EST;
        unidad.REL_LAB_NOM = newx.REL_LAB_NOM;
        db.SaveChanges();
        return true;
    }

    public bool addDenominacion(SCPM_DENOMINACIONES newx)
    {
        var contains = db.SCPM_DENOMINACIONES.ToList().Any(u => u.DEN_NOM.Equals(newx.DEN_NOM, StringComparison.InvariantCultureIgnoreCase) && u.DEN_ID != newx.DEN_ID);
        if (contains || newx.DEN_NOM == "") return false;
        
        db.AddToSCPM_DENOMINACIONES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editDenominacion(SCPM_DENOMINACIONES newx)
    {
        var contains = db.SCPM_DENOMINACIONES.ToList().Any(u => u.DEN_NOM.Equals(newx.DEN_NOM, StringComparison.InvariantCultureIgnoreCase) && u.DEN_ID != newx.DEN_ID);
        if (contains || newx.DEN_NOM == "") return false;
        

        var _unidad = from u in db.SCPM_DENOMINACIONES where u.DEN_ID == newx.DEN_ID select u;
        if (_unidad.Count() < 1) return false;
        var unidad = _unidad.FirstOrDefault();

        unidad.DEN_EST = newx.DEN_EST;
        unidad.DEN_NOM = newx.DEN_NOM;
        db.SaveChanges();
        return true;
    }

    public bool addCargo(SCPM_CARGOS newx)
    {
        /* var contains = db.SCPM_CARGOS.ToList().Any(u => u.CAR_NOM == newx.CAR_NOM);
         if (contains) return false;*/
        db.AddToSCPM_CARGOS(newx);
        db.SaveChanges();
        return true;
    }

    public SCPM_AREAS getAreaByID(int newx)
    {
        return (from a in db.SCPM_AREAS where a.ARE_COD == newx select a).First();
    }

    public SCPM_DENOMINACIONES getDenominacionByID(int newx)
    {
        return (from a in db.SCPM_DENOMINACIONES where a.DEN_ID == newx select a).First();
    }

    public List<SCPM_CARGOS> getCargosByAreaID(int newx)
    {
        return (from a in db.SCPM_CARGOS.Include("SCPM_DENOMINACIONES") where a.SCPM_AREAS.ARE_COD == newx select a).ToList();
    }

    public bool saveDB()
    {
        try
        {
            db.SaveChanges();
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
    }

    public SCPM_CARGOS getCargoByID(int cargo_id)
    {
        return (from a in db.SCPM_CARGOS where a.CAR_ID == cargo_id select a).FirstOrDefault();
    }

    private SCPM_RELACIONES_LABORALES getRalacionLabByID(int rel_lab_id)
    {
        return (from a in db.SCPM_RELACIONES_LABORALES where a.REL_LAB_ID == rel_lab_id select a).FirstOrDefault();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="p"></param>
    /// <returns></returns>
    public List<SCPM_PERSONALES> getPersonasByID(int p)
    {
        return (from a in db.SCPM_PERSONALES where a.PER_ID == p select a).ToList();
    }

    public List<SCPM_PERSONALES> getAllPersonas()
    {
        return db.SCPM_PERSONALES.ToList();
    }

    public bool addCargoHistorial(SCPM_PUESTO_HIST historial, int per_id, int cargo_id, int rel_lab_id)
    {
        //compruebo si persona ya tiene un cargo activo
        var historial_cargos_persona = (from h in db.SCPM_PUESTO_HIST.Include("SCPM_PERSONALES") where h.SCPM_PERSONALES.PER_ID == per_id select h).ToList();
        SCPM_PUESTO_HIST currentCargo = historial_cargos_persona.Count > 0 ? historial_cargos_persona.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : historial_cargos_persona.FirstOrDefault();

        if (currentCargo != null)
        {
            currentCargo.SCPM_CARGOSReference.Load();
            currentCargo.SCPM_RELACIONES_LABORALESReference.Load();
        }

        if (currentCargo != null && currentCargo.SCPM_CARGOS.CAR_ID != cargo_id && (currentCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(currentCargo.PST_HIS_FEC_FIN) <= 0))
        {
            HelperUtil.showNotifi("persona ya tiene un cargo activo, finalicelo para poder asignarlo a otro cargo");
            return false;
        }

        //
        var historial_cargos_cargo_id = (from h in db.SCPM_PUESTO_HIST.Include("SCPM_CARGOS") where h.SCPM_CARGOS.CAR_ID == cargo_id select h).ToList();
        var nowTime = DateTime.Now;

        SCPM_PUESTO_HIST lastCargo = historial_cargos_cargo_id.Count > 0 ? historial_cargos_cargo_id.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : historial_cargos_cargo_id.FirstOrDefault();

        if (lastCargo != null && (lastCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(lastCargo.PST_HIS_FEC_FIN) <= 0))
        {//el cargo esta actualmente ocupado

            lastCargo.SCPM_PERSONALESReference.Load();
            lastCargo.SCPM_RELACIONES_LABORALESReference.Load();

            if (lastCargo.SCPM_PERSONALES.PER_ID != per_id)
            {
                //el cargo esta ocupado por otra persona
                HelperUtil.showNotifi("el cargo esta ocupado por otra persona");
                return false;
            }
            else
                if (lastCargo.SCPM_RELACIONES_LABORALES.REL_LAB_ID == rel_lab_id)
                {// el cargo esta ocupado por la misma persona y relacion laboral es la misma solo se actualizara sus campos

                    //fecha fin no puede ser menor a fecha inicio
                    if (historial.PST_HIS_FEC_FIN != null && historial.PST_HIS_FEC_INI.Value.CompareTo(historial.PST_HIS_FEC_FIN) > 0)
                    {
                        HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                        return false;
                    }
                    //checa si rango de fecha no overlap con alguno del historial del cargo o la persona
                    if (!isRangoFechaCargoValid(historial_cargos_persona, historial_cargos_cargo_id, historial.PST_HIS_FEC_INI.Value, historial.PST_HIS_FEC_FIN, lastCargo))
                    {
                        return false;
                    }
                    lastCargo.PST_HIS_FEC_FIN = historial.PST_HIS_FEC_FIN;
                    lastCargo.PST_HIS_FEC_INI = historial.PST_HIS_FEC_INI;
                    db.SaveChanges();
                    HelperUtil.showNotifi("Solo fecha final actualizada");
                    return true;
                }
                else
                { // el cargo esta ocupado por la misma persona y relacion laboral no es la misma

                    if (historial.PST_HIS_FEC_FIN == null || historial.PST_HIS_FEC_FIN.Value.CompareTo(nowTime) > 0)
                    {//quiere cambiar de relacion laboral al cargo que actualmente tiene, se finaliza este historial y añade otro con la nueva relacion laboral
                        //entonces fecha inicio del nuevo historial debe ser mayor a fecha inicio del cargo actual
                        if (historial.PST_HIS_FEC_INI.Value.CompareTo(lastCargo.PST_HIS_FEC_INI.Value) < 0)
                        {
                            HelperUtil.showNotifi("Fecha inico de la nueva relacion laboral debe ser mayor a fecha inicio de la actual relacion laboral.");
                            return false;
                        }
                        //fecha fin no puede ser menor a fecha inicio
                        if (historial.PST_HIS_FEC_FIN != null && nowTime.CompareTo(historial.PST_HIS_FEC_FIN) > 0)
                        {
                            HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                            return false;
                        }
                        lastCargo.PST_HIS_FEC_FIN = nowTime;
                        historial.PST_HIS_FEC_INI = nowTime;
                        db.SaveChanges();
                        HelperUtil.showNotifi("Relacion laboral anterior finalizada.");
                    }
                    else
                    {//el cargo esta actualmente ocupado se desea añadir un historial antiguo
                        //entonces fecha fin debe ser menor a fecha inicio del cargo actual
                        if (historial.PST_HIS_FEC_FIN.Value.CompareTo(lastCargo.PST_HIS_FEC_INI) > 0)
                        {
                            HelperUtil.showNotifi("Intenta añadir un historial antiguo. fecha final debe ser menor a fecha inicial del cargo actual");
                            return false;
                        }
                        //fecha fin no puede ser menor a fecha inicio
                        if (historial.PST_HIS_FEC_INI.Value.CompareTo(historial.PST_HIS_FEC_FIN) > 0)
                        {
                            HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                            return false;
                        }
                        //checa si rango de fecha no overlap con alguno del historial del cargo o la persona
                        if (!isRangoFechaCargoValid(historial_cargos_persona, historial_cargos_cargo_id, historial.PST_HIS_FEC_INI.Value, historial.PST_HIS_FEC_FIN, null))
                        {
                            return false;
                        }

                    }

                    //add new relacion                       
                    historial.SCPM_PERSONALES = getPersonasByID(per_id).ToList().First();
                    historial.SCPM_RELACIONES_LABORALES = getRalacionLabByID(rel_lab_id);
                    historial.SCPM_CARGOS = getCargoByID(cargo_id);
                    db.AddToSCPM_PUESTO_HIST(historial);
                    //save
                    db.SaveChanges();
                    HelperUtil.showNotifi("Nueva Relacion laboral añadida.");
                    return true;

                }
        }
        else
        {//el cargo no esta ocupado actualmente, se procede a añadir el historial nuevo

            //fecha fin no puede ser menor a fecha inicio
            if (historial.PST_HIS_FEC_FIN != null && historial.PST_HIS_FEC_INI.Value.CompareTo(historial.PST_HIS_FEC_FIN) > 0)
            {
                HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                return false;
            }
            //checa si rango de fecha no overlap con alguno del historial del cargo o la persona
            if (!isRangoFechaCargoValid(historial_cargos_persona, historial_cargos_cargo_id, historial.PST_HIS_FEC_INI.Value, historial.PST_HIS_FEC_FIN, null))
            {
                return false;
            }
            //add new relacion
            historial.SCPM_PERSONALES = getPersonasByID(per_id).ToList().First();
            historial.SCPM_RELACIONES_LABORALES = getRalacionLabByID(rel_lab_id);
            historial.SCPM_CARGOS = getCargoByID(cargo_id);
            db.AddToSCPM_PUESTO_HIST(historial);
            //save
            db.SaveChanges();
            HelperUtil.showNotifi("Nueva Relacion laboral añadida.");
            return true;
        }
    }

    private bool isRangoFechaCargoValid(List<SCPM_PUESTO_HIST> historial_cargos_persona, List<SCPM_PUESTO_HIST> historial_cargos_cargo_id, DateTime startB, DateTime? endB, SCPM_PUESTO_HIST lastCargo)
    {
        foreach (var item in historial_cargos_persona)
        {
            if (lastCargo == null || item.PST_HIS_ID != lastCargo.PST_HIS_ID)
            {
                var startA = item.PST_HIS_FEC_INI.Value;
                var endA = item.PST_HIS_FEC_FIN;
                if (endA == null && endB == null)
                {
                    if (startA > startB)
                    {
                        endA = startA;
                        endB = startA;
                    }
                    else
                    {
                        endA = startB;
                        endB = startB;
                    }

                }
                if ((startA <= endB) && (endA >= startB))
                {
                    HelperUtil.showNotifi("persona ya posee un cargo en esas fechas");
                    return false;
                }
            }
        }

        foreach (var item in historial_cargos_cargo_id)
        {
            if (lastCargo == null || item.PST_HIS_ID != lastCargo.PST_HIS_ID)
            {
                var startA = item.PST_HIS_FEC_INI.Value;
                var endA = item.PST_HIS_FEC_FIN;
                if (endA == null && endB == null)
                {
                    if (startA > startB)
                    {
                        endA = startA;
                        endB = startA;
                    }
                    else
                    {
                        endA = startB;
                        endB = startB;
                    }

                }
                if ((startA <= endB) && (endA >= startB))
                {
                    HelperUtil.showNotifi("cargo ya posee un funcionario en esas fechas");
                    return false;
                }
            }
        }
        return true;
    }



    /// <summary>
    /// añade un registro de subrogacion/encargo al historial
    /// Falla si el puesto ya esta actualmente sugbrogado/encargado
    /// </summary>
    /// <param name="historial"></param>
    /// <param name="cargo_id">ID: id del cargo a subrogar</param>
    /// <param name="current_subroga_id">id: personaID a la q esta subrogado o encargado     dcm: no esta subrogado</param>
    /// <param name="current_tipo_id">1: si el puesto actual esta subrogado               2: puesto actual encargado          dcm: puesto no sugbrogado           </param>
    /// <param name="current_persona_id">ID: personaID si el puesto esta ocupado             dcm: puesto no ocupado</param>
    /// <param name="newPersonaID">ID: personaID a la cual se subrogará</param>
    /// <param name="sub_hist_id"></param>
    /// <returns>
    /// true si fue añadido, false si no fue añadido.
    /// </returns>
    public bool addSubrogaHistorial(SCPM_SUBROGA_HIST historial, int cargo_id, string current_subroga_id, string current_tipo_id, string current_persona_id, int newPersonaID, String sub_hist_id)
    {
        var nowTime = DateTime.Now;

        if (!current_tipo_id.Equals("dcm"))
        {//puesto ya subrogado /encargado
            SCPM_SUBROGA_HIST lastSubroga = getSubrogaByID(Convert.ToInt32(sub_hist_id));
            if (current_tipo_id == "1" && historial.SUB_HIS_IS_ENCARGO.Value)
            {//ya esta subrogado/encargado no puede ser encargado/subrogado
                HelperUtil.showNotifi(String.Format("El puesto ya esta {0}, no puede ser {1}", current_tipo_id == "1" ? "subrogado" : "encargado", current_tipo_id == "1" ? "encargado" : "subrogado"));
                return false;
            }
            else if (Convert.ToInt32(current_subroga_id) == newPersonaID)
            {//actualiza fecha fin
                //fecha fin no puede ser menor a fecha inicio
                if (historial.SUB_HIS_FEC_FIN != null && lastSubroga.SUB_HIS_FEC_INI.Value.CompareTo(historial.SUB_HIS_FEC_FIN) > 0)
                {
                    HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                    return false;
                }
                lastSubroga.SUB_HIS_FEC_FIN = historial.SUB_HIS_FEC_FIN;
                db.SaveChanges();
                HelperUtil.showNotifi("Solo fecha final actualizada");
                return true;
            }
            else
            {//actualizar cambiar la persona a la q esta subrogado/encargado el puesto, se finaliza este historial y añade nuevo
                lastSubroga.SUB_HIS_FEC_FIN = nowTime;
                db.SaveChanges();
                HelperUtil.showNotifi("Historial anterior finalizado.");
                //add new historial
                historial.SCPM_PERSONALES = getPersonasByID(newPersonaID).ToList().First();
                historial.SCPM_CARGOS = getCargoByID(cargo_id);
                historial.SUB_HIS_FEC_INI = nowTime;
                db.AddToSCPM_SUBROGA_HIST(historial);
                //save
                db.SaveChanges();
                HelperUtil.showNotifi("Nueva Historial de Subrogacion/encargo añadido.");
                return true;

            }
        }
        else
        {//puesto no subrogado /encargado
            //fecha fin no puede ser menor a fecha inicio
            if (historial.SUB_HIS_FEC_FIN != null && historial.SUB_HIS_FEC_INI.Value.CompareTo(historial.SUB_HIS_FEC_FIN) > 0)
            {
                HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                return false;
            }

            //add new subroga/encargo
            historial.SCPM_PERSONALES = getPersonasByID(newPersonaID).ToList().First();
            historial.SCPM_CARGOS = getCargoByID(cargo_id);
            db.AddToSCPM_SUBROGA_HIST(historial);
            //save
            db.SaveChanges();
            HelperUtil.showNotifi("Nueva Historial de Subrogacion/encargo añadido.");
            return true;
        }

    }

    private SCPM_SUBROGA_HIST getSubrogaByID(int sub_hist_id)
    {
        return (from h in db.SCPM_SUBROGA_HIST where h.SUB_HIS_ID == sub_hist_id select h).FirstOrDefault();
    }

    public SCPM_UNIDAD getUnidadByID(int p)
    {
        return (from h in db.SCPM_UNIDAD where h.UNI_COD == p select h).FirstOrDefault();
    }

    public SCPM_RELACIONES_LABORALES getRelacionLabByID(int p)
    {
        return (from h in db.SCPM_RELACIONES_LABORALES where h.REL_LAB_ID == p select h).FirstOrDefault();
    }
}