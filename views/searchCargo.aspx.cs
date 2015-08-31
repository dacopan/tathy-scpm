using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class searchCargo : System.Web.UI.Page
{
    PuestoServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (!IsPostBack)
        {
            psvm.getAllDenominaciones(); 

            fillUnidades(cargo_comboUnidad, 1);  

            renderCargos();
        }
    }
    private void fillUnidades(DropDownList combo, int c)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true; 
        combo.DataSource = psvm.getAllUnidades();
        combo.DataValueField = "UNI_COD";
        combo.DataTextField = "UNI_NOM";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;

            cargo_comboUnidad_SelectedIndexChanged(combo, null);
        }
        else
        {
            combo.Enabled = false;



            combo.Items.Add(new ListItem("--Ninguno--", ""));
            cargo_comboArea.Enabled = false;
            cargo_comboArea.Items.Clear();
            cargo_comboArea.AppendDataBoundItems = true;
            cargo_comboArea.Items.Add(new ListItem("--Ninguno--", ""));
            cargo_comboArea.DataBind();

        }



    }

    private void fillAreas(DropDownList combo, int c)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = psvm.getAreasByUnidad(Convert.ToInt32(cargo_comboUnidad.SelectedItem.Value));
        combo.DataTextField = "ARE_NOM";
        combo.DataValueField = "ARE_COD";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
            cargo_comboArea_SelectedIndexChanged(cargo_comboArea, null);

        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--Ninguno--", ""));

        }
    }

    protected void cargo_comboArea_SelectedIndexChanged(object sender, EventArgs e)
    {
        renderCargos();
    }
    protected void cargo_comboUnidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillAreas(cargo_comboArea, 1);
        renderCargos();
    }
    private void renderCargos()
    {
        if (cargo_comboArea.Enabled)
        {
            Repeater1.Visible = true;
            cargo_empty.Visible = false;

            Repeater1.DataSource = psvm.getCargosByAreaID(Convert.ToInt32(cargo_comboArea.SelectedValue));
            Repeater1.DataBind();
            if (Repeater1.Items.Count > 0)
            {
                Repeater1.Visible = true;
                cargo_empty.Visible = false;
            }
            else
            {
                Repeater1.Visible = false;
                cargo_empty.Visible = true;
            }
        }
        else
        {
            Repeater1.Visible = false;
            cargo_empty.Visible = true;
        }
    }

}