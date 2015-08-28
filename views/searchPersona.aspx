<%@ Page Title="Buscar Informacion" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="searchPersona.aspx.cs" Inherits="searchPersona" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="page-content">
        <div class="panel-header">
            Buscar Información por
        </div>

        <div class="input-control modern text iconic">
            <asp:dropdownlist id="comboFiltro" runat="server">
                <asp:ListItem Text="No. de Identificación" Value="0"></asp:ListItem>
                <asp:ListItem Text="Nombre" Value="1"></asp:ListItem>
                <asp:ListItem Text="ID Institucional" Value="2"></asp:ListItem>
            </asp:dropdownlist>

            <span class="icon mif-filter"></span>
        </div>

        <div class="input-control text full-size info">
            <asp:textbox runat="server" id="inFiltro" />
            <button class="button" onclick="applyFilter()"><span class="mif-search"></span></button>
        </div>
        <asp:button id="filtroBut" runat="server" text="Button" cssclass="no-visible" onclick="filtroBut_Click" />
        <script type="text/javascript">
            function applyFilter() {
                setTimeout(function () {

                    $('#<%=filtroBut.ClientID %>').trigger("click");

                }, 25);
                return false;
            }

        </script>

        <br />
        <br />
        <div class="panel-header">
            Resultados de la búsqueda
        </div>
        <h1 class="text-light text-center" runat="server" id="emptyMsg">No se ha encontrado nada</h1>
        <asp:repeater id="Repeater1" runat="server">
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
                        <a class="button success" href=" <%# "EditPersona.aspx?per_id=" +Eval("PER_ID") %>">Ver</a>

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
        </asp:repeater>
    </div>
</asp:Content>

