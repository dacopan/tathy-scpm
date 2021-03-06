﻿using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Descripción breve de PersonaServiceModel
/// </summary>
public class PersonaServiceModel
{
    SCPMdbEntities db;
    public PersonaServiceModel()
    {
        db = new SCPMdbEntities();

    }
    public bool AcceptAllChanges()
    {
        try
        {
            db.AcceptAllChanges();
            return true;
        }
        catch (Exception ex)
        {
            return false;
        }
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

    public List<SCPM_PROVINCIAS> getAllProvincias()
    {
        return db.SCPM_PROVINCIAS.ToList();
    }

    public List<SCPM_PAIS> getAllPais()
    {
        return db.SCPM_PAIS.ToList();
    }

    public List<SCPMdbModel.SCPM_RAZAS> getAllRazas()
    {
        return db.SCPM_RAZAS.ToList();
    }

    public List<SCPM_PARENTESCOS> getAllParentesco()
    {
        return db.SCPM_PARENTESCOS.ToList();
    }

    public List<SCPM_PROFESIONES> getAllProfesion()
    {
        return db.SCPM_PROFESIONES.ToList();
    }

    public List<SCPM_ESTADOS_CIVILES> getAllEstadoCivil()
    {
        return db.SCPM_ESTADOS_CIVILES.ToList();
    }

    public List<SCPM_TIPO_IDENTIFICACIONES> getAllDocumentos()
    {
        return db.SCPM_TIPO_IDENTIFICACIONES.ToList();
    }

    public List<SCPM_TIPO_DISCAPACIDADES> getAllDiscapacidad()
    {
        return db.SCPM_TIPO_DISCAPACIDADES.ToList();
    }

    public object getCantonesByProvincia(int p)
    {
        var cantones = from c in db.SCPM_CANTONES where c.SCPM_PROVINCIAS.PRO_ID == p select c;
        return cantones.ToList();
    }

    public object getParroquiasByCanton(int p)
    {
        var par = from c in db.SCPM_PARROQUIAS where c.SCPM_CANTONES.CAN_ID == p select c;
        return par.ToList();
    }
    public object getSectorByParroquiaID(int p)
    {
        var par = from c in db.SCPM_SECTORES where c.SCPM_PARROQUIAS.PAR_ID == p select c;
        return par.ToList();
    }

    public bool addProvincia(SCPM_PROVINCIAS newx)
    {
        var contains = db.SCPM_PROVINCIAS.ToList().Any(u => u.PRO_NOM.Equals(newx.PRO_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.PRO_NOM == "") return false;
        db.AddToSCPM_PROVINCIAS(newx);
        db.SaveChanges();
        return true;

    }

    public bool editProvincia(SCPM_PROVINCIAS newx)
    {
        var contains = db.SCPM_PROVINCIAS.ToList().Any(u => u.PRO_NOM.Equals(newx.PRO_NOM, StringComparison.InvariantCultureIgnoreCase) && u.PRO_ID != newx.PRO_ID);
        if (contains || newx.PRO_NOM == "") return false;

        var _a = from a in db.SCPM_PROVINCIAS where a.PRO_ID == newx.PRO_ID select a;
        var area = _a.First();

        area.PRO_NOM = newx.PRO_NOM;
        area.PRO_EST = newx.PRO_EST;

        db.SaveChanges();
        return true;

    }

    public bool addCanton(SCPM_CANTONES newx, int idx)
    {
        var contains = db.SCPM_CANTONES.Include("SCPM_PROVINCIAS").ToList().Any(u => u.CAN_NOM.Equals(newx.CAN_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_PROVINCIAS.PRO_ID == idx);
        if (contains || newx.CAN_NOM == "") return false;

        var _a = from a in db.SCPM_PROVINCIAS where a.PRO_ID == idx select a;
        if (_a.Count() > 0)
        {
            _a.First().SCPM_CANTONES.Add(newx);
            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool editCanton(SCPM_CANTONES newx, int idx)
    {
        var contains = db.SCPM_CANTONES.Include("SCPM_PROVINCIAS").ToList().Any(u => u.CAN_NOM.Equals(newx.CAN_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_PROVINCIAS.PRO_ID == idx && u.CAN_ID != newx.CAN_ID);
        if (contains || newx.CAN_NOM == "") return false;

        var _a = from a in db.SCPM_CANTONES where a.CAN_ID == newx.CAN_ID select a;

        if (_a.Count() > 0)
        {
            var a = _a.First();
            a.CAN_NOM = newx.CAN_NOM;
            a.CAN_EST = newx.CAN_EST;

            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool addParroquia(SCPM_PARROQUIAS newx, int idx)
    {
        var contains = db.SCPM_PARROQUIAS.Include("SCPM_CANTONES").ToList().Any(u => u.PAR_NOM.Equals(newx.PAR_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_CANTONES.CAN_ID == idx);
        if (contains || newx.PAR_NOM == "") return false;

        var _a = from a in db.SCPM_CANTONES where a.CAN_ID == idx select a;
        if (_a.Count() > 0)
        {
            _a.First().SCPM_PARROQUIAS.Add(newx);
            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool editParroquia(SCPM_PARROQUIAS newx, int idx)
    {
        var contains = db.SCPM_PARROQUIAS.Include("SCPM_CANTONES").ToList().Any(u => u.PAR_NOM.Equals(newx.PAR_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_CANTONES.CAN_ID == idx && u.PAR_ID != newx.PAR_ID);
        if (contains || newx.PAR_NOM == "") return false;

        var _a = from a in db.SCPM_PARROQUIAS where a.PAR_ID == newx.PAR_ID select a;

        if (_a.Count() > 0)
        {
            var a = _a.First();
            a.PAR_NOM = newx.PAR_NOM;
            a.PAR_EST = newx.PAR_EST;

            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool addSector(SCPM_SECTORES newx, int idx)
    {
        var contains = db.SCPM_SECTORES.Include("SCPM_PARROQUIAS").ToList().Any(u => u.SEC_NOM.Equals(newx.SEC_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_PARROQUIAS.PAR_ID == idx);
        if (contains || newx.SEC_NOM == "") return false;

        var _a = from a in db.SCPM_PARROQUIAS where a.PAR_ID == idx select a;
        if (_a.Count() > 0)
        {
            _a.First().SCPM_SECTORES.Add(newx);
            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool editSector(SCPM_SECTORES newx, int idx)
    {
        var contains = db.SCPM_SECTORES.Include("SCPM_PARROQUIAS").ToList().Any(u => u.SEC_NOM.Equals(newx.SEC_NOM, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_PARROQUIAS.PAR_ID == idx && u.SEC_ID != newx.SEC_ID);
        if (contains || newx.SEC_NOM == "") return false;

        var _a = from a in db.SCPM_SECTORES where a.SEC_ID == newx.SEC_ID select a;

        if (_a.Count() > 0)
        {
            var a = _a.First();
            a.SEC_NOM = newx.SEC_NOM;
            a.SEC_EST = newx.SEC_EST;

            db.SaveChanges();
            return true;
        }
        else return false;
    }

    public bool addDiscapacidad(SCPM_TIPO_DISCAPACIDADES newx)
    {
        var contains = db.SCPM_TIPO_DISCAPACIDADES.ToList().Any(u => u.TIP_DIS_NOM.Equals(newx.TIP_DIS_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.TIP_DIS_NOM == "") return false;

        db.AddToSCPM_TIPO_DISCAPACIDADES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editDiscapacidad(SCPM_TIPO_DISCAPACIDADES newx)
    {
        var contains = db.SCPM_TIPO_DISCAPACIDADES.ToList().Any(u => u.TIP_DIS_NOM.Equals(newx.TIP_DIS_NOM, StringComparison.InvariantCultureIgnoreCase) && u.TIP_DIS_ID != newx.TIP_DIS_ID);
        if (contains || newx.TIP_DIS_NOM == "") return false;

        var _a = from a in db.SCPM_TIPO_DISCAPACIDADES where a.TIP_DIS_ID == newx.TIP_DIS_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.TIP_DIS_NOM = newx.TIP_DIS_NOM;
        area.TIP_DIS_EST = newx.TIP_DIS_EST;

        db.SaveChanges();
        return true;
    }

    public bool addDocumento(SCPM_TIPO_IDENTIFICACIONES newx)
    {
        var contains = db.SCPM_TIPO_IDENTIFICACIONES.ToList().Any(u => u.TIP_IDE_NOM.Equals(newx.TIP_IDE_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.TIP_IDE_NOM == "") return false;
        db.AddToSCPM_TIPO_IDENTIFICACIONES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editDocumento(SCPM_TIPO_IDENTIFICACIONES newx)
    {
        var contains = db.SCPM_TIPO_IDENTIFICACIONES.ToList().Any(u => u.TIP_IDE_NOM.Equals(newx.TIP_IDE_NOM, StringComparison.InvariantCultureIgnoreCase) && u.TIP_IDE_COD != newx.TIP_IDE_COD);
        if (contains || newx.TIP_IDE_NOM == "") return false;

        var _a = from a in db.SCPM_TIPO_IDENTIFICACIONES where a.TIP_IDE_COD == newx.TIP_IDE_COD select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.TIP_IDE_NOM = newx.TIP_IDE_NOM;
        area.TIP_IDE_EST = newx.TIP_IDE_EST;

        db.SaveChanges();
        return true;
    }

    public bool addEstadoCivil(SCPM_ESTADOS_CIVILES newx)
    {
        var contains = db.SCPM_ESTADOS_CIVILES.ToList().Any(u => u.EST_CIV_NOM.Equals(newx.EST_CIV_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.EST_CIV_NOM == "") return false;

        db.AddToSCPM_ESTADOS_CIVILES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editEstadoCivil(SCPM_ESTADOS_CIVILES newx)
    {
        var contains = db.SCPM_ESTADOS_CIVILES.ToList().Any(u => u.EST_CIV_NOM.Equals(newx.EST_CIV_NOM, StringComparison.InvariantCultureIgnoreCase) && u.EST_CIV_ID != newx.EST_CIV_ID);
        if (contains || newx.EST_CIV_NOM == "") return false;

        var _a = from a in db.SCPM_ESTADOS_CIVILES where a.EST_CIV_ID == newx.EST_CIV_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.EST_CIV_NOM = newx.EST_CIV_NOM;
        area.EST_CIV_EST = newx.EST_CIV_EST;

        db.SaveChanges();
        return true;
    }



    public bool addProfesion(SCPM_PROFESIONES newx)
    {
        var contains = db.SCPM_PROFESIONES.ToList().Any(u => u.PROF_NOM.Equals(newx.PROF_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.PROF_NOM == "") return false;

        db.AddToSCPM_PROFESIONES(newx);
        db.SaveChanges();
        return true;
    }

    public bool editProfesion(SCPM_PROFESIONES newx)
    {
        var contains = db.SCPM_PROFESIONES.ToList().Any(u => u.PROF_NOM.Equals(newx.PROF_NOM, StringComparison.InvariantCultureIgnoreCase) && u.PROF_ID != newx.PROF_ID);
        if (contains || newx.PROF_NOM == "") return false;

        var _a = from a in db.SCPM_PROFESIONES where a.PROF_ID == newx.PROF_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.PROF_NOM = newx.PROF_NOM;
        area.PROF_EST = newx.PROF_EST;

        db.SaveChanges();
        return true;
    }

    public bool addParentesco(SCPM_PARENTESCOS newx)
    {
        var contains = db.SCPM_PARENTESCOS.ToList().Any(u => u.PARE_NOM.Equals(newx.PARE_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.PARE_NOM == "") return false;

        db.AddToSCPM_PARENTESCOS(newx);
        db.SaveChanges();
        return true;
    }

    public bool editParentesco(SCPM_PARENTESCOS newx)
    {
        var contains = db.SCPM_PARENTESCOS.ToList().Any(u => u.PARE_NOM.Equals(newx.PARE_NOM, StringComparison.InvariantCultureIgnoreCase) && u.PARE_ID != newx.PARE_ID);
        if (contains || newx.PARE_NOM == "") return false;

        var _a = from a in db.SCPM_PARENTESCOS where a.PARE_ID == newx.PARE_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.PARE_NOM = newx.PARE_NOM;
        area.PARE_EST = newx.PARE_EST;

        db.SaveChanges();
        return true;
    }

    public bool addRaza(SCPMdbModel.SCPM_RAZAS newx)
    {
        var contains = db.SCPM_RAZAS.ToList().Any(u => u.RAZ_NOM.Equals(newx.RAZ_NOM, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.RAZ_NOM == "") return false;

        db.AddToSCPM_RAZAS(newx);
        db.SaveChanges();
        return true;
    }

    public bool editRaza(SCPM_RAZAS newx)
    {
        var contains = db.SCPM_RAZAS.ToList().Any(u => u.RAZ_NOM.Equals(newx.RAZ_NOM, StringComparison.InvariantCultureIgnoreCase) && u.RAZ_ID != newx.RAZ_ID);
        if (contains || newx.RAZ_NOM == "") return false;

        var _a = from a in db.SCPM_RAZAS where a.RAZ_ID == newx.RAZ_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.RAZ_NOM = newx.RAZ_NOM;
        area.RAZ_EST = newx.RAZ_EST;

        db.SaveChanges();
        return true;
    }

    public bool addPais(SCPM_PAIS newx)
    {
        var contains = db.SCPM_PAIS.ToList().Any(u => u.PAI_NACIONALIDAD.Equals(newx.PAI_NACIONALIDAD, StringComparison.InvariantCultureIgnoreCase));
        if (contains || newx.PAI_NACIONALIDAD == "") return false;

        db.AddToSCPM_PAIS(newx);
        db.SaveChanges();
        return true;
    }

    public bool editPais(SCPM_PAIS newx)
    {
        var contains = db.SCPM_PAIS.ToList().Any(u => u.PAI_NACIONALIDAD.Equals(newx.PAI_NACIONALIDAD, StringComparison.InvariantCultureIgnoreCase) && u.PAI_ID != newx.PAI_ID);
        if (contains || newx.PAI_NACIONALIDAD == "") return false;

        var _a = from a in db.SCPM_PAIS where a.PAI_ID == newx.PAI_ID select a;
        if (_a.Count() < 1) return false;
        var area = _a.First();

        area.PAI_NACIONALIDAD = newx.PAI_NACIONALIDAD;
        area.PAI_EST = newx.PAI_EST;

        db.SaveChanges();
        return true;
    }


    public bool addPersona(SCPMdbModel.SCPM_PERSONALES newx)
    {
        var contains = db.SCPM_PERSONALES.ToList().Any(u => u.PER_NUM_DOC == newx.PER_NUM_DOC);
        if (contains) return false;
        db.AddToSCPM_PERSONALES(newx);
        db.SaveChanges();
        return true;
    }

    public SCPM_TIPO_IDENTIFICACIONES getIdentificacionByID(int newx)
    {
        return (from a in db.SCPM_TIPO_IDENTIFICACIONES where a.TIP_IDE_COD == newx select a).First();
    }
    public SCPM_PAIS getPaisByID(int newx)
    {
        return (from a in db.SCPM_PAIS where a.PAI_ID == newx select a).First();
    }

    public SCPMdbModel.SCPM_RAZAS getRazaByID(int newx)
    {
        return (from a in db.SCPM_RAZAS where a.RAZ_ID == newx select a).First();
    }

    public SCPM_ESTADOS_CIVILES getEstadoCivilByID(int newx)
    {
        return (from a in db.SCPM_ESTADOS_CIVILES where a.EST_CIV_ID == newx select a).First();
    }

    public SCPM_SECTORES getSectorByID(int newx)
    {
        return (from a in db.SCPM_SECTORES where a.SEC_ID == newx select a).First();
    }

    public SCPM_PROFESIONES getProfesionByID(int newx)
    {
        return (from a in db.SCPM_PROFESIONES where a.PROF_ID == newx select a).First();
    }

    public List<DiscapacidadControl> getAllDiscapacidadControl()
    {
        var discapacidades = getAllDiscapacidad();
        List<DiscapacidadControl> disc = new List<DiscapacidadControl>();
        foreach (var item in discapacidades)
        {
            disc.Add(new DiscapacidadControl() { TIP_DIS_ID = item.TIP_DIS_ID, TIP_DIS_NOM = item.TIP_DIS_NOM, DIS_POR = 0 });
        }
        return disc;
    }

    public SCPM_TIPO_DISCAPACIDADES getDiscapacidadByID(int newx)
    {
        return (from a in db.SCPM_TIPO_DISCAPACIDADES where a.TIP_DIS_ID == newx select a).First();
    }

    public SCPM_PARENTESCOS getParentezcoByID(int newx)
    {
        return (from a in db.SCPM_PARENTESCOS where a.PARE_ID == newx select a).First();
    }



    public List<SCPMdbModel.SCPM_PERSONALES> getPersonasByNumDoc(string filtro)
    {
        return (from a in db.SCPM_PERSONALES where a.PER_NUM_DOC.Equals(filtro) select a).ToList();
    }

    public object getPersonasByNombre(string filtro)
    {
        return (from a in db.SCPM_PERSONALES where (a.PER_APE_PAT + " " + a.PER_APE_MAT + " " + a.PER_NOM1 + " " + a.PER_NOM2).Contains(filtro) select a).ToList();
    }

    public List<SCPMdbModel.SCPM_PERSONALES> getPersonasByID(int p)
    {
        return (from a in db.SCPM_PERSONALES where a.PER_ID == p select a).ToList();
    }

    public object getAllPersonas()
    {
        return db.SCPM_PERSONALES.ToList();
    }



    public void detach(SCPM_PERSONALES p)
    {
        db.Detach(p);
    }
    public void atach(SCPM_PERSONALES p)
    {
        //db.Attach(p, true);
        saveDB();
    }

    public void refresh(object p)
    {
        db.Refresh(System.Data.Objects.RefreshMode.StoreWins, p);
    }

    public void deleteConyugue(SCPM_CONYUGES con)
    {
        db.DeleteObject(con);
    }
    public void deleteteDiscapaciad(SCPM_DISCAPACIDADES dis)
    {
        db.DeleteObject(dis);
    }

    public SCPM_PROVINCIAS getProvinciaByID(int id)
    {
        return (from a in db.SCPM_PROVINCIAS where a.PRO_ID == id select a).First();
    }

    public SCPM_CANTONES getCantonByID(int id)
    {
        return (from a in db.SCPM_CANTONES where a.CAN_ID == id select a).First();
    }

    public SCPM_PARROQUIAS getParroquiaByID(int id)
    {
        return (from a in db.SCPM_PARROQUIAS where a.PAR_ID == id select a).First();
    }

    public SCPM_TIPO_IDENTIFICACIONES getDocumentoByID(int id)
    {
        return (from a in db.SCPM_TIPO_IDENTIFICACIONES where a.TIP_IDE_COD == id select a).First();
    }
}