<%@ Page Title="ingresoConyuge" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoConyuge.aspx.cs" Inherits="ingresoConyuge" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="INGRESO CONYUGE"></asp:Label>
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
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label2" runat="server" Text="ID:"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label3" runat="server" style="font-weight: 700" Text="158"></asp:Label>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label4" runat="server" Text="Nombre:"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label5" runat="server" style="font-weight: 700" 
                                Text="RUIZ MERA LUIS MARIO"></asp:Label>
                        </td>
                    </tr>
                </table>
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
            <td style="height: 26px">
                Apellido Paterno</td>
            <td style="height: 26px">
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </td>
            <td style="height: 26px">
                </td>
            <td style="height: 26px">
                <asp:Label ID="Label14" runat="server" Text="Apellido Materno"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label6" runat="server" Text="Nombre:"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label15" runat="server" Text="2do Nombre"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label7" runat="server" Text="Nacionalidad"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="DropDownList1" runat="server">
                    <asp:ListItem>Ecuatoriano</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 26px">
            </td>
            <td style="height: 26px">
                &nbsp;</td>
            <td style="height: 26px">
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label8" runat="server" Text="Tipo Documento"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList2" runat="server">
                    <asp:ListItem>Cedula</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label17" runat="server" Text="No"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label9" runat="server" Text="Lugar de Nacimiento"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label18" runat="server" Text="Fecha de Nacimiento"></asp:Label>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label23" runat="server" Text="Año"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label24" runat="server" Text="Mes"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label25" runat="server" Text="Dia"></asp:Label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <asp:DropDownList ID="DropDownList3" runat="server">
                                <asp:ListItem>2015</asp:ListItem>
                                <asp:ListItem>2014</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>
                            <asp:DropDownList ID="DropDownList4" runat="server">
                                <asp:ListItem>Enero</asp:ListItem>
                                <asp:ListItem>Febrero</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                        <td>
                            <asp:DropDownList ID="DropDownList5" runat="server">
                                <asp:ListItem>1</asp:ListItem>
                                <asp:ListItem>2</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label10" runat="server" Text="Telefono Fijo"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
            </td>
            <td style="height: 26px">
            </td>
            <td style="height: 26px">
                <asp:Label ID="Label19" runat="server" Text="Celular"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label11" runat="server" Text="Correo Personal"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label20" runat="server" Text="Profesion"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList6" runat="server">
                    <asp:ListItem>Chofer</asp:ListItem>
                    <asp:ListItem>Cajera</asp:ListItem>
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label12" runat="server" Text="Trabaja:"></asp:Label>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:RadioButton ID="RadioButton1" runat="server" Text="SI" />
                        </td>
                        <td>
                            <asp:RadioButton ID="RadioButton2" runat="server" Text="NO" />
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label21" runat="server" Text="Lugar de trabajo"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList7" runat="server">
                    <asp:ListItem>Pichinca</asp:ListItem>
                    <asp:ListItem>Cotopaxi</asp:ListItem>
                </asp:DropDownList>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label13" runat="server" Text="Nombre Empresa"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label22" runat="server" Text="Telefono Trabajo"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
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
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button1" runat="server" Text="Guardar Conyuge" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>

