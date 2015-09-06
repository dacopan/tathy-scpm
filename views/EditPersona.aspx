<%@ Page Title="datos basicos" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="EditPersona.aspx.cs" Inherits="EditPersona" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <div>
        <div class="wizard" data-locale="es" id="wizardx">
            <asp:HiddenField Value="1" runat="server" ID="wizardStep" />
            <asp:HiddenField Value="0" runat="server" ID="hasAvatar" />
            <asp:Button Text="submit" OnClick="addPersona_Click" runat="server" CssClass="no-visible submit" />
            <div class="steps">
               <div class="step" runat="server">
                    <table class="style1" align="center">
                        <tr>
                            <td colspan="5" bgcolor="#000066">
                                <asp:Label ID="Label25" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                                    Text="INGRESO DATOS FUNCIONARIO"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label1" runat="server" Text="Apellido Paterno"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control text">
                                    <asp:TextBox ID="inApellido1" runat="server" data-validate-func="required" data-validate-hint="apellido paterno requerido"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:Label ID="Label12" runat="server" Text="Apellido Materno"></asp:Label>
                            </td>
                            <td class="style8">
                                <div class="input-control text">
                                    <asp:TextBox ID="inApellido2" runat="server" data-validate-func="required" data-validate-hint="apellido materno requerido"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22" style="height: 26px">
                                <asp:Label ID="Label2" runat="server" Text="Nombre"></asp:Label>
                            </td>
                            <td class="style24" style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="inNombre1" runat="server" data-validate-func="required" data-validate-hint="Primer Nombre requerido"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td class="style15" style="height: 26px"></td>
                            <td class="style7" style="height: 26px">
                                <asp:Label ID="Label13" runat="server" Text="2do Nombre"></asp:Label>
                            </td>
                            <td class="style8" style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="inNombre2" runat="server" data-validate-func="required" data-validate-hint="Segundo Nombre requerido"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label3" runat="server" Text="Nacionalidad"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboPais" runat="server" data-validate-func="required" data-validate-hint="Seleccione pais">
                                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                                        <asp:ListItem>Peruano</asp:ListItem>
                                        <asp:ListItem></asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:Label ID="Label14" runat="server" Text="Sexo"></asp:Label>
                            </td>
                            <td class="style8">
                                <label class="input-control checkbox">
                                    <asp:RadioButton ID="sexo" runat="server" Text="" GroupName="sexo" Checked="true" />
                                    <span class="check"></span>
                                    <span class="caption">Masculino</span>
                                </label>
                                <label class="input-control checkbox">
                                    <asp:RadioButton ID="RadioButton6" runat="server" Text="" GroupName="sexo" />
                                    <span class="check"></span>
                                    <span class="caption">Femenino</span>
                                </label>


                            </td>
                        </tr>
                        <tr>
                            <td class="style23">
                                <asp:Label ID="Label4" runat="server" Text="Tipo de Documento"></asp:Label>
                            </td>



                            <td>
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboDocumento" runat="server" AutoPostBack="true" OnSelectedIndexChanged="comboDocumento_SelectedIndexChanged" data-validate-func="required" data-validate-hint="Seleccione Tipo documento">
                                        <asp:ListItem>Cedula</asp:ListItem>
                                        <asp:ListItem>Pasaporte</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style16">&nbsp;</td>
                            <td>
                                <asp:Label ID="Label18" runat="server" Text="No"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="inDocumento" runat="server" data-validate-func="required" data-validate-hint="Numero documento inválido"></asp:TextBox>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td class="style13">Raza</td>
                            <td class="style14">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboRaza" runat="server" data-validate-func="required" data-validate-hint="Seleccione Raza">
                                        <asp:ListItem>Mestizo</asp:ListItem>
                                        <asp:ListItem>Mulato</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style16">&nbsp;</td>
                            <td class="style7">
                                <asp:Label ID="Label16" runat="server" Text="Estado Civil"></asp:Label>
                            </td>
                            <td class="style8">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboEstadoCivil" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboEstadoCivil_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Seleccione estado civil">
                                        <asp:ListItem>Soltero</asp:ListItem>
                                        <asp:ListItem>Casado</asp:ListItem>
                                    </asp:DropDownList>
                                </div>

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
                                            <div class="input-control text">
                                                <asp:TextBox ID="inMilitar" runat="server" data-validate-hint="Libreta militar incorrecta"
                                                    data-validate-func="minlength" data-validate-arg="12"
                                                    data-inputmask="'mask': '9{12}'"></asp:TextBox>
                                            </div>
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
                                        <td>
                                            <div class="input-control text" data-role="datepickerx" data-format="yyyy-mm-dd">
                                                <asp:TextBox ID="inFechaNac" runat="server" data-validate-hint="Funcionario fecha nacimiento"></asp:TextBox>
                                                <button class="button"><span class="mif-calendar"></span></button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>


                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label7" runat="server" Text="Tipo de Sangre"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboSangre" runat="server" data-validate-func="required" data-validate-hint="Seleccione Tipo de sangre">
                                        <asp:ListItem>--Seleccionar--</asp:ListItem>
                                        <asp:ListItem Value="A-">A-</asp:ListItem>
                                        <asp:ListItem Value="A+">A+</asp:ListItem>
                                        <asp:ListItem Value="AB-">AB-</asp:ListItem>
                                        <asp:ListItem Value="AB+">AB+</asp:ListItem>
                                        <asp:ListItem Value="B-">B-</asp:ListItem>
                                        <asp:ListItem Value="B+">B+</asp:ListItem>
                                        <asp:ListItem Value="O-">O-</asp:ListItem>
                                        <asp:ListItem Value="O+">O+</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:Label ID="Label17" runat="server" Text="Telefono Celular"></asp:Label>
                            </td>
                            <td class="style8">
                                <div class="input-control text">
                                    <asp:TextBox ID="inCelular" runat="server" data-validate-hint="Telefono celular incorrecto"
                                        data-validate-func="minlength" data-validate-arg="10"
                                        data-inputmask="'mask': '9{10}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label8" runat="server" Text="Telefono Fijo"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control text">
                                    <asp:TextBox ID="inTelefono" runat="server" data-validate-hint="Telefono fijo incorrecto"
                                        data-validate-func="pattern" data-validate-arg="\d{7,10}"
                                        data-inputmask="'mask': '9{7,10}'"></asp:TextBox>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7" colspan="2" rowspan="5">
                                <div class="image-container bordered image-format-hd handing" style="max-width: 150px">
                                    <div class="frame">
                                        <asp:Image ID="Avatar" runat="server" ImageUrl="~/Uploads/avatar.png" />
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td class="style23">
                                <asp:Label ID="Label9" runat="server" Text="Correo Personal"></asp:Label>
                            </td>
                            <td class="style25">
                                <div class="input-control text">
                                    <asp:TextBox ID="inEmail" runat="server" data-validate-func="email" data-validate-hint="Email incorrecto"></asp:TextBox>
                                </div>
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
                                            <label class="input-control checkbox">
                                                <asp:RadioButton ID="tarjeta" runat="server" Text="" GroupName="tarjeta" Checked="true" />
                                                <span class="check"></span>
                                                <span class="caption">Si</span>
                                            </label>
                                            <label class="input-control checkbox">
                                                <asp:RadioButton ID="RadioButton10" runat="server" Text="" GroupName="tarjeta" />
                                                <span class="check"></span>
                                                <span class="caption">No</span>
                                            </label>
                                        </td>

                                    </tr>
                                </table>
                            </td>
                            <td class="style15">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label11" runat="server" Text="Foto"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control file" data-role="input">
                                    <input id="avatarUpload" type="file" name="file" onchange="previewFile()" runat="server" accept="image/x-png, image/jpeg" />
                                    <button class="button"><span class="mif-camera"></span></button>
                                </div>
                            </td>
                            <td class="style15">
                                <asp:Button runat="server" ID="atach" Text="Subir" OnClick="atach_Click" />
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">&nbsp;</td>
                            <td class="style24">&nbsp;</td>
                            <td class="style15">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style22" colspan="5" bgcolor="#000066">

                                <asp:Label ID="Label19" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                                    Text="INGRESO LOCALIZACION DOMICILIO FUNCIONARIO"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22" style="height: 26px">
                                <asp:Label ID="Label20" runat="server" Text="Provincia"></asp:Label>
                            </td>
                            <td class="style24" style="height: 26px">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboProvincia" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboProvincia_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Provincia incorrecta">
                                        <asp:ListItem>Pichincha</asp:ListItem>
                                        <asp:ListItem>Cotopaxi</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style15" style="height: 26px"></td>
                            <td class="style7" style="height: 26px">
                                <asp:Label ID="Label22" runat="server" Text="Canton"></asp:Label>
                            </td>
                            <td class="style8" style="height: 26px">
                                <div class="input-control select">
                                    <asp:DropDownList ID="ComboCanton" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboCanton_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Canton incorrecto">
                                        <asp:ListItem>Quito</asp:ListItem>
                                        <asp:ListItem>Rumiñahui</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label21" runat="server" Text="Parroquia"></asp:Label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:DropDownList ID="ComboParroquia" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboParroquia_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Parroquia incorrecto">
                                        <asp:ListItem>Chillogallo</asp:ListItem>
                                        <asp:ListItem>La Ecuatoriana</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:Label ID="Label23" runat="server" Text="Sector"></asp:Label>
                            </td>
                            <td class="style8">
                                <div class="input-control select">
                                    <asp:DropDownList ID="comboSector" runat="server"
                                        data-validate-func="required" data-validate-hint="Sector incorrecto">
                                        <asp:ListItem>San Luis</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:Label ID="Label24" runat="server" Text="Direccion"></asp:Label>
                            </td>
                            <td class="style15">
                                <div class="input-control text">
                                    <asp:TextBox ID="inDireccion" runat="server" data-validate-func="required" data-validate-hint="Dirección incorrecto"
                                        data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td class="style7">&nbsp;</td>
                            <td class="style8">&nbsp;</td>
                        </tr>

                    </table>
                </div>

                <%--CONYUGUE--%>
                <div class="step" runat="server" id="stepConyugue" visible="true">
                    <table class="style1" align="center">
                        <tr>
                            <td colspan="5" bgcolor="#000066">
                                <asp:Label ID="Label6" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                                    Text="INGRESO CONYUGE"></asp:Label>
                            </td>
                        </tr>

                        <tr>
                            <td style="height: 26px">Apellido Paterno</td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="con_apellido1" runat="server" data-validate-func="required" data-validate-hint="Apellido paterno cónyugue"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">
                                <asp:Label ID="Label30" runat="server" Text="Apellido Materno"></asp:Label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="con_apellido2" runat="server" data-validate-func="required" data-validate-hint="Apellido materno cónyugue"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label31" runat="server" Text="Nombre:"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_nombre1" runat="server" data-validate-func="required" data-validate-hint="Primer nombre cónyugue"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="Label32" runat="server" Text="2do Nombre"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_nombre2" runat="server" data-validate-func="required" data-validate-hint="Segundo Nombre cónyugue"
                                        data-inputmask="'mask': 'B{1,}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="height: 26px">
                                <asp:Label ID="Label33" runat="server" Text="Nacionalidad"></asp:Label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control select">
                                    <asp:DropDownList ID="con_pais" runat="server" data-validate-func="required" data-validate-hint="Seleccione país conyugue">
                                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">&nbsp;</td>
                            <td style="height: 26px"></td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label34" runat="server" Text="Tipo Documento"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:DropDownList ID="con_comboDocumento" OnSelectedIndexChanged="con_comboDocumento_SelectedIndexChanged" AutoPostBack="true" runat="server" data-validate-func="required" data-validate-hint="Seleccione tipo documento conyugue">
                                        <asp:ListItem>Cedula</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="Label35" runat="server" Text="No"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_documento" runat="server" data-validate-func="required" data-validate-hint="Número documento cónyugue"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label37" runat="server" Text="Fecha de Nacimiento"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text" data-role="datepickerx" data-format="yyyy-mm-dd">
                                    <asp:TextBox ID="con_fechaNacimiento" runat="server" data-validate-hint="Conyugue fecha nacimiento"></asp:TextBox>
                                    <button class="button"><span class="mif-calendar"></span></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="height: 26px">
                                <asp:Label runat="server" Text="Telefono Fijo"></asp:Label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="con_telefono" runat="server" data-validate-hint="Telefono fijo cónyugue"
                                        data-validate-func="pattern" data-validate-arg="\d{7,10}"
                                        data-inputmask="'mask': '9{7,10}'"></asp:TextBox>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">
                                <asp:Label ID="Label42" runat="server" Text="Celular"></asp:Label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:TextBox ID="con_celular" runat="server" data-validate-hint="Telefono celular cónyugue"
                                        data-validate-func="minlength" data-validate-arg="10"
                                        data-inputmask="'mask': '9{10}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label43" runat="server" Text="Correo Personal"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_Email" runat="server" data-validate-func="email" data-validate-hint="Mail conyugue"></asp:TextBox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="Label44" runat="server" Text="Profesion"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:DropDownList ID="con_comboProfesion" runat="server" data-validate-func="required" data-validate-hint="Seleccione profesion cónyugue">
                                        <asp:ListItem>Chofer</asp:ListItem>
                                        <asp:ListItem>Cajera</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label45" runat="server" Text="Trabaja:"></asp:Label>
                            </td>
                            <td>
                                <table class="backgroundRepeatBanner">
                                    <tr>
                                        <td>
                                            <label class="input-control checkbox">
                                                <asp:RadioButton ID="con_trabaja" runat="server" Text="" GroupName="abc1" Checked="true" AutoPostBack="true" OnCheckedChanged="con_trabaja_CheckedChanged" />
                                                <span class="check"></span>
                                                <span class="caption">Si</span>
                                            </label>
                                            <label class="input-control checkbox">
                                                <asp:RadioButton ID="RadioButton2" runat="server" Text="" GroupName="abc1" AutoPostBack="true" OnCheckedChanged="con_trabaja_CheckedChanged" />
                                                <span class="check"></span>
                                                <span class="caption">No</span>
                                            </label>


                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="con_lugarTrabW" runat="server" Text="Lugar de trabajo"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_lugarTrab" runat="server" data-validate-func="required" data-validate-hint="Lugar trabajo Conyugue"
                                        data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="con_empresaW" runat="server" Text="Nombre Empresa"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_empresa" runat="server" data-validate-func="required" data-validate-hint="Empresa Conyugue"
                                        data-inputmask="'mask': 'W{1,}'"></asp:TextBox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:Label ID="con_telfTrabajoW" runat="server" Text="Telefono Trabajo"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="con_telfTrabajo" runat="server" data-validate-hint="Telefono trabajo Conyugue"
                                        data-validate-func="pattern" data-validate-arg="\d{7,10}"
                                        data-inputmask="'mask': '9{7,10}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>

                <%--DISCAPACIDADES--%>

                <div class="step">
                    <label class="input-control checkbox">
                        <asp:CheckBox ID="hasDisapacidad" runat="server" />
                        <span class="check"></span>
                        <span class="caption">Tiene alguna discapacidad?</span>
                    </label>
                    <div id="discapacidadStep">
                        <table class="backgroundRepeatBanner">
                            <tr>
                                <td colspan="5" bgcolor="#000066">
                                    <asp:Label ID="Label26" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                                        Text="INGRESO DISCAPACIDAD"></asp:Label>
                                </td>
                            </tr>

                            <tr>
                                <td style="height: 23px">
                                    <table class="backgroundRepeatBanner">
                                        <tr>
                                            <td>
                                                <label class="input-control checkbox">
                                                    <asp:CheckBox ID="dis_isPropia" runat="server" Checked="true" />
                                                    <span class="check"></span>
                                                    <span class="caption">Es discapacidad propia?</span>
                                                </label>

                                            </td>
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <asp:Label ID="Label27" runat="server" Text="Parentesco"></asp:Label>
                                    <asp:DropDownList ID="dis_comboParentesco" runat="server">
                                        <asp:ListItem>Padre</asp:ListItem>
                                        <asp:ListItem>Madre</asp:ListItem>
                                    </asp:DropDownList>
                                </td>

                            </tr>
                            <tr>
                                <td style="height: 23px">
                                    <table class="backgroundRepeatBanner">
                                        <tr>
                                            <td>

                                                <label class="input-control checkbox">
                                                    <asp:CheckBox ID="dis_hasConadis" runat="server" Checked="true" />
                                                    <span class="check"></span>
                                                    <span class="caption">Tiene carnet del CONADIS?</span>
                                                </label>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="height: 23px">

                                    <br />
                                    <div class="input-control text info" id="dis_conadisWrap">
                                        <label>No. Carnet</label>
                                        <br />
                                        <asp:TextBox ID="dis_conadis" runat="server"></asp:TextBox>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <asp:Repeater ID="Repeater1" runat="server">
                                        <HeaderTemplate>
                                            <br />
                                            <br />
                                            <br />
                                            <table class="backgroundRepeatBanner table striped hovered cell-hovered border bordered">
                                                <thead>
                                                    <th>Tipo</th>
                                                    <th>Nivel (%)</th>
                                                    <th>grado</th>
                                                </thead>
                                        </HeaderTemplate>
                                        <ItemTemplate>
                                            <tr>
                                                <td bgcolor="#CCFFCC">
                                                    <asp:HiddenField Value='<%# Eval("TIP_DIS_ID") %>' ID="dis_tip_id" runat="server" />
                                                    <asp:Label runat="server" ID="tipo" Text='<%# Eval("TIP_DIS_NOM") %>' />
                                                </td>
                                                <td>
                                                    <div class="slider large"
                                                        data-target='<%# "."+Eval("TIP_DIS_NOM").ToString().Replace(" ","")+Eval("TIP_DIS_ID") %>'
                                                        data-role="sliderx"
                                                        data-max-value="100"
                                                        data-complete-color="ribbed-green"
                                                        data-on-change="calcDiscapacidad"
                                                        data-position='<%# Eval("DIS_POR") %>'
                                                        data-permanent-hint="true"
                                                        data-show-hint="true"
                                                        data-min-value="0" style="width: 150px" runat="server">
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-control text">
                                                        <asp:TextBox ID="slider_input" value="dcm" runat="server" CssClass='<%# Eval("TIP_DIS_NOM").ToString().Replace(" ","")+Eval("TIP_DIS_ID") %>' />
                                                    </div>
                                                </td>
                                            </tr>
                                        </ItemTemplate>
                                        <FooterTemplate>
                                            </table>
                                        </FooterTemplate>

                                    </asp:Repeater>
                                </td>
                            </tr>


                        </table>
                    </div>

                </div>

                <%--CONTACTO EMERGENCIA--%>

                <div class="step">
                    <table class="backgroundRepeatBanner">
                        <tr>
                            <td colspan="5" bgcolor="#000066">
                                <asp:Label ID="Label28" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                                    Text="INGRESO CONTACTO EMERGENCIA"></asp:Label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label29" runat="server" Text="Nombre"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="emg_nombre" runat="server" data-validate-func="required" data-validate-hint="Nombre contacto emergencia"></asp:TextBox>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label36" runat="server" Text="Telefono fijo"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:TextBox ID="emg_telefono" runat="server" data-validate-hint="Numero telefono contacto emergencia"
                                          data-validate-func="pattern" data-validate-arg="\d{7,10}"
                                        data-inputmask="'mask': '9{7,10}'"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label38" runat="server" Text="Telefono Celular"></asp:Label>
                            </td>
                            <td>

                                <div class="input-control text">
                                    <asp:TextBox ID="emg_celular" runat="server" data-validate-hint="Numero celular contacto emergencia"
                                          data-validate-func="pattern" data-validate-arg="\d{9}"
                                        data-inputmask="'mask': '9{10}'"></asp:TextBox>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:Label ID="Label39" runat="server" Text="Parentesco"></asp:Label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:DropDownList ID="emg_comboParentesco" runat="server" data-validate-func="required" data-validate-hint="Seleccione parentezco contacto emergencia">
                                        <asp:ListItem>Padre</asp:ListItem>
                                        <asp:ListItem>Madre</asp:ListItem>
                                    </asp:DropDownList>
                                </div>

                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
        <script type="text/jscript">
            //datepicker
            var dd = new Date();
            var month = dd.getMonth().toString();
            month = month.length == 1 ? "0" + month : month;
            var day = dd.getDate().toString();
            day = day.length == 1 ? "0" + day : day;
            var datex = dd.getFullYear() - 15 + "-" + month + "-" + day;
            $("[data-role=datepickerx]").each(function () {
                var current = $(this).find("input").val();

                $(this).datepicker({
                    format: "yyyy-mm-dd",
                    locale: "es",
                    maxDate: datex.toString(),
                    preset: current != "" ? current + 'T10:00:01Z' : datex.toString() + 'T10:00:01Z'
                });
            });
            $("#wizardx").wizard({
                startPage: $("#<%=wizardStep.ClientID %>").val(), onPage: function (ix, a) {
                    $("#<%=wizardStep.ClientID %>").val(ix);
                }, onFinish: function (page, wiz) {
                    autosubmit = false;
                    $("#wizardx .submit").trigger("click");
                    autosubmit = true;
                }, buttons: {
                    "next": "true", "prior": "true", "help": false,
                    "cancel": false,
                    "help": false,
                    "finish": { "show": true, "title": "Finalizar y guardar!", "cls": "success", "group": "right" },
                    "prior": { "show": true, "title": "Anterior", "cls": "", "group": "right" },
                    "next": { "show": true, "title": "Siguiente", "cls": "", "group": "right" }
                }, stepperClickable: true
            });

            var stepl = $("#wizardx .step").length;
            $("#wizardx .stepper li").each(function (ix) {
                var titles = "", _titles = ["Datos Funcionario", "Datos Cónyugue", "Ingreso Discapacidades", "Contacto de emergencia"];
                if (stepl == 4) {
                    titles = _titles;
                } else {
                    titles = [_titles[0], _titles[2], _titles[3]];
                }
                var el = $("<span class='step-title'></span>").html(titles[ix]);
                $(this).append(el);
            });



            $('#<%=hasDisapacidad.ClientID %>').click(function () {
                var $this = $(this);
                // $this will contain a reference to the checkbox   
                if ($this.is(':checked')) {
                    $("#discapacidadStep").fadeIn();
                } else {
                    $("#discapacidadStep").fadeOut();
                }
            });
            if ($('#<%=hasDisapacidad.ClientID %>').is(':checked')) {
                $("#discapacidadStep").fadeIn();
            } else {
                $("#discapacidadStep").fadeOut();
            }
            $('#<%=atach.ClientID %>').fadeOut();
            function previewFile() {
                var preview = document.querySelector('#<%=Avatar.ClientID %>');
                var atach = $('#<%=atach.ClientID %>');
                var hasAvatar = $('#<%=hasAvatar.ClientID %>');
                var file = document.querySelector('#<%=avatarUpload.ClientID %>').files[0];
                var reader = new FileReader();

                reader.onloadend = function () {

                    preview.src = reader.result;
                    atach.fadeIn();

                }

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    preview.src = "";
                }
            }


            //discapacidad parentezco
            $('#<%=dis_isPropia.ClientID %>').click(function () {
                var $this = $(this);
                // $this will contain a reference to the checkbox   
                if (!$this.is(':checked')) {
                    $('#<%=dis_comboParentesco.ClientID %>').fadeIn();
                } else {
                    $('#<%=dis_comboParentesco.ClientID %>').fadeOut();
                }
            });
            if (!$('#<%=dis_isPropia.ClientID %>').is(':checked')) {
                $('#<%=dis_comboParentesco.ClientID %>').fadeIn();
            } else {
                $('#<%=dis_comboParentesco.ClientID %>').fadeOut();
            }
            //discapacidad conadis
            $('#<%=dis_hasConadis.ClientID %>').click(function () {
                var $this = $(this);
                // $this will contain a reference to the checkbox   
                if ($this.is(':checked')) {
                    $('#dis_conadisWrap').fadeIn();
                } else {
                    $('#dis_conadisWrap').fadeOut();
                }
            });
            if ($('#<%=dis_hasConadis.ClientID %>').is(':checked')) {
                $('#dis_conadisWrap').fadeIn();
            } else {
                $('#dis_conadisWrap').fadeOut();
            }
            function calcDiscapacidad(value, slide) {
                var slider = $(slide);

                var rang = $(slider.parent().next().find("input"));

                if (value < 25) {
                    rang.val(value + "-poco");
                } else if (value < 50) {
                    rang.val(value + "-bastante");
                } else {
                    rang.val(value + "-execivo");
                }
            }
            $(function () {
                $('div[data-role="sliderx"]').each(function () {
                    var slider = $(this);
                    var rang = $(slider.parent().next().find("input"));

                    if (rang.val() != "dcm") {
                        c = parseInt(rang.val().toString().split('-')[0]);
                    } else {
                        c = slider.data("position");
                    }

                    slider.data("position", c);
                    slider.slider({ position: c });
                    calcDiscapacidad(c, $(this));
                });
            });

        </script>




    </div>



</asp:Content>

