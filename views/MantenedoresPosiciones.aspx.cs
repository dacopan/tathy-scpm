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
        comboRelacionLab.DataValueField = "REL_LAB_ID";
        comboRelacionLab.DataTextField = "REL_LAB_NOM";
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
                ComboArea_SelectedIndexChanged(ComboArea, null);
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
        UnidadEnabled.Checked = psvm.getUnidadByID(Convert.ToInt32(ComboUnidad.SelectedValue)).UNI_EST.Value;

    }

    protected void ComboArea_SelectedIndexChanged(object sender, EventArgs e)
    {
        AreaEnabled.Checked = psvm.getAreaByID(Convert.ToInt32(ComboArea.SelectedValue)).ARE_EST.Value;
        setDefaultText(sender, inArea);
    }


    protected void comboRelacionLab_SelectedIndexChanged(object sender, EventArgs e)
    {
        relacionLabEnabled.Checked = psvm.getRelacionLabByID(Convert.ToInt32(comboRelacionLab.SelectedValue)).REL_LAB_EST.Value;
        setDefaultText(sender, inRelacionLab);
    }

    protected void ComboDenominacion_SelectedIndexChanged(object sender, EventArgs e)
    {
        denominacionEnabled.Checked = psvm.getDenominacionByID(Convert.ToInt32(ComboDenominacion.SelectedValue)).DEN_EST.Value;
        setDefaultText(sender, InDenominacion);
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
            fillDenominaciones();
        }
        else
            HelperUtil.showNotifi("Denominación no añadida");
    }
    protected void editDenominacion_Click(object sender, EventArgs e)
    {
        if (ComboDenominacion.Enabled && psvm.editDenominacion(new SCPM_DENOMINACIONES() { DEN_ID = Convert.ToInt32(ComboDenominacion.SelectedValue), DEN_NOM = InDenominacion.Text, DEN_EST = denominacionEnabled.Checked }))
        {
            HelperUtil.showNotifi("Denominación editada");
            fillDenominaciones();
        }
        else
            HelperUtil.showNotifi("Denominación no editada");
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

    protected void addCargo_Click(object sender, EventArgs e)
    {
        var _area = psvm.getAreaByID(Convert.ToInt32(cargo_comboArea.SelectedValue));
        var _den = psvm.getDenominacionByID(Convert.ToInt32(cargo_denominacion.Value));
        _area.SCPM_CARGOS.Load();
        psvm.getAllDenominaciones();

        var contains = _area.SCPM_CARGOS.ToList().Any(u => u.CAR_NOM.Equals(inCargo.Text, StringComparison.InvariantCultureIgnoreCase) && u.SCPM_DENOMINACIONES.DEN_ID == _den.DEN_ID);
        if (contains)
        {
            HelperUtil.showNotifi("Cargo no añadido. Ya existe");
            return;
        }



        if (ComboArea.Enabled && psvm.addCargo(new SCPM_CARGOS()
        {
            CAR_NOM = inCargo.Text,
            SCPM_AREAS = _area,
            SCPM_DENOMINACIONES = _den,
            CAR_EST = true
        }))
        {
            HelperUtil.showNotifi("Cargo añadido");
            renderCargos();
        }
        else
            HelperUtil.showNotifi("Cargo no añadido");
    }

    protected void editCargo_Click(object sender, EventArgs e)
    {
        //SCPM_AREAS area = psvm.getAreaByID(Convert.ToInt32(cargo_comboArea.SelectedValue));
        List<SCPM_CARGOS> cargos = psvm.getCargosByAreaID(Convert.ToInt32(cargo_comboArea.SelectedValue));

        foreach (RepeaterItem item in Repeater1.Items)
        {
            int car_id = Convert.ToInt32((item.FindControl("car_id") as HiddenField).Value);
            SCPM_CARGOS cargo = (from c in cargos where c.CAR_ID == car_id select c).First();
            var _inCargo = (item.FindControl("inCargo") as TextBox).Text;
            var _denomina = Convert.ToInt32((item.FindControl("cargo_denominacion") as TextBox).Text);
            if (cargo != null)
            {
                cargo.CAR_NOM = _inCargo;
                cargo.CAR_EST = (item.FindControl("cargo_estado") as CheckBox).Checked;
                cargo.SCPM_DENOMINACIONESReference.Load();
                cargo.SCPM_DENOMINACIONES = psvm.getDenominacionByID(_denomina);
            }
            else
            {
                HelperUtil.showNotifi("cargo id:" + car_id + " no guardado");
            }
        }
        if (psvm.saveDB())
        {
            HelperUtil.showNotifi("Cargos actualizados");
            renderCargos();
        }
        else
            HelperUtil.showNotifi("Cargos no actualizados");

    }
}