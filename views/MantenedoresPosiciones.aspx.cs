using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class MantenedoresPosiciones : System.Web.UI.Page
{
    PuestoServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            psvm = new PuestoServiceModel();
            ComboArea.Enabled = false;
            ComboArea.Items.Clear();
            ComboArea.AppendDataBoundItems = true;
            ComboArea.DataSource = psvm.getAllCargos();//ComboArea.DataSource = psvm.getAllRelacionLab();
            ComboArea.DataTextField = "ARE_NOM";
            ComboArea.DataValueField = "ARE_COD";
            ComboArea.Items.Add(new ListItem("--Seleccionar Area--", ""));
            ComboArea.DataBind();

            ComboUnidad.Items.Clear();
            ComboUnidad.AppendDataBoundItems = true;
            ComboUnidad.DataSource = psvm.getAllUnidades();
            ComboUnidad.DataTextField = "UNI_NOM";
            ComboUnidad.DataValueField = "UNI_COD";
            ComboUnidad.DataBind();
            if (ComboUnidad.Items.Count > 0)
            {
                ComboUnidad.Enabled = true;
                ComboUnidad_SelectedIndexChanged(ComboUnidad, null);
            }
            else
            {
                ComboUnidad.Enabled = false;
                ComboUnidad.Items.Add(new ListItem("--Añadir Unidad--", ""));
            }




            comboRelacionLab.Items.Clear();
            comboRelacionLab.AppendDataBoundItems = true;
            comboRelacionLab.DataSource = psvm.getAllRelacionLab();
            comboRelacionLab.DataTextField = "REL_LAB_NOM";
            comboRelacionLab.DataValueField = "REL_LAB_ID";
            if (comboRelacionLab.Items.Count < 1)
            {
                comboRelacionLab.Enabled = false;
                comboRelacionLab.Items.Add(new ListItem("--Añadir Relacion laboral--", ""));
            }
            comboRelacionLab.DataBind();



        }


    }

    protected void ComboUnidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        ComboArea.Items.Clear();
        ComboArea.Items.Add(new ListItem("--Seleccionar Area--", ""));
        ComboArea.AppendDataBoundItems = true;
        ComboArea.DataSource = psvm.getAreasByUnidad(Convert.ToInt32(ComboUnidad.SelectedItem.Value));
        ComboArea.DataTextField = "ARE_NOM";
        ComboArea.DataValueField = "ARE_COD";
        ComboArea.DataBind();
        if (ComboArea.Items.Count > 1)
        {
            ComboArea.Enabled = true;
            inArea.Text = "";
        }
        else
        {
            ComboArea.Enabled = false;
        }

        inUnidad.Text = ComboUnidad.SelectedItem.Text;

    }
    protected void ComboArea_SelectedIndexChanged(object sender, EventArgs e)
    {
        setDefaultText(sender, inArea);
    }


    protected void comboRelacionLab_SelectedIndexChanged(object sender, EventArgs e)
    {

        ComboDenominacion.Items.Clear();
        ComboDenominacion.AppendDataBoundItems = true;
        ComboDenominacion.DataSource = psvm.getAllDenominaciones();
        ComboDenominacion.DataTextField = "DEN_ID";
        ComboDenominacion.DataValueField = "DEN_NOM";
        if (ComboDenominacion.Items.Count < 1)
        {
            ComboDenominacion.Enabled = false;
            ComboDenominacion.Items.Add(new ListItem("--Añadir Denominacion--", ""));
        }
        ComboDenominacion.DataBind();
        setDefaultText(sender, inRelacionLab);
    }

    protected void ComboDenominacion_SelectedIndexChanged(object sender, EventArgs e)
    {
        ComboCargo.Items.Clear();
        ComboCargo.AppendDataBoundItems = true;
        //ComboCargo.DataSource = psvm.CargosByDenominacion();
        ComboCargo.DataTextField = "UNI_NOM";
        ComboCargo.DataValueField = "UNI_COD";
        if (ComboCargo.Items.Count < 1)
        {
            ComboCargo.Enabled = false;
            ComboCargo.Items.Add(new ListItem("--Añadir Cargo--", ""));
        }
        ComboCargo.DataBind();
        setDefaultText(sender, InDenominacion);
    }

    protected void ComboCargo_SelectedIndexChanged(object sender, EventArgs e)
    {
        setDefaultText(sender, InCargo);
    }

    void setDefaultText(object sender, TextBox t)
    {
        DropDownList s = (DropDownList)sender;
        if (!s.Text.Contains("--"))
        {
            t.Text = s.SelectedItem.Text;
        }
    }


    protected void AddUnidad_Click(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (psvm.addUnidad(new SCPM_UNIDAD() { UNI_EST = UnidadEnabled.Checked, UNI_NOM = inUnidad.Text }))
            HelperUtil.showNotifi("Unidad añadida");
        else
            HelperUtil.showNotifi("Unidad no añadido");
    }

    protected void editUnidad_Click(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (psvm.editUnidad(new SCPM_UNIDAD() { UNI_EST = UnidadEnabled.Checked, UNI_NOM = inUnidad.Text }))
            HelperUtil.showNotifi("Unidad modificada");
        else
            HelperUtil.showNotifi("Unidad no modificada");
    }
    protected void AddArea_Click(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (psvm.addArea(new SCPM_AREAS() { ARE_EST = AreaEnabled.Checked, ARE_NOM = inArea.Text }, Convert.ToInt32(ComboUnidad.SelectedValue)))
            HelperUtil.showNotifi("Area añadido");
        else
            HelperUtil.showNotifi("Area no añadido");
    }
    protected void editArea_Click(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (psvm.editArea(new SCPM_AREAS() { ARE_EST = AreaEnabled.Checked, ARE_NOM = inArea.Text }, Convert.ToInt32(ComboUnidad.SelectedValue)))
            HelperUtil.showNotifi("area modificada");
        else
            HelperUtil.showNotifi("area no modificada");

    }
    protected void editRelacionLab_Click(object sender, EventArgs e)
    {

    }
    protected void addRelacionLab_Click(object sender, EventArgs e)
    {

    }
    protected void addDenominacion_Click(object sender, EventArgs e)
    {

    }
    protected void editDenominacion_Click(object sender, EventArgs e)
    {

    }
    protected void addCargo_Click(object sender, EventArgs e)
    {

    }
    protected void editCargo_Click(object sender, EventArgs e)
    {

    }
}