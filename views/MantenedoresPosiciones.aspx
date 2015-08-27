<%@ Page Title="mantenedor de posiciones" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="MantenedoresPosiciones.aspx.cs" Inherits="MantenedoresPosiciones" %>

<%@ Register Assembly="System.Web.Entity, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" Namespace="System.Web.UI.WebControls" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:label id="Label1" runat="server" backcolor="#000066" forecolor="White"
                    text="MANTENEDORES DE"></asp:label>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <asp:label id="Label2" runat="server" backcolor="#000066" forecolor="White"
                    text="LUGAR DE TRABAJO"></asp:label>
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
                <asp:label id="Label3" runat="server" text="UNIDAD"></asp:label>
            </td>
            <td style="height: 30px">
                <asp:dropdownlist id="ComboUnidad" runat="server" autopostback="True" onselectedindexchanged="ComboUnidad_SelectedIndexChanged">
                    <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                </asp:dropdownlist>
            </td>
            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:label id="Label33" runat="server" text="Nuevo/Modificar"></asp:label>
                        </td>
                        <td style="height: 23px">
                            <asp:textbox id="inUnidad" runat="server"></asp:textbox>
                        </td>
                        <td style="height: 23px">
                            <asp:checkbox id="UnidadEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:button id="AddUnidad" runat="server" text="Añadir" onclick="AddUnidad_Click" />
                <asp:button id="editUnidad" runat="server" text="Modificar" onclick="editUnidad_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:label id="Label4" runat="server" text="AREA"></asp:label>
            </td>
            <td style="height: 26px">
                <asp:dropdownlist id="ComboArea" runat="server" autopostback="True" onselectedindexchanged="ComboArea_SelectedIndexChanged">
                    <asp:ListItem>DIRECCION FINANCIERA</asp:ListItem>
                    <asp:ListItem>DIRECCION ADMINISTRATIVA</asp:ListItem>
                </asp:dropdownlist>
            </td>
            <td style="height: 26px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:label id="Label34" runat="server" text="Nuevo/Modificar"></asp:label>
                        </td>
                        <td>
                            <asp:textbox id="inArea" runat="server"></asp:textbox>
                        </td>
                        <td>
                            <asp:checkbox id="AreaEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:button id="AddArea" runat="server" text="Añadir" onclick="AddArea_Click" />
                <asp:button id="editArea" runat="server" text="Modificar" onclick="editArea_Click" />
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
                <asp:label id="Label35" runat="server" backcolor="#000066" forecolor="White"
                    text="PUESTO TRABAJO"></asp:label>
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
                <asp:label id="Label36" runat="server" text="Relacion Laboral"></asp:label>
            </td>
            <td style="height: 30px">
                <asp:dropdownlist id="comboRelacionLab" runat="server" autopostback="True" onselectedindexchanged="comboRelacionLab_SelectedIndexChanged">
                    <asp:ListItem>SERVICIOS PROFESIONALES</asp:ListItem>
                </asp:dropdownlist>
            </td>
            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:label id="Label37" runat="server" text="Nuevo/Modificar"></asp:label>
                        </td>
                        <td style="height: 23px">
                            <asp:textbox id="inRelacionLab" runat="server"></asp:textbox>
                        </td>
                        <td>
                            <asp:checkbox id="relacionLabEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:button id="addRelacionLab" runat="server" text="Modificar" OnClick="addRelacionLab_Click" />
                <asp:button id="editRelacionLab" runat="server" text="Ingresar" OnClick="editRelacionLab_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:label id="Label38" runat="server" text="Denominacion"></asp:label>
            </td>
            <td style="height: 26px">
                <asp:dropdownlist id="ComboDenominacion" runat="server" autopostback="True" onselectedindexchanged="ComboDenominacion_SelectedIndexChanged">
                                <asp:ListItem>SERVICIOS PROFESIONALES 1</asp:ListItem>
                                <asp:ListItem>SERVICIOS PROFESIONALES 2</asp:ListItem>
                            </asp:dropdownlist>
            </td>
            <td style="height: 26px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:label id="Label39" runat="server" text="Nuevo/Modificar"></asp:label>
                        </td>
                        <td>
                            <asp:textbox id="InDenominacion" runat="server"></asp:textbox>
                        </td>
                        <td>
                            <asp:checkbox id="denominacionEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:button id="addDenominacion" runat="server" text="Modificar" OnClick="addDenominacion_Click" />
                <asp:button id="editDenominacion" runat="server" text="Ingresar" OnClick="editDenominacion_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 32px">
                <asp:label id="Label5" runat="server" text="Cargo"></asp:label>
            </td>
            <td style="height: 32px">
                <asp:dropdownlist id="ComboCargo" runat="server" autopostback="True" onselectedindexchanged="ComboCargo_SelectedIndexChanged">
                                <asp:ListItem>ANALISTA 1</asp:ListItem>
                            </asp:dropdownlist>
            </td>
            <td style="height: 32px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:label id="Label40" runat="server" text="Nuevo/Modificar"></asp:label>
                        </td>
                        <td>
                            <asp:textbox id="InCargo" runat="server"></asp:textbox>
                        </td>
                        <td>
                            <asp:checkbox id="cargoEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 32px">
                <asp:button id="addCargo" runat="server" text="Modificar" OnClick="addCargo_Click" />
                <asp:button id="editCargo" runat="server" text="Ingresar" OnClick="editCargo_Click" />

            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>

        
    </table>
</asp:Content>

