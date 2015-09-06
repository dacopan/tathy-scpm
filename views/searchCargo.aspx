<%@ Page Title="SCPM" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="searchCargo.aspx.cs" Inherits="searchCargo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <div class="panel">
        <div class="header panel-header">
            Cargos por areas
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells12 condensed">
                    <div class="cell colspan4">
                        <label>Unidad</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="cargo_comboUnidad" runat="server" AutoPostBack="True" OnSelectedIndexChanged="cargo_comboUnidad_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Area</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="cargo_comboArea" runat="server" AutoPostBack="True" OnSelectedIndexChanged="cargo_comboArea_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan3">
                        <label id="jefeTitle" runat="server">Jefe</label>
                        <div class="input-control text full-size">
                            <asp:TextBox Text="MORA NOTNI CRISTINA RENATA" ReadOnly="true" runat="server" ID="jefex" />
                        </div>
                    </div>

                </div>

                <div class="row cells9">
                    <div class="cell colspan9">

                        <h1 id="cargo_empty" class="text-center text-light" runat="server">Ningún cargo en esta área</h1>
                        <asp:Repeater ID="Repeater1" runat="server">
                            <HeaderTemplate>

                                <br />
                                <table class="backgroundRepeatBanner table striped hovered cell-hovered border bordered">
                                    <thead>
                                        <th>ID puesto</th>
                                        <th>Nombre del cargo</th>
                                        <th>Denominacion</th>
                                        <th>Estado</th>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td>
                                        <asp:Label runat="server"><%# Eval("CAR_ID") %></asp:Label>
                                    </td>
                                    <td>
                                        <asp:HiddenField Value='<%# Eval("CAR_ID") %>' ID="car_id" runat="server" />
                                        <div class="input-control text full-size info">
                                            <asp:TextBox ID="inCargo" runat="server" Text='<%# Eval("CAR_NOM") %>' ReadOnly="true" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input-control text full-size info">
                                            <asp:TextBox ID="cargo_denominacion" Text='<%# Eval("SCPM_DENOMINACIONES.DEN_NOM") %>' runat="server" ReadOnly="true" />
                                        </div>
                                    </td>
                                    <td>
                                        <label class="switch-original">
                                            <asp:CheckBox ID="cargo_estado" runat="server" Checked='<%# bool.Parse(Eval("CAR_EST").ToString()) %>' />
                                            <span class="check"></span>
                                        </label>
                                    </td>
                                </tr>
                            </ItemTemplate>
                            <FooterTemplate>
                                </table>
                                <br />
                                <br />
                                <br />
                            </FooterTemplate>

                        </asp:Repeater>

                    </div>

                </div>
            </div>
        </div>
    </div>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
</asp:Content>

