﻿<%@ Page Title="" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ReportePersonaHistorial.aspx.cs" Inherits="ReportePersonaHistorial" %>

<%@ Register Assembly="Microsoft.ReportViewer.WebForms" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>


    <div class="row cells9 condensed">
        <div class="cell colspan8">
            <label>Tipo reporte</label>
            <div class="input-control text full-size">
                <asp:DropDownList runat="server" ID="tipox" AutoPostBack="true">
                    <asp:ListItem Text="--Seleccionar--" Value="999"></asp:ListItem>
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
                    <asp:ListItem Text="--Seleccionar--" Value="999"></asp:ListItem>
                    <asp:ListItem Text="No. de Identificación" Value="0"></asp:ListItem>
                    <asp:ListItem Text="Nombre" Value="1"></asp:ListItem>
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

    <div class="row cells8">
                    <div class="cell colspan8">
                        <h2 runat="server" class="text-light text-left" id="search_res">No se encontro funcionario</h2>
                        <asp:Repeater ID="Repeater1" runat="server" OnItemCommand="Repeater1_ItemCommand">
                            <HeaderTemplate>
                                <table class="dataTable striped border bordered" data-role="datatable" data-searching="true">
                                    <thead>
                                        <tr>
                                            <th>No. de Identificación</th>
                                            <th>Nombre</th>
                                            <th>ID Institucional</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("PER_NUM_DOC") %></td>
                                    <td><%# Eval("PER_APE_PAT").ToString()+ " " +Eval("PER_APE_MAT").ToString()+ " " +Eval("PER_NOM1").ToString()+ " " +Eval("PER_NOM2").ToString() %></td>
                                    <td><%# Eval("PER_ID") %></td>
                                    <td>

                                        <asp:Button runat="server" CssClass="button success" CommandArgument='<%# Eval("PER_ID") %>' Text="Ver historial" />
                                    </td>
                                </tr>
                            </ItemTemplate>
                            <FooterTemplate>
                                <tfoot>
                                    <tr>
                                        <th>No. de Identificación</th>
                                        <th>Nombre</th>
                                        <th>ID Institucional</th>
                                        <th>Acción</th>
                                    </tr>
                                </tfoot>
                                </table>
                            </FooterTemplate>
                        </asp:Repeater>


                    </div>
                </div>

    <div>
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="100%">
            <LocalReport ReportPath="Reportes\ReportePersonaHistorial.rdlc">
            </LocalReport>
        </rsweb:ReportViewer>
    </div>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
</asp:Content>

