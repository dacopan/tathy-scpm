<%@ Page Title="Mantenedores del personal" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="mantenedoresPers.aspx.cs" Inherits="mantenedoresPers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="MANTENEDORES DE LOCALIZACION"></asp:Label>
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
                <asp:Label ID="Label3" runat="server" Text="Provincias"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="comboProvincia" runat="server" OnSelectedIndexChanged="comboProvincia_SelectedIndexChanged" AutoPostBack="True">
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
                            <asp:TextBox ID="inProvincia" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onProvincia" runat="server"/>
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="addProvincia" runat="server" Text="Ingresar" OnClick="addProvincia_Click" />
                <asp:Button ID="editProvincia" runat="server" Text="Modificar" OnClick="editProvincia_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label4" runat="server" Text="Canton"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="ComboCanton" runat="server" OnSelectedIndexChanged="ComboCanton_SelectedIndexChanged" AutoPostBack="True">
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
                            <asp:TextBox ID="inCanton" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onCanton" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="addCanton" runat="server" Text="Ingresar" OnClick="addCanton_Click" />
                <asp:Button ID="editCanton" runat="server" Text="Modificar" OnClick="editCanton_Click" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label5" runat="server" Text="Parrroquia"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="ComboParroquia" runat="server" OnSelectedIndexChanged="ComboParroquia_SelectedIndexChanged" AutoPostBack="True">
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
                            <asp:TextBox ID="inParroquia" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onParroquia" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:Button ID="addParroquia" runat="server" Text="Ingresar" OnClick="addParroquia_Click" />
                <asp:Button ID="editParroquia" runat="server" Text="Modificar" OnClick="editParroquia_Click" />
            </td>
        </tr>

        <tr>
            <td>
                <asp:Label ID="Label26" runat="server" Text="Sector"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboSector" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboSector_SelectedIndexChanged">
                    <asp:ListItem>Chillogallo</asp:ListItem>
                    <asp:ListItem>La Ecuatoriana</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label27" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="inSector" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onSector" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:Button ID="addSector" runat="server" Text="Ingresar" OnClick="addSector_Click" />
                <asp:Button ID="editSector" runat="server" Text="Modificar" OnClick="editSector_Click" />
            </td>
        </tr>

        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" style="height: 23px" bgcolor="#000066">
                <asp:Label ID="Label6" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="TIPO DISCAPACIDAD"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label7" runat="server" Text="Discapacidad"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboDiscapacidad" runat="server" OnSelectedIndexChanged="comboDiscapacidad_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>Visual</asp:ListItem>
                    <asp:ListItem>Auditiva</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label8" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inDiscapacidad" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onDiscapacidad" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addDiscapacidad" runat="server" Text="Ingresar" OnClick="addDiscapacidad_Click" />
                <asp:Button ID="editDiscapacidad" runat="server" Text="Modificar" OnClick="editDiscapacidad_Click" />
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
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label9" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="TIPO DOCUMENTO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>

        <tr>
            <td>
                <asp:Label ID="Label10" runat="server" Text="Documento"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboDocumento" runat="server" OnSelectedIndexChanged="comboDocumento_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>CI</asp:ListItem>
                    <asp:ListItem>RUC</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label11" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inDocumento" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onDocumento" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addDocumento" runat="server" Text="Ingresar" OnClick="addDocumento_Click" />
                <asp:Button ID="editDocumento" runat="server" Text="Modificar" OnClick="editDocumento_Click" />
            </td>
        </tr>


        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label12" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="ESTADO CIVIL"></asp:Label>
            </td>
        </tr>
        <tr>
            <td style="height: 30px">&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
            <td>&nbsp;</td>
            <td style="height: 30px">&nbsp;</td>
        </tr>

        <tr>
            <td>
                <asp:Label ID="Label14" runat="server" Text="Estado civil"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboEstadoCivil" runat="server" OnSelectedIndexChanged="comboEstadoCivil_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>Soltero</asp:ListItem>
                    <asp:ListItem>Casado</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label15" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inEstadoCivil" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onEstadoCivil" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addEstadoCivil" runat="server" Text="Ingresar" OnClick="addEstadoCivil_Click" />
                <asp:Button ID="editEstadoCivil" runat="server" Text="Modificar" OnClick="editEstadoCivil_Click" />
            </td>
        </tr>


        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label13" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="PROFESION"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label18" runat="server" Text="Profesion"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboProfesion" runat="server" OnSelectedIndexChanged="comboProfesion_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>Chofer</asp:ListItem>
                    <asp:ListItem>ddd</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label21" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inProfesion" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onProfesion" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addProfesion" runat="server" Text="Ingresar" OnClick="addProfesion_Click" />
                <asp:Button ID="editProfesion" runat="server" Text="Modificar" OnClick="editProfesion_Click" />
            </td>
        </tr>



        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label16" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="PARENTESCO"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>


        <tr>
            <td>
                <asp:Label ID="Label17" runat="server" Text="Parentesco"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboParentesco" runat="server" OnSelectedIndexChanged="comboParentesco_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>Padre</asp:ListItem>
                    <asp:ListItem>Madre</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label22" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inParentesco" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onParentesco" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addParentesco" runat="server" Text="Ingresar" OnClick="addParentesco_Click" />
                <asp:Button ID="editParentesco" runat="server" Text="Modificar" OnClick="editParentesco_Click" />
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label19" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="RAZA"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>

        <tr>
            <td>
                <asp:Label ID="Label20" runat="server" Text="Raza"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="coboRaza" runat="server" OnSelectedIndexChanged="coboRaza_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>blanco</asp:ListItem>
                    <asp:ListItem>indio</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label23" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inRaza" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onRaza" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addRaza" runat="server" Text="Ingresar" OnClick="addRaza_Click" />
                <asp:Button ID="editRaza" runat="server" Text="Modificar" OnClick="editRaza_Click" />
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label29" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="NACIONALIDAD"></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>

        <tr>
            <td>
                <asp:Label ID="Label24" runat="server" Text="Pais"></asp:Label>
            </td>
            <td>
                <asp:DropDownList ID="comboPais" runat="server" OnSelectedIndexChanged="comboPais_SelectedIndexChanged" AutoPostBack="True">
                    <asp:ListItem>blanco</asp:ListItem>
                    <asp:ListItem>indio</asp:ListItem>
                </asp:DropDownList>
            </td>

            <td style="height: 30px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label25" runat="server" Text="Nuevo/Modificar"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="inPais" runat="server" data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                        </td>
                        <td>
                            <label class="switch-original">
                                <asp:CheckBox ID="onPais" runat="server" />
                                <span class="check"></span>
                            </label>
                        </td>
                    </tr>
                </table>

            </td>
            <td>
                <asp:Button ID="addPais" runat="server" Text="Ingresar" OnClick="addPais_Click" />
                <asp:Button ID="editPais" runat="server" Text="Modificar" OnClick="editPais_Click" />
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
    <script type="text/javascript">
        
    </script>
</asp:Content>

