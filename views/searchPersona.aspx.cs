using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class searchPersona : System.Web.UI.Page
{
    PersonaServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (!IsPostBack)
        {
            exampledata();

            Repeater1.DataSource = psvm.getAllPersonas();
            Repeater1.DataBind();

            if (Repeater1.Items.Count > 0)
            {
                Repeater1.Visible = true;
                emptyMsg.Visible = false;
            }
            else
            {
                Repeater1.Visible = false;
                emptyMsg.Visible = true;
            }
        }
    }

    private void exampledata()
    {
        Repeater1.DataSource = new List<SCPMdbModel.SCPM_PERSONALES>() { new SCPMdbModel.SCPM_PERSONALES(){
            PER_ID=12,PER_APE_PAT="correa",PER_APE_MAT="panchi",
            PER_NOM1="darwin",PER_NOM2="alejandro",PER_NUM_DOC="1722590948p"
            }};
        Repeater1.DataBind();
    }
    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {

            switch (comboFiltro.SelectedValue)
            {
                case "0": Repeater1.DataSource = psvm.getPersonasByNumDoc(inFiltro.Text); break;
                case "1": Repeater1.DataSource = psvm.getPersonasByNombre(inFiltro.Text); break;
                case "2": Repeater1.DataSource = psvm.getPersonasByID(Convert.ToInt32(inFiltro.Text)); break;
                default: break;
            }

            Repeater1.DataBind();
            if (Repeater1.Items.Count > 0)
            {
                Repeater1.Visible = true;
                emptyMsg.Visible = false;
            }
            else
            {
                Repeater1.Visible = false;
                emptyMsg.Visible = true;
            }
        }
        catch (Exception ex)
        {

        }
    }
}