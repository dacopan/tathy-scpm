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

    public bool addUnidad(SCPM_UNIDAD unidad)
    {

        var contains = db.SCPM_UNIDAD.ToList().Any(u => u.UNI_NOM == unidad.UNI_NOM);
        if (contains) return false;
        db.AddToSCPM_UNIDAD(unidad);
        db.SaveChanges();
        return true;
    }

    public bool editUnidad(SCPM_UNIDAD newUnidad)
    {

        var _unidad = from u in db.SCPM_UNIDAD where u.UNI_COD == newUnidad.UNI_COD select u;
        if (_unidad.Count() < 1) return false;
        var unidad = _unidad.FirstOrDefault();

        unidad.UNI_EST = newUnidad.UNI_EST;
        unidad.UNI_NOM = newUnidad.UNI_NOM;
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
        var _a = from a in db.SCPM_UNIDAD where a.UNI_COD == unidad select a;
        if (_a.Count() > 0)
        {
            _a.First().SCPM_AREAS.Add(newx);
            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool editArea(SCPM_AREAS newArea)
    {
        var _a = from a in db.SCPM_AREAS where a.ARE_COD == newArea.ARE_COD select a;
        var area = _a.First();

        area.ARE_NOM = newArea.ARE_NOM;
        area.ARE_EST = newArea.ARE_EST;

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
        var contains = db.SCPM_RELACIONES_LABORALES.ToList().Any(u => u.REL_LAB_NOM == newx.REL_LAB_NOM);
        if (contains) return false;
        db.AddToSCPM_RELACIONES_LABORALES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editRelacionLab(SCPM_RELACIONES_LABORALES newx)
    {
        var contains = db.SCPM_RELACIONES_LABORALES.ToList().Any(u => u.REL_LAB_NOM == newx.REL_LAB_NOM && u.REL_LAB_EST == newx.REL_LAB_EST);
        if (contains) return false;

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
        var contains = db.SCPM_DENOMINACIONES.ToList().Any(u => u.DEN_NOM == newx.DEN_NOM);
        if (contains) return false;
        db.AddToSCPM_DENOMINACIONES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editDenominacion(SCPM_DENOMINACIONES newx)
    {
        var contains = db.SCPM_DENOMINACIONES.ToList().Any(u => u.DEN_NOM == newx.DEN_NOM && u.DEN_ID != newx.DEN_ID);
        if (contains) return false;

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
        return (from a in db.SCPM_CARGOS where a.SCPM_AREAS.ARE_COD == newx select a).ToList();
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

    public bool addCargoHistorial(SCPM_PUESTO_HIST historial, int per_id, int cargo_id, int rel_lab_id)
    {
        //compruebo si persona ya tiene un cargo activo
        var ccp = (from h in db.SCPM_PUESTO_HIST.Include("SCPM_PERSONALES") where h.SCPM_PERSONALES.PER_ID == per_id select h).ToList();
        SCPM_PUESTO_HIST currentCargo = ccp.Count > 0 ? ccp.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : ccp.FirstOrDefault();

        if (currentCargo != null)
        {
            currentCargo.SCPM_CARGOSReference.Load();
            currentCargo.SCPM_RELACIONES_LABORALESReference.Load();
        }

        if (currentCargo != null && currentCargo.SCPM_CARGOS.CAR_ID != cargo_id && (currentCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(currentCargo.PST_HIS_FEC_FIN) <= 0))
        {
            HelperUtil.showNotifi("persona ya tiene un cargo activo, finalicelo para podr asignarlo a otro cargo");
            return false;
        }

        //
        var cc = (from h in db.SCPM_PUESTO_HIST.Include("SCPM_CARGOS") where h.SCPM_CARGOS.CAR_ID == cargo_id select h).ToList();
        var nowTime = DateTime.Now;

        SCPM_PUESTO_HIST lastCargo = cc.Count > 0 ? cc.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : cc.FirstOrDefault();

        if (lastCargo != null && (lastCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(lastCargo.PST_HIS_FEC_FIN) <= 0))
        //if (lastCargo != null && lastCargo.PST_HIS_FEC_FIN == null)
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
                    if (historial.PST_HIS_FEC_FIN != null && lastCargo.PST_HIS_FEC_INI.Value.CompareTo(historial.PST_HIS_FEC_FIN) > 0)
                    {
                        HelperUtil.showNotifi("fecha inicio no puede ser mayor que final");
                        return false;
                    }
                    lastCargo.PST_HIS_FEC_FIN = historial.PST_HIS_FEC_FIN;
                    db.SaveChanges();
                    HelperUtil.showNotifi("Solo fecha final actualizada");
                    return true;
                }
                else
                { // el cargo esta ocupado por la misma persona y relacion laboral no es la misma, se finaliza este historial y añade otro con la nueva relacion laboral
                    lastCargo.PST_HIS_FEC_FIN = nowTime;
                    db.SaveChanges();
                    HelperUtil.showNotifi("Relacion laboral anterior finalizada.");
                    //add new relacion
                    historial.SCPM_PERSONALES = getPersonasByID(per_id).ToList().First();
                    historial.SCPM_RELACIONES_LABORALES = getRalacionLabByID(rel_lab_id);
                    historial.SCPM_CARGOS = getCargoByID(cargo_id);
                    historial.PST_HIS_FEC_INI = nowTime;
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
            //fecha inicio no puede ser anterior a un historial fecha inicio
            /*if (lastCargo != null && ) { 
            HelperUtil.showNotifi("fecha inicio no puede ser menor que fecha anterior historial");
                return false;
            }*/
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

    public SCPM_CARGOS getCargoByID(int cargo_id)
    {
        return (from a in db.SCPM_CARGOS where a.CAR_ID == cargo_id select a).FirstOrDefault();
    }

    private SCPM_RELACIONES_LABORALES getRalacionLabByID(int rel_lab_id)
    {
        return (from a in db.SCPM_RELACIONES_LABORALES where a.REL_LAB_ID == rel_lab_id select a).FirstOrDefault();
    }

    //from personas service model
    public List<SCPM_PERSONALES> getPersonasByID(int p)
    {
        return (from a in db.SCPM_PERSONALES where a.PER_ID == p select a).ToList();
    }

    public List<SCPM_PERSONALES> getAllPersonas()
    {
        return db.SCPM_PERSONALES.ToList();
    }



    //current_puesto_id:        ID: id del cargo a subrogar
    //current_subroga_id:       id: personaID a la q esta subrogado o encargado     dcm: no esta subrogado
    //current_tipo_id:          1: si el puesto actual esta subrogado               2: puesto actual encargado          dcm: puesto no sugbrogado           
    //current_persona_id:       ID: personaID si el puesto esta ocupado             dcm: puesto no ocupado
    //newPersonaID:             ID: personaID a la cual se subrogará
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
}