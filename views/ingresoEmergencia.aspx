<%@ Page Title="Ingreso Emergencia" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoEmergencia.aspx.cs" Inherits="ingresoEmergencia" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label9" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="INGRESO CONTACTO EMERGENCIA"></asp:Label>
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
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
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
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="width: 168px">
                            <asp:Label ID="Label4" runat="server" Text="Nombre:"></asp:Label>
                        </td>
                        <td style="width: 285px">
                            <asp:Label ID="Label5" runat="server" style="font-weight: 700" 
                                Text="RUIZ MERA LUIS MARIO"></asp:Label>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label10" runat="server" Text="Apellido Paterno"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label14" runat="server" Text="Apellido Materno"></asp:Label>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="width: 307px">
                            <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label11" runat="server" Text="Nombre"></asp:Label>
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
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="width: 307px">
                            <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label12" runat="server" Text="Telefono fijo"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
            </td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Label ID="Label16" runat="server" Text="Telefono Celular"></asp:Label>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="width: 309px">
                            <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label13" runat="server" Text="Parentesco"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList1" runat="server">
                    <asp:ListItem>Padre</asp:ListItem>
                    <asp:ListItem>Madre</asp:ListItem>
                </asp:DropDownList>
            </td>
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
                <asp:Button ID="Button1" runat="server" Text="Guardar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>

