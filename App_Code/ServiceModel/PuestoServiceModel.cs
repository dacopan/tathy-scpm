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

        var contains = db.SCPM_UNIDAD.Any(u => u.UNI_NOM == unidad.UNI_NOM);
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

    public bool addArea(SCPM_AREAS area, int unidad)
    {

        db.AddToSCPM_AREAS(area);
        db.SaveChanges();
        return true;
    }
    public bool editArea(SCPM_AREAS newArea, int unidad)
    {
        var _a = from a in db.SCPM_AREAS where a.ARE_COD == newArea.ARE_COD select a;
        var area = _a.First();

        area.ARE_NOM = newArea.ARE_NOM;
        area.ARE_EST = newArea.ARE_EST;

        db.SaveChanges();
        return true;
    }



    public object getAllRelacionLab()
    {
        return db.SCPM_RELACIONES_LABORALES.ToList();
    }

    public object getAllDenominaciones()
    {
        return db.SCPM_DENOMINACIONES.ToList();
    }

    public object getAllCargos()
    {
        return db.SCPM_CARGOS.ToList();
    }

}