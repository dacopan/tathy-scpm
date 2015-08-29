using SCPMdbModel;
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
        if (!IsPostBack)
        {
            ViewDetail(false);
            fillPersonas();
        }
    }

    private void fillPersonas()
    {
        var s = psvm.getAllPersonas();
        var datasource = from x in s
                         select new
                         {
                             x.PER_ID,
                             DisplayField = String.Format("{0} {1} {2} {3}", x.PER_APE_PAT, x.PER_APE_MAT, x.PER_NOM1, x.PER_NOM2)
                         };

        comboPersona.Enabled = false;
        comboPersona.Items.Clear();
        comboPersona.AppendDataBoundItems = true;
        comboPersona.DataSource = datasource;
        comboPersona.DataValueField = "PER_ID";
        comboPersona.DataTextField = "DisplayField";

        //comboPersona.DataTextField = "Id,StudentName";

        comboPersona.DataBind();
        if (comboPersona.Items.Count > 0)
        {
            comboPersona.Enabled = true;
        }
        else
        {
            comboPersona.Enabled = false;
            comboPersona.Items.Add(new ListItem("--Ninguno--", ""));
        }
    }

    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {
            var puesto = psvm.getCargoByID(Convert.ToInt32(inFiltro.Text));
            if (puesto != null)
            {
                current_puesto_id.Value = puesto.CAR_ID.ToString();


                ViewDetail(true);
                fillPersonas();
                //puesto detall
                puesto.SCPM_AREASReference.Load();
                puesto.SCPM_AREAS.SCPM_UNIDADReference.Load();
                puesto.SCPM_DENOMINACIONESReference.Load();

                unidadLabel.InnerHtml = puesto.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM;
                areaLabel.InnerHtml = puesto.SCPM_AREAS.ARE_NOM;
                cargoLabel.InnerHtml = puesto.CAR_NOM;
                denominacionLabel.InnerHtml = puesto.SCPM_DENOMINACIONES.DEN_NOM;



                //puesto funcionario
                puesto.SCPM_PUESTO_HIST.Load();
                SCPM_PUESTO_HIST lastCargo = puesto.SCPM_PUESTO_HIST.Count > 0 ? puesto.SCPM_PUESTO_HIST.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : puesto.SCPM_PUESTO_HIST.FirstOrDefault();
                if (lastCargo != null && (lastCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(lastCargo.PST_HIS_FEC_FIN) <= 0))
                {//cargo tiene un funcionario actualmente
                    lastCargo.SCPM_PERSONALESReference.Load();
                    SCPM_PERSONALES persona = lastCargo.SCPM_PERSONALES;
                    personaLabel.InnerHtml = String.Format("{0} {1} {2} {3}", persona.PER_APE_PAT, persona.PER_APE_MAT, persona.PER_NOM1, persona.PER_NOM2);

                    HelperUtil.showNotifi("Cargo ocupado<br/>" + personaLabel.InnerHtml);

                    lastCargo.SCPM_RELACIONES_LABORALESReference.Load();
                    relLabLabel.InnerHtml = lastCargo.SCPM_RELACIONES_LABORALES.REL_LAB_NOM;

                    current_persona_id.Value = persona.PER_ID.ToString(); ;

                }
                else
                {//cargo no ocupado
                    HelperUtil.showNotifi("Cargo no ocupado");
                    relLabLabel.InnerHtml = "ninguno";
                    personaLabel.InnerHtml = "ninguno";
                    current_persona_id.Value = "dcm";
                }
                //puesto subrogado/encargo
                puesto.SCPM_SUBROGA_HIST.Load();
                var q = puesto.SCPM_SUBROGA_HIST.ToList();
                SCPM_SUBROGA_HIST lastSugroga = q.Count > 0 ? q.OrderByDescending(c => c.SUB_HIS_FEC_INI).FirstOrDefault() : q.FirstOrDefault();
                if (lastSugroga != null && (lastSugroga.SUB_HIS_FEC_FIN == null || DateTime.Now.CompareTo(lastSugroga.SUB_HIS_FEC_FIN) <= 0))
                {//puesto esta subrogado o encargado actualmente
                    combo_tipo.SelectedValue = lastSugroga.SUB_HIS_IS_ENCARGO.Value ? "2" : "1";
                    lastSugroga.SCPM_PERSONALESReference.Load();
                    comboPersona.SelectedValue = lastSugroga.SCPM_PERSONALES.PER_ID.ToString();

                    HelperUtil.showNotifi("Cargo actualmente " + (lastSugroga.SUB_HIS_IS_ENCARGO.Value ? "Encargado" : "Subrogado"));

                    current_subroga_id.Value = lastSugroga.SCPM_PERSONALES.PER_ID.ToString();
                    current_tipo_id.Value = lastSugroga.SUB_HIS_IS_ENCARGO.Value ? "2" : "1";
                    sub_hist_id.Value = lastSugroga.SUB_HIS_ID.ToString();
                    inFechaStart.Text = lastSugroga.SUB_HIS_FEC_INI.Value.ToString("yyyy-MM-dd");
                    inFechaEnd.Text = (lastSugroga.SUB_HIS_FEC_FIN == null ? "" : lastSugroga.SUB_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd"));
                    subrogaPerLabel.InnerHtml = String.Format("{0} {1} {2} {3}", lastSugroga.SCPM_PERSONALES.PER_APE_PAT, lastSugroga.SCPM_PERSONALES.PER_APE_MAT, lastSugroga.SCPM_PERSONALES.PER_NOM1, lastSugroga.SCPM_PERSONALES.PER_NOM2);

                }
                else
                {//puesto no encargado subrogado
                    current_subroga_id.Value = "dcm";
                    sub_hist_id.Value = "dcm";
                    subrogaPerLabel.InnerHtml = "ninguno";
                    current_tipo_id.Value = "dcm";
                    inFechaStart.Text = DateTime.Now.ToString("yyyy-MM-dd");

                    HelperUtil.showNotifi("Puesto no subrogado");
                }

            }
            else
            {
                ViewDetail(false);
                HelperUtil.showNotifi("Puesto no encontrado");
                current_puesto_id.Value = "dcm";
            }

        }
        catch (Exception ex)
        {
            ViewDetail(false);
            HelperUtil.showNotifi("Error: Puesto no encontrado");
            current_subroga_id.Value = "dcm";
            sub_hist_id.Value = "dcm";
            subrogaPerLabel.InnerHtml = "ninguno";
            current_tipo_id.Value = "dcm";
            inFechaStart.Text = DateTime.Now.ToString("yyyy-MM-dd");
        }
    }

    private void ViewDetail(bool p)
    {
        cargoWrap.Visible = p;
        personaWrap.Visible = p;
        unidadWrap.Visible = p;
        search_res.Visible = !p;

        combo_tipo.Enabled = p;
        comboPersona.Enabled = p;
        inFechaEnd.Enabled = p;
        inFechaEnd.Enabled = p;
    }
    protected void saveAll_Click(object sender, EventArgs e)
    {
        try
        {
            var cargo_id = Convert.ToInt32(current_puesto_id.Value);
            var _fec1 = inFechaStart.Text.Split('-');
            DateTime fecha_in = new DateTime(Convert.ToInt32(_fec1[0]), Convert.ToInt32(_fec1[1]), Convert.ToInt32(_fec1[2]));

            var _fec2 = inFechaEnd.Text.Split('-');
            DateTime? fecha_fin;
            if (inFechaEnd.Text.Contains("-"))
                fecha_fin = new DateTime(Convert.ToInt32(_fec2[0]), Convert.ToInt32(_fec2[1]), Convert.ToInt32(_fec2[2]));
            else fecha_fin = null;

            int newPersonaID = Convert.ToInt32(comboPersona.SelectedValue);

            //añadir subroga 
            //current_puesto_id:        ID: id del cargo a subrogar
            //current_subroga_id:       id: personaID a la q esta subrogado o encargado     dcm: no esta subrogado
            //current_tipo_id:          1: si el puesto actual esta subrogado               2: puesto actual encargado          dcm: puesto no sugbrogado           
            //current_persona_id:       ID: personaID si el puesto esta ocupado             dcm: puesto no ocupado
            //newPersonaID:             ID: personaID a la cual se subrogará
            //sub_hist_id:              ID del ultimo subroga hist
            if (psvm.addSubrogaHistorial(new SCPM_SUBROGA_HIST()
            {
                SUB_HIS_FEC_INI = fecha_in,
                SUB_HIS_FEC_FIN = fecha_fin,
                SUB_HIS_IS_ENCARGO = combo_tipo.SelectedValue == "2"

            },
                cargo_id, current_subroga_id.Value, current_tipo_id.Value, current_persona_id.Value, newPersonaID, sub_hist_id.Value))
            {
                HelperUtil.showNotifi("subrogacion/encargo guardado");

            }
            else
                HelperUtil.showNotifi("Error al guardar subrogacion/encargo");
        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("Error al guardar subrogacion/encargo");
        }

        filtroBut_Click(filtroBut, null);
    }

}