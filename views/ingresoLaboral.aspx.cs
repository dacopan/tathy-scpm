using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ingresoLaboral : System.Web.UI.Page
{
    PuestoServiceModel psvm;
    PersonaServiceModel persvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        psvm = new PuestoServiceModel();
        persvm = new PersonaServiceModel();
        if (!IsPostBack)
        {
            fillUnidades(comboUnidad);
            fillRelacionLab();

            comboUnidad.Enabled = false;
            ComboArea.Enabled = false;
            comboRelacionLab.Enabled = false;
            comboCargo.Enabled = false;
            inFechaStart.Enabled = false;
            inFechaEnd.Enabled = false;
        }

    }

    private void fillUnidades(DropDownList combo)
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
            comboUnidad_SelectedIndexChanged(combo, null);

        }
        else
        {
            combo.Enabled = false;
            combo.Items.Add(new ListItem("--Añadir Unidad--", ""));

            ComboArea.Enabled = false;
            ComboArea.Items.Clear();
            ComboArea.AppendDataBoundItems = true;
            ComboArea.Items.Add(new ListItem("--Ninguno--", ""));
            ComboArea.DataBind();

            comboCargo.Enabled = false;
            comboCargo.Items.Clear();
            comboCargo.AppendDataBoundItems = true;
            comboCargo.Items.Add(new ListItem("--Ninguno--", ""));
            comboCargo.DataBind();

        }



    }

    private void fillAreas()
    {
        ComboArea.Enabled = false;
        ComboArea.Items.Clear();
        ComboArea.AppendDataBoundItems = true;
        ComboArea.DataSource = psvm.getAreasByUnidad(Convert.ToInt32(comboUnidad.SelectedItem.Value));
        ComboArea.DataTextField = "ARE_NOM";
        ComboArea.DataValueField = "ARE_COD";
        ComboArea.DataBind();
        if (ComboArea.Items.Count > 0)
        {
            ComboArea.Enabled = true;

            ComboArea_SelectedIndexChanged(ComboArea, null);

        }
        else
        {
            ComboArea.Enabled = false;
            ComboArea.Items.Clear();
            ComboArea.AppendDataBoundItems = true;
            ComboArea.Items.Add(new ListItem("--Ninguno--", ""));
            ComboArea.DataBind();

            comboCargo.Enabled = false;
            comboCargo.Items.Clear();
            comboCargo.AppendDataBoundItems = true;
            comboCargo.Items.Add(new ListItem("--Ninguno--", ""));
            comboCargo.DataBind();

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
        }
        else
        {
            comboRelacionLab.Enabled = false;
            comboRelacionLab.Items.Add(new ListItem("--Ninguno--", ""));
        }
    }

    protected void comboUnidad_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillAreas();
    }
    protected void ComboArea_SelectedIndexChanged(object sender, EventArgs e)
    {
        fillCargos("0");
    }

    private void fillCargos(string per_id)
    {
        var s = psvm.getFreeCargosByAreaID(Convert.ToInt32(ComboArea.SelectedValue), Convert.ToInt32(per_id));
        var datasource = from x in s
                         select new
                         {
                             x.CAR_ID,
                             DisplayField = String.Format("{0} / {1}", x.CAR_NOM, x.SCPM_DENOMINACIONES.DEN_NOM)
                         };

        comboCargo.Enabled = false;
        comboCargo.Items.Clear();
        comboCargo.AppendDataBoundItems = true;
        comboCargo.DataSource = datasource;
        comboCargo.DataTextField = "DisplayField";
        comboCargo.DataValueField = "CAR_ID";
        comboCargo.DataBind();
        if (comboCargo.Items.Count > 0)
        {
            comboCargo.Enabled = true;

            //ComboArea_SelectedIndexChanged(ComboArea, null);

        }
        else
        {
            comboCargo.Enabled = false;
            comboCargo.Items.Add(new ListItem("--Niniguno--", ""));
        }
    }

    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {

            switch (comboFiltro.SelectedValue)
            {
                case "0": Repeater1.DataSource = persvm.getPersonasByNumDoc(inFiltro.Text); break;
                case "1": Repeater1.DataSource = persvm.getPersonasByNombre(inFiltro.Text); break;
                case "2": Repeater1.DataSource = persvm.getPersonasByID(Convert.ToInt32(inFiltro.Text)); break;
                default: { HelperUtil.showNotifi("Filtro inválido"); return; }
            }

            Repeater1.DataBind();
            if (Repeater1.Items.Count > 0)
            {
                Repeater1.Visible = true;
                search_res.Visible = false;
                HelperUtil.showNotifi("Funcionario encontrado");
            }
            else
            {
                Repeater1.Visible = false;
                search_res.Visible = true;
                HelperUtil.showNotifi("No se encontro funcionario");
            }
        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("No se encontro funcionario");
        }
    }

    protected void saveAll_Click(object sender, EventArgs e)
    {
        var per_id = Convert.ToInt32(current_persona_id.Value);
        try
        {
            var _fec1 = inFechaStart.Text.Split('-');
            DateTime fecha_in = new DateTime(Convert.ToInt32(_fec1[0]), Convert.ToInt32(_fec1[1]), Convert.ToInt32(_fec1[2]));

            var _fec2 = inFechaEnd.Text.Split('-');
            DateTime? fecha_fin;
            if (inFechaEnd.Text.Contains("-"))
                fecha_fin = new DateTime(Convert.ToInt32(_fec2[0]), Convert.ToInt32(_fec2[1]), Convert.ToInt32(_fec2[2]));
            else fecha_fin = null;


            //añadir cargo
            if (psvm.addCargoHistorial(new SCPM_PUESTO_HIST()
            {
                PST_HIS_FEC_INI = fecha_in,
                PST_HIS_FEC_FIN = fecha_fin
            },
                per_id, Convert.ToInt32(comboCargo.SelectedValue),
                Convert.ToInt32(comboRelacionLab.SelectedValue)))
            {
                HelperUtil.showNotifi("Cargo guardado");

            }
            else
                HelperUtil.showNotifi("Error al guardar cargo");


            filtroBut_Click(filtroBut, null);

        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("Error al guardar cargo");
        }
    }

    protected void Repeater1_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        try
        {

            var res = persvm.getPersonasByID(Convert.ToInt32(e.CommandArgument.ToString()));
            if (res.Count > 0)
            {
                SCPM_PERSONALES persona = res.First();
                current_persona_id.Value = persona.PER_ID.ToString();
                fillCargos(persona.PER_ID.ToString());
                //historial puestos
                persona.SCPM_PUESTO_HIST.Load();

                SCPM_PUESTO_HIST lastCargo = persona.SCPM_PUESTO_HIST.Count > 0 ? persona.SCPM_PUESTO_HIST.OrderByDescending(c => c.PST_HIS_FEC_INI).FirstOrDefault() : persona.SCPM_PUESTO_HIST.FirstOrDefault();

                comboUnidad.Enabled = true;
                ComboArea.Enabled = true;
                comboRelacionLab.Enabled = true;
                comboCargo.Enabled = true;
                inFechaStart.Enabled = true;
                inFechaEnd.Enabled = true;

                search_res2.InnerHtml = String.Format("{0} {1} {2} {3}", persona.PER_APE_PAT, persona.PER_APE_MAT, persona.PER_NOM1, persona.PER_NOM2);

                if (lastCargo != null && (lastCargo.PST_HIS_FEC_FIN == null || DateTime.Now.CompareTo(lastCargo.PST_HIS_FEC_FIN) <= 0))
                {

                    lastCargo.SCPM_CARGOSReference.Load();
                    lastCargo.SCPM_RELACIONES_LABORALESReference.Load();
                    lastCargo.SCPM_CARGOS.SCPM_AREASReference.Load();
                    lastCargo.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDADReference.Load();

                    current_cargo_id.Value = lastCargo.SCPM_CARGOS.CAR_ID.ToString();

                    puestoActual.InnerHtml = String.Format("Puesto Actual: {0} / {1} / {2} / {3} <br/> <span class='mif-calendar'></span> {4}/{5}", lastCargo.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_NOM,
                        lastCargo.SCPM_CARGOS.SCPM_AREAS.ARE_NOM,
                        lastCargo.SCPM_CARGOS.CAR_NOM,
                        lastCargo.SCPM_RELACIONES_LABORALES.REL_LAB_NOM,
                        lastCargo.PST_HIS_FEC_INI.Value.ToString("yyyy-MM-dd"),
                        lastCargo.PST_HIS_FEC_FIN == null ? "actualidad" : lastCargo.PST_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd"));

                    comboUnidad.SelectedValue = lastCargo.SCPM_CARGOS.SCPM_AREAS.SCPM_UNIDAD.UNI_COD.ToString();
                    ComboArea.SelectedValue = lastCargo.SCPM_CARGOS.SCPM_AREAS.ARE_COD.ToString();
                    comboRelacionLab.SelectedValue = lastCargo.SCPM_RELACIONES_LABORALES.REL_LAB_ID.ToString();
                    comboCargo.SelectedValue = lastCargo.SCPM_CARGOS.CAR_ID.ToString();
                    inFechaStart.Text = lastCargo.PST_HIS_FEC_INI.Value.ToString("yyyy-MM-dd");
                    inFechaEnd.Text = lastCargo.PST_HIS_FEC_FIN == null ? "" : lastCargo.PST_HIS_FEC_FIN.Value.ToString("yyyy-MM-dd");
                }
                else
                {
                    puestoActual.InnerHtml = String.Format("Puesto Actual: {0}", "Ninguno");
                    current_cargo_id.Value = "dcm";
                    HelperUtil.showNotifi("Funcionario actualmente sin puesto de trabajo");
                }

            }
            else
            {
                comboUnidad.Enabled = false;
                ComboArea.Enabled = false;
                comboRelacionLab.Enabled = false;
                comboCargo.Enabled = false;
                inFechaStart.Enabled = false;
                inFechaEnd.Enabled = false;

                search_res.InnerHtml = "No se encontro funcionario";
                puestoActual.InnerHtml = "Puesto Actual: Ninguno";
                current_persona_id.Value = "dcm";
                current_cargo_id.Value = "dcm";
                HelperUtil.showNotifi("No se encontro funcionario");
            }

        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("No se encontro funcionario");
        }
    }
}