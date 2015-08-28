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
        psvm = new PuestoServiceModel();
        if (!IsPostBack)
        {

            fillUnidades(ComboUnidad, 0);
            fillUnidades(cargo_comboUnidad, 1);

            fillRelacionLab();

            fillDenominaciones();

            renderCargos();
        }


    }

    private void fillRelacionLab()
    {
        comboRelacionLab.Enabled = false;
        comboRelacionLab.Items.Clear();
        comboRelacionLab.AppendDataBoundItems = true;
        comboRelacionLab.DataSource = psvm.getAllRelacionLab();
        comboRelacionLab.DataValueField = "EST_CIV_ID";
        comboRelacionLab.DataTextField = "EST_CIV_NOM";
        comboRelacionLab.DataBind();
        if (comboRelacionLab.Items.Count > 0)
        {
            comboRelacionLab.Enabled = true;
            comboRelacionLab_SelectedIndexChanged(comboRelacionLab, null);
        }
        else
        {
            comboRelacionLab.Enabled = false;
            comboRelacionLab.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillDenominaciones()
    {
        ComboDenominacion.Enabled = false;
        ComboDenominacion.Items.Clear();
        ComboDenominacion.AppendDataBoundItems = true;
        ComboDenominacion.DataSource = psvm.getAllDenominaciones();
        ComboDenominacion.DataValueField = "DEN_ID";
        ComboDenominacion.DataTextField = "DEN_NOM";
        ComboDenominacion.DataBind();
        if (ComboDenominacion.Items.Count > 0)
        {
            ComboDenominacion.Enabled = true;
            ComboDenominacion_SelectedIndexChanged(ComboDenominacion, null);
        }
        else
        {
            ComboDenominacion.Enabled = false;
            ComboDenominacion.Items.Add(new ListItem("--Añadir--", ""));
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
            if (c == 0)
            {
                ComboUnidad_SelectedIndexChanged(combo, null);
            }
            else
            {
                cargo_comboUnidad_SelectedIndexChanged(combo, null);
            }
        }
        else
        {
            combo.Enabled = false;


            if (c == 0)
            {
                combo.Items.Add(new ListItem("--Añadir Unidad--", ""));

                ComboArea.Enabled = false;
                ComboArea.Items.Clear();
                ComboArea.AppendDataBoundItems = true;
                ComboArea.Items.Add(new ListItem("--Añadir area--", ""));
                ComboArea.DataBind();
            }
            else
            {
                combo.Items.Add(new ListItem("--Ninguno--", ""));
                cargo_comboArea.Enabled = false;
                cargo_comboArea.Items.Clear();
                cargo_comboArea.AppendDataBoundItems = true;
                cargo_comboArea.Items.Add(new ListItem("--Ninguno--", ""));
                cargo_comboArea.DataBind();
            }

        }



    }

    private void fillAreas(DropDownList combo, int c)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = (c == 0 ? psvm.getAreasByUnidad(Convert.ToInt32(ComboUnidad.SelectedItem.Value)) : psvm.getAreasByUnidad(Convert.ToInt32(cargo_comboUnidad.SelectedItem.Value)));
        combo.DataTextField = "ARE_NOM";
        combo.DataValueField = "ARE_COD";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
            if (c == 0)
            {
                ComboArea_SelectedIndexChanged(ComboDenominacion, null);
            }
            else
            {
                cargo_comboArea_SelectedIndexChanged(cargo_comboArea, null);
            }


        }
        else
        {
            combo.Enabled = false;
            if (c == 0)
            {
                combo.Items.Add(new ListItem("--Añadir--", ""));
            }
            else
            {
                combo.Items.Add(new ListItem("--Ninguno--", ""));
            }

        }
    }

    protected void ComboUnidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillAreas(ComboArea, 0);

        inUnidad.Text = ComboUnidad.SelectedItem.Text;
        //UnidadEnabled.Checked=

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

        if (psvm.addUnidad(new SCPM_UNIDAD() { UNI_EST = UnidadEnabled.Checked, UNI_NOM = inUnidad.Text }))
        {
            HelperUtil.showNotifi("Unidad añadida");
            fillUnidades(ComboUnidad, 0);
            fillUnidades(cargo_comboUnidad, 1);
        }
        else
            HelperUtil.showNotifi("Unidad no añadido");
    }

    protected void editUnidad_Click(object sender, EventArgs e)
    {

        psvm = new PuestoServiceModel();
        if (ComboUnidad.Enabled && psvm.editUnidad(new SCPM_UNIDAD() { UNI_COD = Convert.ToInt32(ComboUnidad.SelectedValue), UNI_EST = UnidadEnabled.Checked, UNI_NOM = inUnidad.Text }))
        {
            HelperUtil.showNotifi("Unidad modificada");
            fillUnidades(ComboUnidad, 0);
            fillUnidades(cargo_comboUnidad, 1);
        }
        else
            HelperUtil.showNotifi("Unidad no modificada");
    }

    protected void AddArea_Click(object sender, EventArgs e)
    {

        if (psvm.addArea(new SCPM_AREAS() { ARE_EST = AreaEnabled.Checked, ARE_NOM = inArea.Text }, Convert.ToInt32(ComboUnidad.SelectedValue)))
        {
            HelperUtil.showNotifi("Area añadido");
            fillAreas(ComboArea, 0);
            fillAreas(cargo_comboArea, 1);
        }
        else
            HelperUtil.showNotifi("Area no añadido");
    }

    protected void editArea_Click(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        if (ComboArea.Enabled && psvm.editArea(new SCPM_AREAS() { ARE_COD = Convert.ToInt32(ComboArea.SelectedValue), ARE_EST = AreaEnabled.Checked, ARE_NOM = inArea.Text }))
        {
            HelperUtil.showNotifi("Area modificada");
            fillAreas(ComboArea, 0);
            fillAreas(cargo_comboArea, 1);
        }
        else
            HelperUtil.showNotifi("area no modificada");

    }


    protected void addRelacionLab_Click(object sender, EventArgs e)
    {
        if (psvm.addRelacionLab(new SCPM_RELACIONES_LABORALES() { REL_LAB_NOM = inRelacionLab.Text, REL_LAB_EST = relacionLabEnabled.Checked }))
        {
            HelperUtil.showNotifi("Relacion laboral añadida");
            fillRelacionLab();
        }
        else
            HelperUtil.showNotifi("Relacion laboral no añadida");
    }
    protected void editRelacionLab_Click(object sender, EventArgs e)
    {
        if (comboRelacionLab.Enabled && psvm.editRelacionLab(new SCPM_RELACIONES_LABORALES() { REL_LAB_ID = Convert.ToInt32(comboRelacionLab.SelectedValue), REL_LAB_NOM = inRelacionLab.Text, REL_LAB_EST = relacionLabEnabled.Checked }))
        {
            HelperUtil.showNotifi("Relacion laboral editada");
            fillRelacionLab();
        }
        else
            HelperUtil.showNotifi("Relacion laboral no editada");
    }

    protected void addDenominacion_Click(object sender, EventArgs e)
    {
        if (psvm.addDenominacion(new SCPM_DENOMINACIONES() { DEN_NOM = InDenominacion.Text, DEN_EST = denominacionEnabled.Checked }))
        {
            HelperUtil.showNotifi("Denominación añadida");
            fillRelacionLab();
        }
        else
            HelperUtil.showNotifi("Denominación no añadida");
    }
    protected void editDenominacion_Click(object sender, EventArgs e)
    {
        if (ComboDenominacion.Enabled && psvm.editDenominacion(new SCPM_DENOMINACIONES() { DEN_ID = Convert.ToInt32(ComboDenominacion.SelectedValue), DEN_NOM = InDenominacion.Text, DEN_EST = denominacionEnabled.Checked }))
        {
            HelperUtil.showNotifi("Denominación editada");
            fillRelacionLab();
        }
        else
            HelperUtil.showNotifi("Denominación no editada");
    }
    protected void addCargo_Click(object sender, EventArgs e)
    {
        renderCargos();
    }
    protected void editCargo_Click(object sender, EventArgs e)
    {
        renderCargos();
    }
    protected void cargo_comboArea_SelectedIndexChanged(object sender, EventArgs e)
    {
        renderCargos();
    }
    protected void cargo_comboUnidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillAreas(cargo_comboArea, 0);
        renderCargos();
    }

    private void renderCargos()
    {
        if (cargo_comboArea.Enabled) { } else { }
    }
}