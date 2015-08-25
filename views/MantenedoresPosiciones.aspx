<%@ Page Title="mantenedor de posiciones" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="MantenedoresPosiciones.aspx.cs" Inherits="MantenedoresPosiciones" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="MANTENEDORES DE"></asp:Label>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <asp:Label ID="Label2" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="LUGAR DE TRABAJO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 30px">
                <asp:Label ID="Label3" runat="server" Text="UNIDAD"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="DropDownList1" runat="server">
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
                            <asp:TextBox ID="TextBox12" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="Button1" runat="server" Text="Ingresar" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label4" runat="server" Text="AREA"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="DropDownList2" runat="server">
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
                            <asp:TextBox ID="TextBox13" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="Button3" runat="server" Text="Modificar" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            &nbsp;</td>
                        <td>
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:Button ID="Button2" runat="server" Text="Deshabilitar/habilitar" />
            </td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label35" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="PUESTO TRABAJO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 30px">
                <asp:Label ID="Label36" runat="server" Text="Relacion Laboral"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="DropDownList3" runat="server">
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
                            <asp:TextBox ID="TextBox14" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="Button4" runat="server" Text="Ingresar" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label38" runat="server" Text="Denominacion"></asp:Label>
            </td>
            <td style="height: 26px">
                            <asp:DropDownList ID="DropDownList4" runat="server">
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
                            <asp:TextBox ID="TextBox15" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="Button5" runat="server" Text="Modificar" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label5" runat="server" Text="Cargo"></asp:Label>
            </td>
            <td>
                            <asp:DropDownList ID="DropDownList5" runat="server">
                                <asp:ListItem>ANALISTA 1</asp:ListItem>
                            </asp:DropDownList>
                </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label40" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TextBox16" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:Button ID="Button6" runat="server" Text="Deshabilitar/habilitar" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>

