using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ReporteRaza : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            ReportViewer1.Visible = false;
        }
    }
    protected void generarReport_Click(object sender, EventArgs e)
    {
        if (tipox.SelectedValue == "0")
        {
            HelperUtil.showNotifi("Seleccione el tipo de reporte");
            return;
        }
        ReportViewer1.Visible = true;

        var _fec1 = inFechaStart.Text.Split('-');
        DateTime? fecha_start;
        if (inFechaStart.Text.Contains("-"))
            fecha_start = new DateTime(Convert.ToInt32(_fec1[0]), Convert.ToInt32(_fec1[1]), Convert.ToInt32(_fec1[2]));
        else fecha_start = null;

        var _fec2 = inFechaEnd.Text.Split('-');
        DateTime? fecha_fin;
        if (inFechaEnd.Text.Contains("-"))
            fecha_fin = new DateTime(Convert.ToInt32(_fec2[0]), Convert.ToInt32(_fec2[1]), Convert.ToInt32(_fec2[2]));
        else fecha_fin = DateTime.Now;

        if (tipox.SelectedValue == "1")
        {
            ReportViewer1.ProcessingMode = ProcessingMode.Local;
            ReportViewer1.LocalReport.ReportPath = Server.MapPath("/Reportes/ReportRaza.rdlc");

            ReportDataSource datasource = new ReportDataSource("DataSet1", new ReporteServiceModel().getRazaCount(fecha_start, fecha_fin));
            ReportViewer1.LocalReport.DataSources.Clear();
            ReportViewer1.LocalReport.DataSources.Add(datasource);
        }
        else if (tipox.SelectedValue == "2")
        {
            ReportViewer1.ProcessingMode = ProcessingMode.Local;
            ReportViewer1.LocalReport.ReportPath = Server.MapPath("/Reportes/ReportGenero.rdlc");

            ReportDataSource datasource = new ReportDataSource("DataSet1", new ReporteServiceModel().getGeneroCount(fecha_start, fecha_fin));
            ReportViewer1.LocalReport.DataSources.Clear();
            ReportViewer1.LocalReport.DataSources.Add(datasource);
        }
        else
        {
            ReportViewer1.ProcessingMode = ProcessingMode.Local;
            ReportViewer1.LocalReport.ReportPath = Server.MapPath("/Reportes/ReporteDiscapacidad.rdlc");

            ReportDataSource datasource = new ReportDataSource("DataSet1", new ReporteServiceModel().getDiscapacidadCount(fecha_start, fecha_fin));
            ReportViewer1.LocalReport.DataSources.Clear();
            ReportViewer1.LocalReport.DataSources.Add(datasource);
        }
    }
}