using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class AddPersona : System.Web.UI.Page
{
    PersonaServiceModel psvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PersonaServiceModel();
        if (!IsPostBack)
        {
            //comboPais
            fillPais(comboPais);

            //documento
            fillDocumento(comboDocumento);

            //coboRaza
            fillRaza(comboRaza);

            //estado civil
            fillEstadoCivil();

            //provincia
            fillProvincias();

            //conyugue
            //nacionalidad
            fillPais(con_pais);
            //documento
            fillDocumento(con_comboDocumento);
            //profesion
            fillProfesion(con_comboProfesion);

            //discapacidad
            //fill discapacidades
            Repeater1.DataSource = psvm.getAllDiscapacidadControl();
            Repeater1.DataBind();
            //fill parentexco
            fillParentesco(dis_comboParentesco);

            //emergencia
            fillParentesco(emg_comboParentesco);
        }
    }

    private void fillParentesco(DropDownList combo)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = psvm.getAllParentesco();
        combo.DataValueField = "PARE_ID";
        combo.DataTextField = "PARE_NOM";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--ninguno--", ""));
        }
    }

    private void fillProfesion(DropDownList combo)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = psvm.getAllProfesion();
        combo.DataValueField = "PROF_ID";
        combo.DataTextField = "PROF_NOM";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--ninguno--", ""));
        }
    }

    private void fillPais(DropDownList combo)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = psvm.getAllPais();
        combo.DataValueField = "PAI_ID";
        combo.DataTextField = "PAI_NACIONALIDAD";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--ninguno--", ""));
        }
    }

    private void fillDocumento(DropDownList combo)
    {
        combo.Enabled = false;
        combo.Items.Clear();
        combo.AppendDataBoundItems = true;
        combo.DataSource = psvm.getAllDocumentos();
        combo.DataValueField = "TIP_IDE_COD";
        combo.DataTextField = "TIP_IDE_NOM";
        combo.DataBind();
        if (combo.Items.Count > 0)
        {
            combo.Enabled = true;
        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--Ninguno disponible--", ""));
        }
    }

    private void fillRaza(DropDownList coboRaza)
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
        }
        else
        {
            coboRaza.Enabled = false;
            coboRaza.Items.Add(new ListItem("--Añadir--", ""));
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
    }
    protected void ComboParroquia_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillSectores();
    }
    protected void ComboCanton_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillParroquias();
    }

    protected void addPersona_Click(object sender, EventArgs e)
    {
        //datos funcionario
        SCPM_PERSONALES p = new SCPM_PERSONALES();
        p.PER_APE_PAT = inApellido1.Text;
        p.PER_APE_MAT = inApellido2.Text;
        p.PER_NOM1 = inNombre1.Text;
        p.PER_NOM2 = inNombre2.Text;

        p.SCPM_PAIS = psvm.getPaisByID(Convert.ToInt32(comboPais.SelectedValue));
        p.SCPM_TIPO_IDENTIFICACIONES = psvm.getIdentificacionByID(Convert.ToInt32(comboDocumento.SelectedValue));
        p.PER_NUM_DOC = inDocumento.Text;
        p.PER_GEN = sexo.Checked;
        p.SCPM_RAZAS = psvm.getRazaByID(Convert.ToInt32(comboRaza.SelectedValue));
        p.PER_LIB_MIL_NUM = inMilitar.Text;

        var _fec = inFechaNac.Text.Split('-');
        p.PER_FEC_NAC = new DateTime(Convert.ToInt32(_fec[0]), Convert.ToInt32(_fec[1]), Convert.ToInt32(_fec[2]));
        p.PER_TIP_SAN = comboSangre.SelectedValue;
        p.SCPM_ESTADOS_CIVILES = psvm.getEstadoCivilByID(Convert.ToInt32(comboEstadoCivil.SelectedValue));
        p.PER_CEL = inCelular.Text;
        p.PER_TEL = inTelefono.Text;

        p.PER_COR_PER = inEmail.Text;
        p.PER_TAR = tarjeta.Checked;
        //file avatar

        if (!hasAvatar.Value.Equals("0"))
        {
            var tempPath = "~/Uploads/Temp/";
            var uploadPath = "~/Uploads/";

            string filename = hasAvatar.Value;
            File.Move(Server.MapPath(tempPath + filename), Server.MapPath(uploadPath + filename));

            p.PER_PHOTO = "~/Uploads/" + hasAvatar.Value;
        }
        else
        {
            if (p.PER_PHOTO == null) p.PER_PHOTO = "~/Uploads/avatar.png";
        }

        //end file avatar

        //domicilio
        p.SCPM_SECTORES = psvm.getSectorByID(Convert.ToInt32(comboSector.SelectedValue));
        p.PER_DIR = inDireccion.Text;


        ///---CONYUGUE---///
        if (stepConyugue.Visible)
        {
            SCPM_CONYUGES con = new SCPM_CONYUGES();
            con.CON_APE_PAT = con_apellido1.Text;
            con.CON_APE_MAT = con_apellido2.Text;
            con.CON_NOM1 = con_nombre1.Text;
            con.CON_NOM2 = con_nombre2.Text;
            con.SCPM_PAIS = psvm.getPaisByID(Convert.ToInt32(con_pais.SelectedValue));
            con.SCPM_TIPO_IDENTIFICACIONES = psvm.getIdentificacionByID(Convert.ToInt32(con_comboDocumento.SelectedValue));
            con.CON_NUM_DOC = con_documento.Text;
            var _fec1 = con_fechaNacimiento.Text.Split('-');
            con.CON_FEC_NAC = new DateTime(Convert.ToInt32(_fec1[0]), Convert.ToInt32(_fec1[1]), Convert.ToInt32(_fec1[2]));
            con.CON_TEL = con_telefono.Text;
            con.CON_CEL = con_celular.Text;
            con.CON_COR_PER = con_Email.Text;
            con.SCPM_PROFESIONES = psvm.getProfesionByID(Convert.ToInt32(con_comboProfesion.SelectedValue));
            con.CON_TRA = con_trabaja.Checked;
            if (con_trabaja.Checked)
            {
                con.CON_NOM_EMP = con_empresa.Text;
                con.CON_NUM_TRA = con_telfTrabajo.Text;
                con.CON_DIR_TRAB = con_lugarTrab.Text;
            }
            else
            {

            }

            p.SCPM_CONYUGES.Add(con);
        }
        else
        {
            p.SCPM_CONYUGES.Clear();
        }
        ///---discapacidad---///
        if (hasDisapacidad.Checked)
        {
            var parentezcoRef = psvm.getParentezcoByID(Convert.ToInt32(dis_comboParentesco.SelectedValue));
            foreach (RepeaterItem item in Repeater1.Items)
            {
                Response.Write((item.FindControl("slider_input") as TextBox).Text);

                int rango = Convert.ToInt32((item.FindControl("slider_input") as TextBox).Text.Split('-')[0]);
                int dis_tip_id = Convert.ToInt32((item.FindControl("dis_tip_id") as HiddenField).Value);
                if (rango > 0)
                {
                    p.SCPM_DISCAPACIDADES.Add(new SCPM_DISCAPACIDADES()
                    {
                        DIS_CLA = dis_isPropia.Checked,
                        DIS_POR = rango,
                        DIS_CONADIS = (dis_hasConadis.Checked ? dis_conadis.Text : ""),
                        SCPM_TIPO_DISCAPACIDADES = psvm.getDiscapacidadByID(dis_tip_id),
                        SCPM_PARENTESCOS = parentezcoRef
                    });
                }
            }
        }
        ///---emergencia---///
        SCPM_EMERGENCIAS emg = new SCPM_EMERGENCIAS();
        emg.CON_FAM_EME_NOM = emg_nombre.Text;
        emg.CON_FAM_EME_TEF = emg_telefono.Text;
        emg.CON_FAM_EME_CEL = emg_celular.Text;
        emg.SCPM_PARENTESCOS = psvm.getParentezcoByID(Convert.ToInt32(emg_comboParentesco.SelectedValue));
        p.SCPM_EMERGENCIAS.Add(emg);
        if (psvm.addPersona(p))
        {
            // Page.Redirect(Page.Request.RawUrl, false);
            HelperUtil.showNotifi("persona añadida");

        }
        else
        {
            HelperUtil.showNotifi("persona no añadida");
        }
    }
    protected void comboEstadoCivil_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (comboEstadoCivil.SelectedItem.Text.Equals("casado", StringComparison.InvariantCultureIgnoreCase))
        {
            stepConyugue.Visible = true;
        }
        else
        {
            stepConyugue.Visible = false;
        }
    }
    protected void atach_Click(object sender, EventArgs e)
    {
        try
        {
            //p.PER_PHOTO = "~/Uploads/" + p.PER_NUM_DOC;
            var tempPath = "~/Uploads/Temp/";
            int contentLength = avatarUpload.PostedFile.ContentLength;//You may need it for validation
            string contentType = avatarUpload.PostedFile.ContentType;//You may need it for validation

            var _ext = avatarUpload.PostedFile.FileName.Split('.');
            var ext = "." + _ext[_ext.Length - 1];
            string filename = DateTime.Now.TimeOfDay.TotalMilliseconds.ToString().Replace(",", "").Replace(".", "") + ext;
            string path = Server.MapPath(tempPath + filename);

            //delete last upload
            if (!hasAvatar.Value.Equals("0"))
            {
                File.Delete(Server.MapPath(tempPath + hasAvatar.Value));
            }

            hasAvatar.Value = filename;
            avatarUpload.PostedFile.SaveAs(path);
            Avatar.ImageUrl = tempPath + filename;
            HelperUtil.showNotifi("imagen subida con éxito");
        }
        catch (Exception ex)
        {

        }
    }
}

