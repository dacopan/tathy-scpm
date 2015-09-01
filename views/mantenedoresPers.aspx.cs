using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class mantenedoresPers : System.Web.UI.Page
{
    PersonaServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (!IsPostBack)
        {
            fillProvincias();

            //discapacidad
            fillDiscapacidad();

            //documento
            fillDocumento();


            //estado civil
            fillEstadoCivil();

            //comboProfesion
            fillProfesion();

            //comboParentesco
            fillPArentesco();

            //coboRaza
            fillRaza();

            //comboPais
            fillPais();


        }

    }

    private void fillPais()
    {
        comboPais.Enabled = false;
        comboPais.Items.Clear();
        comboPais.AppendDataBoundItems = true;
        comboPais.DataSource = psvm.getAllPais();
        comboPais.DataValueField = "PAI_ID";
        comboPais.DataTextField = "PAI_NACIONALIDAD";
        comboPais.DataBind();
        if (comboPais.Items.Count > 0)
        {
            comboPais.Enabled = true;
            comboPais_SelectedIndexChanged(comboPais, null);
        }
        else
        {
            comboPais.Enabled = false;
            comboPais.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillRaza()
    {
        coboRaza.Enabled = false;
        coboRaza.Items.Clear();
        coboRaza.AppendDataBoundItems = true;
        coboRaza.DataSource = psvm.getAllRazas();
        coboRaza.DataValueField = "RAZ_ID";
        coboRaza.DataTextField = "RAZ_NOM";
        coboRaza.DataBind();
        if (coboRaza.Items.Count > 0)
        {
            coboRaza.Enabled = true;
            coboRaza_SelectedIndexChanged(coboRaza, null);
        }
        else
        {
            coboRaza.Enabled = false;
            coboRaza.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillPArentesco()
    {
        comboParentesco.Enabled = false;
        comboParentesco.Items.Clear();
        comboParentesco.AppendDataBoundItems = true;
        comboParentesco.DataSource = psvm.getAllParentesco();
        comboParentesco.DataValueField = "PARE_ID";
        comboParentesco.DataTextField = "PARE_NOM";
        comboParentesco.DataBind();
        if (comboParentesco.Items.Count > 0)
        {
            comboParentesco.Enabled = true;
            comboParentesco_SelectedIndexChanged(comboParentesco, null);
        }
        else
        {
            comboParentesco.Enabled = false;
            comboParentesco.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillProfesion()
    {
        comboProfesion.Enabled = false;
        comboProfesion.Items.Clear();
        comboProfesion.AppendDataBoundItems = true;
        comboProfesion.DataSource = psvm.getAllProfesion();
        comboProfesion.DataValueField = "PROF_ID";
        comboProfesion.DataTextField = "PROF_NOM";
        comboProfesion.DataBind();
        if (comboProfesion.Items.Count > 0)
        {
            comboProfesion.Enabled = true;
            comboProfesion_SelectedIndexChanged(comboProfesion, null);
        }
        else
        {
            comboProfesion.Enabled = false;
            comboProfesion.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillEstadoCivil()
    {
        comboEstadoCivil.Enabled = false;
        comboEstadoCivil.Items.Clear();
        comboEstadoCivil.AppendDataBoundItems = true;
        comboEstadoCivil.DataSource = psvm.getAllEstadoCivil();
        comboEstadoCivil.DataValueField = "EST_CIV_ID";
        comboEstadoCivil.DataTextField = "EST_CIV_NOM";
        comboEstadoCivil.DataBind();
        if (comboEstadoCivil.Items.Count > 0)
        {
            comboEstadoCivil.Enabled = true;
            comboEstadoCivil_SelectedIndexChanged(comboEstadoCivil, null);
        }
        else
        {
            comboEstadoCivil.Enabled = false;
            comboEstadoCivil.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillDocumento()
    {
        comboDocumento.Enabled = false;
        comboDocumento.Items.Clear();
        comboDocumento.AppendDataBoundItems = true;
        comboDocumento.DataSource = psvm.getAllDocumentos();
        comboDocumento.DataValueField = "TIP_IDE_COD";
        comboDocumento.DataTextField = "TIP_IDE_NOM";
        comboDocumento.DataBind();
        if (comboDocumento.Items.Count > 0)
        {
            comboDocumento.Enabled = true;
            comboDocumento_SelectedIndexChanged(comboDocumento, null);
        }
        else
        {
            comboDocumento.Enabled = false;
            comboDocumento.Items.Add(new ListItem("--Añadir Documento--", ""));
        }
    }

    private void fillDiscapacidad()
    {
        comboDiscapacidad.Enabled = false;
        comboDiscapacidad.Items.Clear();
        comboDiscapacidad.AppendDataBoundItems = true;
        comboDiscapacidad.DataSource = psvm.getAllDiscapacidad();
        comboDiscapacidad.DataValueField = "TIP_DIS_ID";
        comboDiscapacidad.DataTextField = "TIP_DIS_NOM";
        comboDiscapacidad.DataBind();
        if (comboDiscapacidad.Items.Count > 0)
        {
            comboDiscapacidad.Enabled = true;
            comboDiscapacidad_SelectedIndexChanged(comboDiscapacidad, null);
        }
        else
        {
            comboDiscapacidad.Enabled = false;
            comboDiscapacidad.Items.Add(new ListItem("--Añadir discapacidad--", ""));
        }
    }

    private void fillProvincias()
    {
        comboProvincia.Enabled = false;
        comboProvincia.Items.Clear();
        comboProvincia.AppendDataBoundItems = true;
        comboProvincia.DataSource = psvm.getAllProvincias();
        comboProvincia.DataValueField = "PRO_ID";
        comboProvincia.DataTextField = "PRO_NOM";
        comboProvincia.DataBind();
        if (comboProvincia.Items.Count > 0)
        {
            comboProvincia.Enabled = true;
            comboProvincia_SelectedIndexChanged(comboProvincia, null);


        }
        else
        {
            comboProvincia.Enabled = false;
            comboProvincia.Items.Add(new ListItem("--Añadir provincia--", ""));


            ComboCanton.Enabled = false;
            ComboCanton.Items.Add(new ListItem("--Añadir--", ""));

            ComboParroquia.Enabled = false;
            ComboParroquia.Items.Add(new ListItem("--Añadir--", ""));

            comboSector.Enabled = false;
            comboSector.Items.Add(new ListItem("--Añadir--", ""));
        }



    }

    private void fillCantones()
    {
        psvm = new PersonaServiceModel();
        ComboCanton.Items.Clear();
        ComboCanton.AppendDataBoundItems = true;
        ComboCanton.DataSource = psvm.getCantonesByProvincia(Convert.ToInt32(comboProvincia.SelectedItem.Value));
        ComboCanton.DataTextField = "CAN_NOM";
        ComboCanton.DataValueField = "CAN_ID";
        ComboCanton.DataBind();
        if (ComboCanton.Items.Count > 0)
        {
            ComboCanton.Enabled = true;
            inCanton.Text = "";
            ComboCanton_SelectedIndexChanged(ComboCanton, null);
        }
        else
        {
            ComboCanton.Enabled = false;
            ComboCanton.Items.Add(new ListItem("--añadir--", ""));

            ComboParroquia.Enabled = false;
            ComboParroquia.Items.Add(new ListItem("--Añadir--", ""));

            comboSector.Enabled = false;
            comboSector.Items.Add(new ListItem("--Añadir--", ""));
        }


    }

    private void fillParroquias()
    {
        psvm = new PersonaServiceModel();
        ComboParroquia.Items.Clear();
        ComboParroquia.AppendDataBoundItems = true;
        ComboParroquia.DataSource = psvm.getParroquiasByCanton(Convert.ToInt32(ComboCanton.SelectedItem.Value));
        ComboParroquia.DataTextField = "PAR_NOM";
        ComboParroquia.DataValueField = "PAR_ID";
        ComboParroquia.DataBind();
        if (ComboParroquia.Items.Count > 0)
        {
            ComboParroquia.Enabled = true;
            inParroquia.Text = "";
            ComboParroquia_SelectedIndexChanged(ComboParroquia, null);
        }
        else
        {
            ComboParroquia.Enabled = false;
            ComboParroquia.Items.Add(new ListItem("--Añadir--", ""));

            comboSector.Enabled = false;
            comboSector.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    private void fillSectores()
    {
        psvm = new PersonaServiceModel();
        comboSector.Items.Clear();
        comboSector.AppendDataBoundItems = true;
        comboSector.DataSource = psvm.getSectorByParroquiaID(Convert.ToInt32(ComboParroquia.SelectedItem.Value));
        comboSector.DataTextField = "SEC_NOM";
        comboSector.DataValueField = "SEC_ID";
        comboSector.DataBind();
        if (comboSector.Items.Count > 0)
        {
            comboSector.Enabled = true;
            inSector.Text = "";
            comboSector_SelectedIndexChanged(comboSector, null);
        }
        else
        {
            comboSector.Enabled = false;
            comboSector.Items.Add(new ListItem("--Añadir--", ""));
        }
    }

    protected void comboProvincia_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillCantones();
        onProvincia.Checked = psvm.getProvinciaByID(Convert.ToInt32(comboProvincia.SelectedValue)).PRO_EST.Value;
        inProvincia.Text = comboProvincia.SelectedItem.Text;
    }
    protected void ComboCanton_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillParroquias();
        onCanton.Checked = psvm.getCantonByID(Convert.ToInt32(ComboCanton.SelectedValue)).CAN_EST.Value;
        inCanton.Text = ComboCanton.SelectedItem.Text;
    }
    protected void ComboParroquia_SelectedIndexChanged(object sender, EventArgs e)
    {
        inParroquia.Text = ComboParroquia.SelectedItem.Text;
        fillSectores();
        onParroquia.Checked = psvm.getParroquiaByID(Convert.ToInt32(ComboParroquia.SelectedValue)).PAR_EST.Value;
    }

    protected void comboSector_SelectedIndexChanged(object sender, EventArgs e)
    {
        inSector.Text = comboSector.SelectedItem.Text;
        onSector.Checked = psvm.getSectorByID(Convert.ToInt32(comboSector.SelectedValue)).SEC_EST.Value;
    }
    protected void comboDiscapacidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        inDiscapacidad.Text = comboDiscapacidad.SelectedItem.Text;
        onDiscapacidad.Checked = psvm.getDiscapacidadByID(Convert.ToInt32(comboDiscapacidad.SelectedValue)).TIP_DIS_EST.Value;
    }
    protected void comboDocumento_SelectedIndexChanged(object sender, EventArgs e)
    {
        inDocumento.Text = comboDocumento.SelectedItem.Text;
        onDocumento.Checked = psvm.getDocumentoByID(Convert.ToInt32(comboDocumento.SelectedValue)).TIP_IDE_EST.Value;
    }
    protected void comboEstadoCivil_SelectedIndexChanged(object sender, EventArgs e)
    {
        inEstadoCivil.Text = comboEstadoCivil.SelectedItem.Text;
        onEstadoCivil.Checked = psvm.getEstadoCivilByID(Convert.ToInt32(comboEstadoCivil.SelectedValue)).EST_CIV_EST.Value;
    }
    protected void comboProfesion_SelectedIndexChanged(object sender, EventArgs e)
    {
        inProfesion.Text = comboProfesion.SelectedItem.Text;
        onProfesion.Checked = psvm.getProfesionByID(Convert.ToInt32(comboProfesion.SelectedValue)).PROF_EST.Value;
    }
    protected void comboParentesco_SelectedIndexChanged(object sender, EventArgs e)
    {
        inParentesco.Text = comboParentesco.SelectedItem.Text;
        onParentesco.Checked = psvm.getParentezcoByID(Convert.ToInt32(comboParentesco.SelectedValue)).PARE_EST.Value;
    }
    protected void coboRaza_SelectedIndexChanged(object sender, EventArgs e)
    {
        inRaza.Text = coboRaza.SelectedItem.Text;
        onRaza.Checked = psvm.getRazaByID(Convert.ToInt32(coboRaza.SelectedValue)).RAZ_EST.Value;
    }
    protected void comboPais_SelectedIndexChanged(object sender, EventArgs e)
    {
        inPais.Text = comboPais.SelectedItem.Text;
        onPais.Checked = psvm.getPaisByID(Convert.ToInt32(comboPais.SelectedValue)).PAI_EST.Value;
    }
    protected void addProvincia_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addProvincia(new SCPM_PROVINCIAS() { PRO_NOM = inProvincia.Text, PRO_EST = onProvincia.Checked }))
        {
            fillProvincias();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");


    }
    protected void editProvincia_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editProvincia(new SCPM_PROVINCIAS() { PRO_ID = Convert.ToInt32(comboProvincia.SelectedValue), PRO_NOM = inProvincia.Text, PRO_EST = onProvincia.Checked }))
        {
            fillProvincias();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }
    protected void addCanton_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();

        if (psvm.addCanton(new SCPM_CANTONES() { CAN_NOM = inCanton.Text, CAN_EST = onCanton.Checked }, Convert.ToInt32(comboProvincia.SelectedValue)))
        {
            fillCantones();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");

    }
    protected void editCanton_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editCanton(new SCPM_CANTONES() { CAN_ID = Convert.ToInt32(ComboCanton.SelectedValue), CAN_NOM = inCanton.Text, CAN_EST = onCanton.Checked }))
        {
            fillCantones();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");

    }


    protected void addParroquia_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();

        if (psvm.addParroquia(new SCPM_PARROQUIAS() { PAR_NOM = inParroquia.Text, PAR_EST = onParroquia.Checked }, Convert.ToInt32(ComboCanton.SelectedValue)))
        {
            fillParroquias();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editParroquia_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editParroquia(new SCPM_PARROQUIAS() { PAR_ID = Convert.ToInt32(ComboParroquia.SelectedValue), PAR_NOM = inParroquia.Text, PAR_EST = onParroquia.Checked }))
        {
            fillParroquias();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void addDiscapacidad_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addDiscapacidad(new SCPM_TIPO_DISCAPACIDADES() { TIP_DIS_NOM = inDiscapacidad.Text, TIP_DIS_EST = onProvincia.Checked }))
        {
            fillDiscapacidad();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editDiscapacidad_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editDiscapacidad(new SCPM_TIPO_DISCAPACIDADES() { TIP_DIS_ID = Convert.ToInt32(comboDiscapacidad.SelectedValue), TIP_DIS_NOM = inDiscapacidad.Text, TIP_DIS_EST = onProvincia.Checked }))
        {
            fillDiscapacidad();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }


    protected void addDocumento_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addDocumento(new SCPM_TIPO_IDENTIFICACIONES() { TIP_IDE_NOM = inDocumento.Text, TIP_IDE_EST = onDocumento.Checked }))
        {
            fillDocumento();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");

    }
    protected void editDocumento_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editDocumento(new SCPM_TIPO_IDENTIFICACIONES() { TIP_IDE_COD = Convert.ToInt32(comboDocumento.SelectedValue), TIP_IDE_NOM = inDocumento.Text, TIP_IDE_EST = onDocumento.Checked }))
        {
            fillDocumento();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }
    protected void addEstadoCivil_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addEstadoCivil(new SCPM_ESTADOS_CIVILES() { EST_CIV_NOM = inEstadoCivil.Text, EST_CIV_EST = onEstadoCivil.Checked }))
        {
            fillEstadoCivil();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editEstadoCivil_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editEstadoCivil(new SCPM_ESTADOS_CIVILES() { EST_CIV_ID = Convert.ToInt32(comboEstadoCivil.SelectedValue), EST_CIV_NOM = inEstadoCivil.Text, EST_CIV_EST = onEstadoCivil.Checked }))
        {
            fillEstadoCivil();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }


    protected void addProfesion_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addProfesion(new SCPM_PROFESIONES() { PROF_NOM = inProfesion.Text, PROF_EST = onProfesion.Checked }))
        {
            fillProfesion();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editProfesion_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editProfesion(new SCPM_PROFESIONES() { PROF_ID = Convert.ToInt32(comboProfesion.SelectedValue), PROF_NOM = inProfesion.Text, PROF_EST = onProfesion.Checked }))
        {
            fillProfesion();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }
    protected void addParentesco_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addParentesco(new SCPM_PARENTESCOS() { PARE_NOM = inParentesco.Text, PARE_EST = onParentesco.Checked }))
        {
            fillPArentesco();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editParentesco_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editParentesco(new SCPM_PARENTESCOS() { PARE_ID = Convert.ToInt32(comboParentesco.SelectedValue), PARE_NOM = inParentesco.Text, PARE_EST = onParentesco.Checked }))
        {
            fillPArentesco();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }
    protected void addRaza_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addRaza(new SCPM_RAZAS() { RAZ_NOM = inRaza.Text, RAZ_EST = onRaza.Checked }))
        {
            fillRaza();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editRaza_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editRaza(new SCPM_RAZAS() { RAZ_ID = Convert.ToInt32(coboRaza.SelectedValue), RAZ_NOM = inRaza.Text, RAZ_EST = onRaza.Checked }))
        {
            fillRaza();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");

    }
    protected void addPais_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addPais(new SCPM_PAIS() { PAI_NACIONALIDAD = inPais.Text, PAI_EST = onPais.Checked }))
        {
            fillPais();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }
    protected void editPais_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editPais(new SCPM_PAIS() { PAI_ID = Convert.ToInt32(comboPais.SelectedValue), PAI_NACIONALIDAD = inPais.Text, PAI_EST = onPais.Checked }))
        {
            fillPais();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }

    protected void addSector_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.addSector(new SCPM_SECTORES() { SEC_NOM = inSector.Text, SEC_EST = onSector.Checked }, Convert.ToInt32(ComboParroquia.SelectedValue)))
        {
            fillSectores();
            HelperUtil.showNotifi("añadido");
        }
        else
            HelperUtil.showNotifi("no añadido");
    }

    protected void editSector_Click(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (psvm.editSector(new SCPM_SECTORES() { SEC_ID = Convert.ToInt32(comboSector.SelectedValue), SEC_NOM = inSector.Text, SEC_EST = onSector.Checked }))
        {
            fillSectores();
            HelperUtil.showNotifi("editado");
        }
        else
            HelperUtil.showNotifi("no editado");
    }
}