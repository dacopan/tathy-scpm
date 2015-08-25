<%@ Page Title="Actualizacion fijo" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="actualizacionFijo.aspx.cs" Inherits="actualizacionFijo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="ACTUALIZACION DE DATOS LABORABLES DEL FUNCIONARIO (HISTORIAL FIJO)"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 23px">
                <asp:Label ID="Label2" runat="server" Text="Ingreso del Id Funcionario"></asp:Label>
            </td>
            <td style="height: 23px">
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
                <asp:Button ID="Button1" runat="server" Text="BUSCAR" />
            </td>
            <td style="height: 23px">
                <asp:Label ID="Label8" runat="server" style="font-weight: 700" 
                                Text="158 RUIZ MERA LUIS MARIO"></asp:Label>
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
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label9" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="LUGAR DE TRABAJO"></asp:Label>
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
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label10" runat="server" Text="Unidad"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList1" runat="server">
                    <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label11" runat="server" Text="Area"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList2" runat="server">
                    <asp:ListItem>DIRECCION FINANCIERA</asp:ListItem>
                    <asp:ListItem>DIRECCION ADMINISTRATIVA</asp:ListItem>
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td colspan="5">
                &nbsp;</td>
        </tr>
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label12" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="PUESTO DE TRABAJO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
            <td style="height: 23px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 23px">
                <asp:Label ID="Label13" runat="server" Text="Relacion Laboral"></asp:Label>
            </td>
            <td style="height: 23px">
                <asp:DropDownList ID="DropDownList3" runat="server">
                    <asp:ListItem>SERVICIOS PROFESIONALES</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
                <asp:Label ID="Label14" runat="server" Text="Denominacion"></asp:Label>
            </td>
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:DropDownList ID="DropDownList4" runat="server">
                                <asp:ListItem>SERVICIOS PROFESIONALES 1</asp:ListItem>
                                <asp:ListItem>SERVICIOS PROFESIONALES 2</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>
                            <asp:Label ID="Label15" runat="server" Text="Cargo"></asp:Label>
                        </td>
                        <td>
                            <asp:DropDownList ID="DropDownList5" runat="server">
                                <asp:ListItem>ANALISTA 1</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                Fecha de Ingreso</td>
            <td>
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label18" runat="server" Text="Fecha de Salida"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label17" runat="server" Text="Jefe"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList6" runat="server">
                    <asp:ListItem>CESAR JACOME</asp:ListItem>
                    <asp:ListItem>JUAN CARLOS</asp:ListItem>
                </asp:DropDownList>
            </td>
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
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button2" runat="server" Text="ACTUALIZAR" />
            </td>
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
            <td>
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>

