<%@ Page Title="datos basicos" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="datosbasicos1.aspx.cs" Inherits="datosbasicos1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <div>

        <table class="style1" align="center">
            <tr>
                <td colspan="5" bgcolor="#000066">
                    <asp:Label ID="Label25" runat="server" BackColor="#000066" ForeColor="White"
                        Text="INGRESO DATOS FUNCIONARIO"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label1" runat="server" Text="Apellido Paterno"></asp:Label>
                </td>
                <td class="style24">
                    <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">
                    <asp:Label ID="Label12" runat="server" Text="Apellido Materno"></asp:Label>
                </td>
                <td class="style8">
                    <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style22" style="height: 26px">
                    <asp:Label ID="Label2" runat="server" Text="Nombre"></asp:Label>
                </td>
                <td class="style24" style="height: 26px">
                    <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                </td>
                <td class="style15" style="height: 26px"></td>
                <td class="style7" style="height: 26px">
                    <asp:Label ID="Label13" runat="server" Text="2do Nombre"></asp:Label>
                </td>
                <td class="style8" style="height: 26px">
                    <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label3" runat="server" Text="Nacionalidad"></asp:Label>
                </td>
                <td class="style24">
                    <asp:DropDownList ID="DropDownList1" runat="server">
                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                        <asp:ListItem>Peruano</asp:ListItem>
                        <asp:ListItem></asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">
                    <asp:Label ID="Label14" runat="server" Text="Sexo"></asp:Label>
                </td>
                <td class="style8">
                    <asp:RadioButton ID="RadioButton5" runat="server" Text="Masculino" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <asp:RadioButton ID="RadioButton6" runat="server" Text="Femenino" />
                </td>
            </tr>
            <tr>
                <td class="style23">
                    <asp:Label ID="Label4" runat="server" Text="Tipo de Documento"></asp:Label>
                </td>
                <td class="style25">
                    <table class="style17">
                        <tr>
                            <td>
                                <asp:DropDownList ID="DropDownList10" runat="server">
                                    <asp:ListItem>Cedula</asp:ListItem>
                                    <asp:ListItem>Pasaporte</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:Label ID="Label18" runat="server" Text="No"></asp:Label>
                            </td>
                            <td>
                                <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </td>
                <td class="style16">&nbsp;</td>
                <td class="style13">Raza</td>
                <td class="style14">
                    <asp:DropDownList ID="DropDownList15" runat="server">
                        <asp:ListItem>Mestizo</asp:ListItem>
                        <asp:ListItem>Mulato</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label5" runat="server" Text="Libreta Militar"></asp:Label>
                </td>
                <td class="style24">
                    <table class="style17">
                        <tr>
                            <td class="style21" style="width: 4px">
                                <asp:TextBox ID="TextBox12" runat="server"></asp:TextBox>
                            </td>
                        </tr>
                    </table>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">
                    <asp:Label ID="Label15" runat="server" Text="Fecha Nacimiento"></asp:Label>
                </td>
                <td class="style8">
                    <table class="style17">
                        <tr>
                            <td>Año</td>
                            <td>Mes</td>
                            <td>Dia</td>
                        </tr>
                        <tr>
                            <td>
                                <asp:DropDownList ID="DropDownList7" runat="server">
                                    <asp:ListItem>2015</asp:ListItem>
                                    <asp:ListItem>2014</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:DropDownList ID="DropDownList8" runat="server">
                                    <asp:ListItem>Enero</asp:ListItem>
                                    <asp:ListItem>Febrero</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                            <td>
                                <asp:DropDownList ID="DropDownList9" runat="server">
                                    <asp:ListItem>1</asp:ListItem>
                                    <asp:ListItem>2</asp:ListItem>
                                    <asp:ListItem>3</asp:ListItem>
                                </asp:DropDownList>
                            </td>
                        </tr>
                    </table>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="style22">Pais d nacimiento</td>
                <td class="style24">
                    <asp:DropDownList ID="DropDownList16" runat="server">
                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                        <asp:ListItem>Argentino</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">&nbsp;</td>
                <td class="style8">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label6" runat="server" Text="Lugar de Nacimiento"></asp:Label>
                </td>
                <td class="style24">
                    <asp:DropDownList ID="DropDownList3" runat="server">
                        <asp:ListItem>Pichincha</asp:ListItem>
                        <asp:ListItem>Cotopaxi</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15">
                    <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                </td>
                <td class="style7">
                    <asp:Label ID="Label16" runat="server" Text="Estado Civil"></asp:Label>
                </td>
                <td class="style8">
                    <asp:DropDownList ID="DropDownList6" runat="server">
                        <asp:ListItem>Soltero</asp:ListItem>
                        <asp:ListItem>Casado</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label7" runat="server" Text="Tipo de Sangre"></asp:Label>
                </td>
                <td class="style24">
                    <asp:DropDownList ID="DropDownList4" runat="server">
                        <asp:ListItem>O+</asp:ListItem>
                        <asp:ListItem>A-</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">
                    <asp:Label ID="Label17" runat="server" Text="Telefono Celular"></asp:Label>
                </td>
                <td class="style8">
                    <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label8" runat="server" Text="Telefono Fijo"></asp:Label>
                </td>
                <td class="style24">
                    <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7" colspan="2" rowspan="5">
                    <img alt="sinfoto" src="/Images/sinFoto.png"
                        style="width: 127px; height: 169px" /></td>
            </tr>
            <tr>
                <td class="style23">
                    <asp:Label ID="Label9" runat="server" Text="Correo Personal"></asp:Label>
                </td>
                <td class="style25">
                    <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                </td>
                <td class="style16"></td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label10" runat="server" Text="Tarjeta"></asp:Label>
                </td>
                <td class="style24">
                    <table class="style17">
                        <tr>
                            <td>
                                <asp:RadioButton ID="RadioButton9" runat="server" Text="SI" />
                            </td>
                            <td>
                                <asp:RadioButton ID="RadioButton10" runat="server" Text="No" />
                            </td>
                        </tr>
                    </table>
                </td>
                <td class="style15">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label11" runat="server" Text="Path de Foto"></asp:Label>
                </td>
                <td class="style24">
                    <asp:FileUpload ID="FileUpload1" runat="server" />
                </td>
                <td class="style15">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22">&nbsp;</td>
                <td class="style24">&nbsp;</td>
                <td class="style15">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22" colspan="5" bgcolor="#000066">
                    <asp:Label ID="Label19" runat="server" BackColor="#000066" ForeColor="White"
                        Text="INGRESO LOCALIZACION DOMICILIO FUNCIONARIO"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style22" style="height: 26px">
                    <asp:Label ID="Label20" runat="server" Text="Provincia"></asp:Label>
                </td>
                <td class="style24" style="height: 26px">
                    <asp:DropDownList ID="DropDownList11" runat="server">
                        <asp:ListItem>Pichincha</asp:ListItem>
                        <asp:ListItem>Cotopaxi</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15" style="height: 26px"></td>
                <td class="style7" style="height: 26px">
                    <asp:Label ID="Label22" runat="server" Text="Canton"></asp:Label>
                </td>
                <td class="style8" style="height: 26px">
                    <asp:DropDownList ID="DropDownList13" runat="server">
                        <asp:ListItem>Quito</asp:ListItem>
                        <asp:ListItem>Rumiñahui</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="style22">
                    <asp:Label ID="Label21" runat="server" Text="Parroquia"></asp:Label>
                </td>
                <td class="style24">
                    <asp:DropDownList ID="DropDownList12" runat="server">
                        <asp:ListItem>Chillogallo</asp:ListItem>
                        <asp:ListItem>La Ecuatoriana</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="style15">&nbsp;</td>
                <td class="style7">
                    <asp:Label ID="Label23" runat="server" Text="Sector"></asp:Label>
                </td>
                <td class="style8">
                    <asp:DropDownList ID="DropDownList14" runat="server">
                        <asp:ListItem>San Luis</asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td class="style22">&nbsp;</td>
                <td class="style24">
                    <asp:Label ID="Label24" runat="server" Text="Direccion"></asp:Label>
                </td>
                <td class="style15">
                    <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
                </td>
                <td class="style7">&nbsp;</td>
                <td class="style8">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22">&nbsp;</td>
                <td class="style24">&nbsp;</td>
                <td class="style15">&nbsp;</td>
                <td class="style7">&nbsp;</td>
                <td class="style8">&nbsp;</td>
            </tr>
            <tr>
                <td class="style22">&nbsp;</td>
                <td class="style24">&nbsp;</td>
                <td class="style15">
                    <asp:Button ID="Button1" runat="server" Text="Ingresar" />
                </td>
                <td class="style7">&nbsp;</td>
                <td class="style8">&nbsp;</td>
            </tr>
        </table>

    </div>


</asp:Content>

