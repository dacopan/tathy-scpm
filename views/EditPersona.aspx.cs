using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Data.Objects.DataClasses;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class EditPersona : System.Web.UI.Page
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

            var _per_ID = Request.QueryString["per_id"];
            if (_per_ID != null)
            {
                int per_id;
                bool isNumeric = int.TryParse(_per_ID, out per_id);
                if (isNumeric)
                {
                    //fill personas
                    fillPersonaData(per_id);
                }
                else
                {
                    HelperUtil.showNotifi("persona no encontrada");
                }

            }
            else
            {
                HelperUtil.showNotifi("persona no encontrada");
            }
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

    private void fillPersonaData(int per_id)
    {
        //datos funcionario
        SCPM_PERSONALES p = psvm.getPersonasByID(per_id).FirstOrDefault();
        if (p == null)
        {

            HelperUtil.showNotifi("persona no encontrada");
            Page.Response.Redirect("/views/Default.aspx", false);
            return;
        }
        //load joins
        p.SCPM_RAZASReference.Load();
        p.SCPM_PAISReference.Load();
        p.SCPM_ESTADOS_CIVILESReference.Load();
        p.SCPM_SECTORESReference.Load();
        //

        inApellido1.Text = p.PER_APE_PAT;
        inApellido2.Text = p.PER_APE_MAT;
        inNombre1.Text = p.PER_NOM1;
        inNombre2.Text = p.PER_NOM2;

        comboPais.SelectedValue = p.SCPM_PAIS.PAI_ID.ToString();
        comboDocumento.SelectedValue = p.SCPM_TIPO_IDENTIFICACIONES.TIP_IDE_COD.ToString();
        inDocumento.Text = p.PER_NUM_DOC;
        sexo.Checked = p.PER_GEN.Value;
        p.SCPM_RAZASReference.Load();
        comboRaza.SelectedValue = p.SCPM_RAZAS.RAZ_ID.ToString();
        inMilitar.Text = p.PER_LIB_MIL_NUM;

        //fechanac
        inFechaNac.Text = p.PER_FEC_NAC.Value.ToString("yyyy-MM-dd");
        //
        comboSangre.SelectedValue = p.PER_TIP_SAN;
        comboEstadoCivil.SelectedValue = p.SCPM_ESTADOS_CIVILES.EST_CIV_ID.ToString();
        inCelular.Text = p.PER_CEL;
        inTelefono.Text = p.PER_TEL;

        inEmail.Text = p.PER_COR_PER;
        tarjeta.Checked = p.PER_TAR.Value;

        //file avatar
        Avatar.ImageUrl = (p.PER_PHOTO == null) ? "~/Uploads/avatar.png" : p.PER_PHOTO;
        //end file avatar

        //domicilio
        comboSector.SelectedValue = p.SCPM_SECTORES.SEC_ID.ToString();

        p.SCPM_SECTORES.SCPM_PARROQUIASReference.Load();
        ComboParroquia.SelectedValue = p.SCPM_SECTORES.SCPM_PARROQUIAS.PAR_ID.ToString();

        p.SCPM_SECTORES.SCPM_PARROQUIAS.SCPM_CANTONESReference.Load();
        ComboCanton.SelectedValue = p.SCPM_SECTORES.SCPM_PARROQUIAS.SCPM_CANTONES.CAN_ID.ToString();

        p.SCPM_SECTORES.SCPM_PARROQUIAS.SCPM_CANTONES.SCPM_PROVINCIASReference.Load();
        ComboParroquia.SelectedValue = p.SCPM_SECTORES.SCPM_PARROQUIAS.SCPM_CANTONES.SCPM_PROVINCIAS.PRO_ID.ToString();

        inDireccion.Text = p.PER_DIR;

        ///---CONYUGUE---///
        p.SCPM_CONYUGES.Load();
        if (p.SCPM_CONYUGES.Count > 0)
        {
            stepConyugue.Visible = true;

            SCPM_CONYUGES con = p.SCPM_CONYUGES.First();
            con_apellido1.Text = con.CON_APE_PAT;
            con_apellido2.Text = con.CON_APE_MAT;
            con_nombre1.Text = con.CON_NOM1;
            con_nombre2.Text = con.CON_NOM2;

            con.SCPM_PAISReference.Load();
            con_pais.SelectedValue = con.SCPM_PAIS.PAI_ID.ToString();

            con.SCPM_TIPO_IDENTIFICACIONESReference.Load();
            con_comboDocumento.SelectedValue = con.SCPM_TIPO_IDENTIFICACIONES.TIP_IDE_COD.ToString();

            con_documento.Text = con.CON_NUM_DOC;
            con_fechaNacimiento.Text = con.CON_FEC_NAC.Value.ToString("yyyy-MM-dd");

            con_telefono.Text = con.CON_TEL;
            con_celular.Text = con.CON_CEL;
            con_Email.Text = con.CON_COR_PER;

            con.SCPM_PROFESIONESReference.Load();
            con_comboProfesion.SelectedValue = con.SCPM_PROFESIONES.PROF_ID.ToString();

            con_trabaja.Checked = con.CON_TRA.Value;
            if (con_trabaja.Checked)
            {
                con_empresa.Text = con.CON_NOM_EMP;
                con_telfTrabajo.Text = con.CON_NUM_TRA;
                con_lugarTrab.Text = con.CON_DIR_TRAB;
            }
            else
            {
                con_empresa.Text = "";
                con_telfTrabajo.Text = "";
                con_lugarTrab.Text = "";
            }
        }
        else
        {
            stepConyugue.Visible = false;
        }
        //end conyugue
        ///---discapacidad---///
        p.SCPM_DISCAPACIDADES.Load();
        //repeater discapacidad, traemos todas las q exiten y las colocamos, si exite alguna q ya esta guarda la actualizamos en el repeater
        var alldiscapcidades = psvm.getAllDiscapacidadControl();

        hasDisapacidad.Checked = p.SCPM_DISCAPACIDADES.Count > 0;

        if (hasDisapacidad.Checked)
        {//si guardo q si tienen discapacidad las agrego

            var discapcidadesIn = p.SCPM_DISCAPACIDADES.ToList();

            foreach (var disItem in discapcidadesIn)
            {
                disItem.SCPM_PERSONALESReference.Load();
                var c = (from a in alldiscapcidades where a.TIP_DIS_ID == disItem.SCPM_TIPO_DISCAPACIDADES.TIP_DIS_ID select a).FirstOrDefault();
                c.DIS_POR = Convert.ToInt32(disItem.DIS_POR);
            }

            discapcidadesIn.First().SCPM_PARENTESCOSReference.Load();
            dis_comboParentesco.SelectedValue = discapcidadesIn.FirstOrDefault().SCPM_PARENTESCOS.PARE_ID.ToString();

        }
        //bind al repeater de discapacidades
        Repeater1.DataSource = alldiscapcidades;
        Repeater1.DataBind();
        //end discapacidad

        ///---emergencia---///
        p.SCPM_EMERGENCIAS.Load();
        SCPM_EMERGENCIAS emg = p.SCPM_EMERGENCIAS.FirstOrDefault();
        emg_nombre.Text = emg.CON_FAM_EME_NOM;
        emg_telefono.Text = emg.CON_FAM_EME_TEF;
        emg_celular.Text = emg.CON_FAM_EME_CEL;
        emg.SCPM_PARENTESCOSReference.Load();
        emg_comboParentesco.SelectedValue = emg.SCPM_PARENTESCOS.PARE_ID.ToString();


    }

    protected void addPersona_Click(object sender, EventArgs e)
    {
        var _per_ID = Request.QueryString["per_id"];
        int per_id;
        if (_per_ID != null)
        {

            bool isNumeric = int.TryParse(_per_ID, out per_id);
            if (!isNumeric)
            {
                HelperUtil.showNotifi("persona no encontrada");
                return;
            }

        }
        else
        {
            HelperUtil.showNotifi("persona no encontrada");
            return;
        }
        //datos funcionario
        //SCPM_PERSONALES p =( from cc in new DataClassesDataContext().SCPM_PERSONALES where cc.PER_ID == per_id select cc).First();
        SCPM_PERSONALES p = psvm.getPersonasByID(per_id).First();
        p.SCPM_CONYUGES.Load();
        p.SCPM_RAZASReference.Load();
        p.SCPM_DISCAPACIDADES.Load();
        p.SCPM_EMERGENCIAS.Load();
        p.SCPM_ESTADOS_CIVILESReference.Load();
        p.SCPM_SECTORESReference.Load();

        //psvm.detach(p);
        p.PER_APE_PAT = inApellido1.Text;
        p.PER_APE_MAT = inApellido2.Text;
        p.PER_NOM1 = inNombre1.Text;
        p.PER_NOM2 = inNombre2.Text;

        p.SCPM_PAIS = psvm.getPaisByID(Convert.ToInt32(comboPais.SelectedValue));
        p.SCPM_TIPO_IDENTIFICACIONES = psvm.getIdentificacionByID(Convert.ToInt32(comboDocumento.SelectedValue));

        p.PER_NUM_DOC = inDocumento.Text;
        p.PER_GEN = sexo.Checked;



        //raza

        //         ((IEntityWithRelationships)p).RelationshipManager.


        p.SCPM_RAZASReference.Load();
        p.SCPM_RAZAS.SCPM_PERSONALES.Load();
        //p.SCPM_RAZAS = null;
        p.SCPM_RAZAS = psvm.getRazaByID(Convert.ToInt32(comboRaza.SelectedValue));//set new raza
        //psvm.saveDB();
        //psvm.refresh(p);


        //end raza

        p.PER_LIB_MIL_NUM = inMilitar.Text;
        //end raza




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
            if (p.PER_PHOTO != null)
            {
                try
                {
                    File.Delete(Server.MapPath(p.PER_PHOTO));
                }
                catch (Exception ex)
                {
                    HelperUtil.showNotifi("foto anterior no eliminada.");
                }
            }
            p.PER_PHOTO = "~/Uploads/" + hasAvatar.Value;
        }
        else
        {
            //if (p.PER_PHOTO == null) p.PER_PHOTO = "~/Uploads/avatar.png";
        }

        //end file avatar

        //domicilio
        p.SCPM_SECTORES = psvm.getSectorByID(Convert.ToInt32(comboSector.SelectedValue));
        p.PER_DIR = inDireccion.Text;


        ///---CONYUGUE---///
        SCPM_CONYUGES con = null;
        bool newConyugue = false;
        if (p.SCPM_CONYUGES.Count > 0)
        {
            con = p.SCPM_CONYUGES.FirstOrDefault();
        }
        if (stepConyugue.Visible)
        {
            if (con == null)
            {
                con = new SCPM_CONYUGES();
                newConyugue = true;
            }

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
                con.CON_NOM_EMP = "";
                con.CON_NUM_TRA = "";
                con.CON_DIR_TRAB = "";
            }

            if (newConyugue) p.SCPM_CONYUGES.Add(con);
        }
        else
        {
            if (con != null)
            {
                p.SCPM_CONYUGES.Remove(con);
                psvm.deleteConyugue(con);
            }
        }
        ///---discapacidad---/// 
        if (hasDisapacidad.Checked)
        {
            var parentezcoRef = psvm.getParentezcoByID(Convert.ToInt32(dis_comboParentesco.SelectedValue));

            p.SCPM_DISCAPACIDADES.Load();
            var current_dis = p.SCPM_DISCAPACIDADES;
            foreach (var item in current_dis)
            {
                item.SCPM_TIPO_DISCAPACIDADESReference.Load();
            }
            foreach (RepeaterItem item in Repeater1.Items)
            {
                int rango = Convert.ToInt32((item.FindControl("slider_input") as TextBox).Text.Split('-')[0]);
                int dis_tip_id = Convert.ToInt32((item.FindControl("dis_tip_id") as HiddenField).Value);


                SCPM_DISCAPACIDADES dis = (from c in current_dis where c.SCPM_TIPO_DISCAPACIDADES.TIP_DIS_ID == dis_tip_id select c).FirstOrDefault(); //busco si esa discapacidad ya fue guardada anteriormente
                bool newDis = dis == null; //si no fue guardada debo crear una nueva
                if (rango > 0)              //si la discapacidad debe ser guardada
                {
                    if (dis == null) dis = new SCPM_DISCAPACIDADES();

                    dis.DIS_CLA = dis_isPropia.Checked;
                    dis.DIS_POR = rango;
                    dis.DIS_CONADIS = (dis_hasConadis.Checked ? dis_conadis.Text : "");
                    dis.SCPM_TIPO_DISCAPACIDADES = psvm.getDiscapacidadByID(dis_tip_id);
                    dis.SCPM_PARENTESCOS = parentezcoRef;

                    if (newDis) p.SCPM_DISCAPACIDADES.Add(dis); //la discapacidad no fue guardada anteriormente, entonces la añado
                }
                else
                {
                    if (dis != null)        //si la discapacidad fue guardada antroirmente pero nuevo valor es cero, la elimino
                    {
                        p.SCPM_DISCAPACIDADES.Remove(dis);
                        psvm.deleteteDiscapaciad(dis);
                    }
                }
            }
        }
        ///---emergencia---///

        SCPM_EMERGENCIAS emg = p.SCPM_EMERGENCIAS.FirstOrDefault();

        emg.CON_FAM_EME_NOM = emg_nombre.Text;
        emg.CON_FAM_EME_TEF = emg_telefono.Text;
        emg.CON_FAM_EME_CEL = emg_celular.Text;
        emg.SCPM_PARENTESCOS = psvm.getParentezcoByID(Convert.ToInt32(emg_comboParentesco.SelectedValue));
        //p.SCPM_EMERGENCIAS.Add(emg);
        if (psvm.saveDB())
        {
            // Page.Redirect(Page.Request.RawUrl, false);
            HelperUtil.showNotifi("persona actualizada");

        }
        else
        {
            HelperUtil.showNotifi("persona no actualizada");
        }
    }

    protected void comboEstadoCivil_SelectedIndexChanged(object sender, EventArgs e)
    {
        if (comboEstadoCivil.SelectedItem.Text.Equals("casado", StringComparison.InvariantCultureIgnoreCase))
        {
            stepConyugue.Visible = true;
            if (con_fechaNacimiento.Text == "")
            {
                con_fechaNacimiento.Text = DateTime.Now.ToString("yyyy-MM-dd");
            }
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
    protected void con_trabaja_CheckedChanged(object sender, EventArgs e)
    {
        con_empresa.Visible = con_trabaja.Checked;
        con_lugarTrab.Visible = con_trabaja.Checked;
        con_telfTrabajo.Visible = con_trabaja.Checked;

        con_empresaW.Visible = con_trabaja.Checked;
        con_lugarTrabW.Visible = con_trabaja.Checked;
        con_telfTrabajoW.Visible = con_trabaja.Checked;
    }
}

