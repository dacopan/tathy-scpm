<%@ Page Title="Mantenedores del personal" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="mantenedoresPers.aspx.cs" Inherits="mantenedoresPers" %>

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
                    Text="LOCALIZACION"></asp:Label>
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
                <asp:Label ID="Label3" runat="server" Text="Provincias"></asp:Label>
            </td>
            <td style="height: 30px">
                    <asp:DropDownList ID="DropDownList16" runat="server">
                        <asp:ListItem>Pichincha</asp:ListItem>
                        <asp:ListItem>Cotopaxi</asp:ListItem>
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
                <asp:Label ID="Label4" runat="server" Text="Canton"></asp:Label>
            </td>
            <td style="height: 26px">
                    <asp:DropDownList ID="DropDownList17" runat="server">
                        <asp:ListItem>Quito</asp:ListItem>
                        <asp:ListItem>Rumiñahui</asp:ListItem>
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
                <asp:Label ID="Label5" runat="server" Text="Parrroquia"></asp:Label>
            </td>
            <td>
                    <asp:DropDownList ID="DropDownList18" runat="server">
                        <asp:ListItem>Chillogallo</asp:ListItem>
                        <asp:ListItem>La Ecuatoriana</asp:ListItem>
                    </asp:DropDownList>
                </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label35" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TextBox14" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:Button ID="Button2" runat="server" Text="Deshabilitar/habilitar" />
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
            <td colspan="4" style="height: 23px" bgcolor="#000066">
                <asp:Label ID="Label6" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="TIPO DISCAPACIDAD"></asp:Label>
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
                <asp:Label ID="Label7" runat="server" Text="Discapacidad"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList2" runat="server">
                    <asp:ListItem>Visual</asp:ListItem>
                    <asp:ListItem>Auditiva</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                <asp:Button ID="Button4" runat="server" Text="Nuevo" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label8" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button5" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button6" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label9" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="TIPO DOCUMENTO"></asp:Label>
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
                <asp:Label ID="Label10" runat="server" Text="Tipo Documento"></asp:Label>
            </td>
            <td>
                                <asp:DropDownList ID="DropDownList12" runat="server">
                                    <asp:ListItem>Cedula</asp:ListItem>
                                    <asp:ListItem>Pasaporte</asp:ListItem>
                                </asp:DropDownList>
                            </td>
            <td>
                <asp:Button ID="Button22" runat="server" Text="Nuevo" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label24" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button23" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button24" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label12" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="ESTADO CIVIL"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">
                &nbsp;</td>
            <td style="height: 30px">
                    &nbsp;</td>
            <td>
                &nbsp;</td>
            <td style="height: 30px">
                &nbsp;</td>
        </tr>
        <tr>
            <td style="height: 30px">
                <asp:Label ID="Label22" runat="server" Text="Estado Civil"></asp:Label>
            </td>
            <td style="height: 30px">
                    <asp:DropDownList ID="DropDownList13" runat="server">
                        <asp:ListItem>Soltero</asp:ListItem>
                        <asp:ListItem>Casado</asp:ListItem>
                    </asp:DropDownList>
                </td>
            <td>
                <asp:Button ID="Button25" runat="server" Text="Nuevo" />
            </td>
            <td style="height: 30px">
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label25" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button26" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button27" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label13" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="PROFESION"></asp:Label>
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
                <asp:Label ID="Label32" runat="server" Text="Profesiones"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList6" runat="server">
                    <asp:ListItem>Chofer</asp:ListItem>
                    <asp:ListItem>Cajera</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                <asp:Button ID="Button28" runat="server" Text="Nuevo" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label26" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button29" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button30" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label16" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="PARENTESCO"></asp:Label>
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
                <asp:Label ID="Label17" runat="server" Text="Parentescos"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList1" runat="server">
                    <asp:ListItem>Padre</asp:ListItem>
                    <asp:ListItem>Madre</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                <asp:Button ID="Button31" runat="server" Text="Nuevo" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label27" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button32" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button33" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label19" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="RAZA"></asp:Label>
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
                <asp:Label ID="Label20" runat="server" Text="Razas"></asp:Label>
            </td>
            <td>
                    <asp:DropDownList ID="DropDownList15" runat="server">
                        <asp:ListItem>Mestizo</asp:ListItem>
                        <asp:ListItem>Mulato</asp:ListItem>
                    </asp:DropDownList>
                </td>
            <td>
                <asp:Button ID="Button34" runat="server" Text="Nuevo" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label28" runat="server" Text="Nuevo/Modificar"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button35" runat="server" Text="Modificar" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                &nbsp;</td>
            <td>
                &nbsp;</td>
            <td>
                <asp:Button ID="Button36" runat="server" Text="Deshabilitar/habilitar" />
            </td>
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
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label29" runat="server" BackColor="#000066" ForeColor="White" 
                    Text="NACIONALIDAD"></asp:Label>
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
                Pais</td>
            <td>
                <asp:DropDownList ID="DropDownList10" runat="server">
                    <asp:ListItem>Peru</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button37" runat="server" Text="Ingresar" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label31" runat="server" Text="Nacionalidad"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="DropDownList11" runat="server">
                    <asp:ListItem>Peruano/a</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td style="height: 26px">
                <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
            </td>
            <td style="height: 26px">
                <asp:Button ID="Button38" runat="server" Text="Modificar" />
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
                <asp:Button ID="Button39" runat="server" Text="Deshabilitar/habilitar" />
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

