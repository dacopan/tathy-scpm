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
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack) ReportViewer1.Visible = false;
    }
    protected void filtroBut_Click(object sender, EventArgs e)
    {
        try
        {
            var res = new PersonaServiceModel().getPersonasByID(Convert.ToInt32(inFiltro.Text));
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