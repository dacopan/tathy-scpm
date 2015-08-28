<%@ Page Title="mantenedor de posiciones" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="MantenedoresPosiciones.aspx.cs" Inherits="MantenedoresPosiciones" %>

<%@ Register Assembly="System.Web.Entity, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" Namespace="System.Web.UI.WebControls" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="MANTENEDORES DELUGAR DE TRABAJO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
        </tr>
        <tr>
            <td style="height: 30px">
                <asp:Label ID="Label3" runat="server" Text="UNIDAD"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="ComboUnidad" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboUnidad_SelectedIndexChanged">
                    <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label33" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inUnidad" runat="server"></asp:TextBox>
                        </td>
                        <td style="height: 23px">
                            <asp:CheckBox ID="UnidadEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="AddUnidad" runat="server" Text="Añadir" OnClick="AddUnidad_Click" />
                <asp:Button ID="editUnidad" runat="server" Text="Modificar" OnClick="editUnidad_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label4" runat="server" Text="AREA"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="ComboArea" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboArea_SelectedIndexChanged">
                    <asp:ListItem>DIRECCION FINANCIERA</asp:ListItem>
                    <asp:ListItem>DIRECCION ADMINISTRATIVA</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 26px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label34" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="inArea" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="AreaEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="AddArea" runat="server" Text="Añadir" OnClick="AddArea_Click" />
                <asp:Button ID="editArea" runat="server" Text="Modificar" OnClick="editArea_Click" />
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label35" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="PUESTO TRABAJO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
        </tr>
        <tr>
            <td style="height: 30px">
                <asp:Label ID="Label36" runat="server" Text="Relacion Laboral"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="comboRelacionLab" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboRelacionLab_SelectedIndexChanged">
                    <asp:ListItem>SERVICIOS PROFESIONALES</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label37" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inRelacionLab" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="relacionLabEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="addRelacionLab" runat="server" Text="Añadir" OnClick="addRelacionLab_Click" />
                <asp:Button ID="editRelacionLab" runat="server" Text="Modificar" OnClick="editRelacionLab_Click" />

            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label38" runat="server" Text="Denominacion"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="ComboDenominacion" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboDenominacion_SelectedIndexChanged">
                    <asp:ListItem>SERVICIOS PROFESIONALES 1</asp:ListItem>
                    <asp:ListItem>SERVICIOS PROFESIONALES 2</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 26px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label39" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="InDenominacion" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="denominacionEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="addDenominacion" runat="server" Text="Añadir" OnClick="addDenominacion_Click" />
                <asp:Button ID="editDenominacion" runat="server" Text="Modificar" OnClick="editDenominacion_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 32px">
                <asp:Label ID="Label5" runat="server" Text="Cargo"></asp:Label>
            </td>
            <td style="height: 32px">
                <asp:DropDownList ID="ComboCargo" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboCargo_SelectedIndexChanged">
                    <asp:ListItem>ANALISTA 1</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 32px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label40" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="InCargo" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="cargoEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 32px">
                <asp:Button ID="addCargo" runat="server" Text="Añadir" OnClick="addCargo_Click" />
                <asp:Button ID="editCargo" runat="server" Text="Modificar" OnClick="editCargo_Click" />
            </td>
        </tr>
    </table>
    <br />
    <br />
    <hr class="thin" />
    <br />
    <br />
    <div class="panel">
        <div class="header panel-header">
            Cargos por areas
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
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

                </div>
                <div class="row cells9">
                    <div class="cell colspan9">

                        <asp:Repeater ID="Repeater1" runat="server">
                            <HeaderTemplate>
                                <br />
                                <br />
                                <br />
                                <table class="backgroundRepeatBanner table striped hovered cell-hovered border bordered">
                                    <thead>
                                        <th>Nombre del cargo</th>
                                        <th>Denominacion</th>
                                        <th>Estado</th>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td>
                                        <asp:HiddenField Value='<%# Eval("TIP_DIS_ID") %>' ID="dis_tip_id" runat="server" />
                                        <asp:Label runat="server" ID="tipo" Text='<%# Eval("TIP_DIS_NOM") %>' />
                                        <asp:TextBox ID="inCargo" runat="server" />
                                    </td>
                                    <td>

                                        <label>Denominacion</label>
                                        <div class="input-control text full-size">
                                            <asp:DropDownList ID="cargo_comboDenominacion" runat="server">
                                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                                            </asp:DropDownList>
                                        </div>


                                    </td>
                                    <td>
                                        <label class="switch-original">
                                            <asp:CheckBox ID="cargo_estado" runat="server" />
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

