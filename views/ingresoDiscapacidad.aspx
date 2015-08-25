<%@ Page Title="IngresoDiscapacidad" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoDiscapacidad.aspx.cs" Inherits="ingresoDiscapacidad" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="INGRESO DISCAPACIDAD"></asp:Label>
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
                            <asp:Label ID="Label6" runat="server" style="font-weight: 700" Text="158"></asp:Label>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label7" runat="server" Text="Nombre:"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label8" runat="server" style="font-weight: 700" 
                                Text="RUIZ MERA LUIS MARIO"></asp:Label>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="height: 23px">
                <asp:Label ID="Label3" runat="server" Text="Propia"></asp:Label>
            </td>
            <td style="height: 23px">
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
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label4" runat="server" Text="Parentesco"></asp:Label>
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
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 23px">
                <asp:Label ID="Label5" runat="server" Text="Carnet CONADIS"></asp:Label>
            </td>
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:RadioButton ID="RadioButton3" runat="server" Text="SI" />
                        </td>
                        <td>
                            <asp:RadioButton ID="RadioButton4" runat="server" Text="NO" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 23px">
            </td>
            <td style="height: 23px">
                <asp:Label ID="Label9" runat="server" Text="No Carnet"></asp:Label>
            </td>
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="width: 263px">
                            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                        </td>
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
            <td style="height: 23px">
            </td>
            <td style="border-style: groove">
                <asp:Label ID="Label10" runat="server" Text="Tipo Discapacidad"></asp:Label>
            </td>
            <td style="border-style: groove">
                <asp:Label ID="Label11" runat="server" Text="Label"></asp:Label>
            </td>
            <td style="border-style: groove">
                <asp:Label ID="Label12" runat="server" Text="Grado"></asp:Label>
            </td>
            <td style="border-style: groove">
            </td>
        </tr>
        <tr>
            <td style="height: 23px">
            </td>
            <td style="border-style: groove">
                <asp:DropDownList ID="DropDownList2" runat="server">
                    <asp:ListItem>Visual</asp:ListItem>
                    <asp:ListItem>Auditiva</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="border-style: groove">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                            <asp:Label ID="Label14" runat="server" Text=" %"></asp:Label>
                        </td>
                        <td>
                            &nbsp;</td>
                    </tr>
                </table>
            </td>
            <td style="border-style: groove">
                <asp:Label ID="Label13" runat="server" ForeColor="#000066" Text="Leve"></asp:Label>
            </td>
            <td style="border-style: groove">
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                <asp:Button ID="Button1" runat="server" Text="Añadir" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                <asp:Button ID="Button2" runat="server" Text="Eliminar" />
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                &nbsp;</td>
            <td style="border-style: groove">
                <asp:Button ID="Button3" runat="server" Text="Guardar Todo" />
            </td>
        </tr>
    </table>
</asp:Content>

