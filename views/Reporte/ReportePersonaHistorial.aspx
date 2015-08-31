<%@ Page Title="" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ReportePersonaHistorial.aspx.cs" Inherits="ReportePersonaHistorial" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>


    <div class="row cells9 condensed">
        <div class="cell colspan8">
            <label>Tipo reporte</label>
            <div class="input-control text full-size">
                <asp:DropDownList runat="server" ID="tipox" AutoPostBack="true">
                    <asp:ListItem Value="1">General</asp:ListItem>
                    <asp:ListItem Value="2">Subrogacion/Encargo</asp:ListItem>
                    <asp:ListItem Value="3">Cargo</asp:ListItem>
                </asp:DropDownList>
            </div>
        </div>
    </div>
    <br />
    <br />
    <div class="row cells9 condensed">
        <div class="cell colspan2">
            <label><span class="icon mif-filter"></span>&nbsp;Filtro</label>
            <div class="input-control slect iconic info">
                <asp:DropDownList ID="comboFiltro" runat="server">
                    <asp:ListItem Text="ID Institucional" Value="2"></asp:ListItem>
                </asp:DropDownList>
            </div>
            <br />
            <br />

        </div>

        <div class="cell colspan4 text-right">
            <div class="input-control text full-size info">
                <asp:TextBox runat="server" ID="inFiltro" />                
                
            </div>
            <asp:Button ID="filtroBut" runat="server" Text="Buscar" CssClass="button info" OnClick="filtroBut_Click" />
            <script type="text/javascript">
                function applyFilter() {
                    //setTimeout(function () {
                    alert("dcm");
                   // $('#<%=filtroBut.ClientID %>').trigger("click");
                    //}, 25);
                        return false;
                    }

            </script>
        </div>

    </div>


    <div>
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="100%">
            <LocalReport ReportPath="Reportes\ReportePersonaHistorial.rdlc">
                <DataSources>
                    <rsweb:ReportDataSource DataSourceId="ObjectDataSource1" Name="DataSet1" />
                </DataSources>
            </LocalReport>
        </rsweb:ReportViewer>
    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
</asp:Content>

