using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Descripción breve de JefeModel
/// </summary>
public class JefeModel
{
    public JefeModel()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }

    string _nombre; //apellidos y nombres
    public string Nombre
    {
        get { return _nombre; }
        set { _nombre = value; }
    }

    string _cargo;//director,intendente,coordinador
    public string Cargo
    {
        get { return _cargo; }
        set { _cargo = value; }
    }


}