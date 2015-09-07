<%@ Page Title="Buscar Informacion" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="searchPersona.aspx.cs" Inherits="searchPersona" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="page-content">
        <div class="panel-header">
            Buscar Información por
        </div>

        <div class="input-control modern text iconic">
            <asp:DropDownList ID="comboFiltro" runat="server">
                <asp:ListItem Text="No. de Identificación" Value="0"></asp:ListItem>
                <asp:ListItem Text="Nombre" Value="1"></asp:ListItem>
                <asp:ListItem Text="ID Institucional" Value="2"></asp:ListItem>
            </asp:DropDownList>

            <span class="icon mif-filter"></span>
        </div>

        <div class="input-control text full-size info">
            <asp:TextBox runat="server" ID="inFiltro" />
            <button class="button" onclick="applyFilter()"><span class="mif-search"></span></button>
        </div>
        <asp:Button ID="filtroBut" runat="server" Text="Button" CssClass="no-visible" OnClick="filtroBut_Click" />
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
        <asp:Repeater ID="Repeater1" runat="server">
            <HeaderTemplate>
                <table class="dataTable striped border bordered" data-role="datatable" data-searching="true">
                    <thead>
                        <tr>
                            <th>No. de Identificación</th>
                            <th>Nombre</th>
                            <th>ID Institucional</th>
                            <th>Estado</th>
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
                        <label class="switch-original">
                            <asp:CheckBox ID="xxx" runat="server" Checked='<%# bool.Parse( Eval("PER_EST").ToString()) %>' />
                            <span class="check"></span>
                        </label>
                    </td>
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
                        <th>Estado</th>
                        <th>Acción</th>
                    </tr>
                </tfoot>
                </table>
            </FooterTemplate>
        </asp:Repeater>
    </div>
</asp:Content>

