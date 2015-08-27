using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
//using ProcesosAmbiental;

    

public partial class MasterPage : System.Web.UI.MasterPage
{
    
   // Conexion VConexion = new Conexion();

    protected void Button3_Click(object sender, EventArgs e)
    {
        Session.Abandon();
        Response.Redirect("Login.aspx");
    }
    protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
    {
        Session.Abandon();
        Response.Redirect("Login.aspx");
    }
    protected void ImageButton2_Click(object sender, ImageClickEventArgs e)
    {
        
        string usuario1, tipo;
        usuario1 = Session["usuario"].ToString();
        //tipo = VConexion.LlenarDataSet2("select tipousuario from Ddr_Personal where Id_Usuario='" + Session["usuario"].ToString() + "'").Tables[0].Rows[0][0].ToString();
        tipo = "123";
        if (tipo == "122")
        {
            Response.Redirect("WebMenuPrincipal.aspx");
        }
        else{
            Response.Redirect("MenuProveedor.aspx");
                    }
    }
    protected void ImageButton3_Click(object sender, ImageClickEventArgs e)
    {
        Session.Abandon();
        Response.Redirect("Login.aspx");
        
    }
}
