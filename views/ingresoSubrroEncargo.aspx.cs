using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ingresoSubrroEncargo : System.Web.UI.Page
{
    PuestoServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();

    }
    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {
            var puesto = psvm.getCargoByID(Convert.ToInt32(inFiltro.Text));
            if (puesto != null)
            {
                current_puesto_id.Value = puesto.CAR_ID.ToString();
                
                cargoWrap.Visible = false;
                personaWrap.Visible = false;
                search_res.Visible = true;
                //historial subroga/encargo
                puesto.SCPM_AREASReference.Load();
                //puesto.SCPM_SUBROGA_HIS
            }
            else
            {
                cargoWrap.Visible = false;
                personaWrap.Visible = false;
                search_res.Visible = true;
            }

        }
        catch (Exception ex)
        {
            cargoWrap.Visible = false;
            personaWrap.Visible = false;
            search_res.Visible = true;
        }
    }
    protected void saveAll_Click(object sender, EventArgs e)
    {

    }

}