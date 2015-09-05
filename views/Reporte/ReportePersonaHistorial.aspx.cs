using Microsoft.Reporting.WebForms;
using SCPMdbModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReportePersonaHistorial : System.Web.UI.Page
{
    PersonaServiceModel persvm;
    protected void Page_Load(object sender, EventArgs e)
    {
        persvm = new PersonaServiceModel();
        if (!IsPostBack) ReportViewer1.Visible = false;
    }

    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {
            ReportViewer1.Visible = false;
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
                ReportViewer1.Visible = false;
            }
        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("No se encontro funcionario");
        }
    }

    protected void Repeater1_ItemCommand(object source, RepeaterCommandEventArgs e)
    {
        if (tipox.SelectedValue == "999")
        {
            HelperUtil.showNotifi("seleccione tipo de reporte");
            ReportViewer1.Visible = false;
            return;

        }
        try
        {
            var res = new PersonaServiceModel().getPersonasByID(Convert.ToInt32(e.CommandArgument.ToString()));
            if (res.Count > 0 && res.FirstOrDefault() != null)
            {
                ReportViewer1.Visible = true;
                SCPM_PERSONALES p = res.First();
                string per_nom = String.Format("{0} {1} {2} {3}", p.PER_APE_PAT, p.PER_APE_MAT, p.PER_NOM1, p.PER_NOM2);

                ReportViewer1.ProcessingMode = ProcessingMode.Local;
                ReportViewer1.LocalReport.ReportPath = Server.MapPath("/Reportes/ReportePersonaHistorial.rdlc");

                ReportDataSource datasource = new ReportDataSource("DataSet1", new ReporteServiceModel().getPersonaHistory(tipox.SelectedValue, p));

                ReportViewer1.LocalReport.DataSources.Clear();
                ReportParameter rp1 = new ReportParameter("personax", "Historial de: " + per_nom);

                ReportViewer1.LocalReport.DataSources.Add(datasource);
                ReportViewer1.ProcessingMode = ProcessingMode.Local;
                ReportViewer1.LocalReport.SetParameters(new ReportParameter[] { rp1 });
                ReportViewer1.LocalReport.Refresh();



            }
            else
            {
                HelperUtil.showNotifi("No se encontro funcionario");
                ReportViewer1.Visible = false;
            }
        }
        catch (Exception ex)
        {
            HelperUtil.showNotifi("No se encontro funcionario");
            ReportViewer1.Visible = false;
        }
    }
}