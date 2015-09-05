<%@ Page Title="datos basicos" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="EditPersona.aspx.cs" Inherits="EditPersona" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <div>
        <div class="wizard" data-locale="es" id="wizardx">
            <asp:hiddenfield value="1" runat="server" id="wizardStep" />
            <asp:hiddenfield value="0" runat="server" id="hasAvatar" />
            <asp:button text="submit" onclick="addPersona_Click" runat="server" cssclass="no-visible submit" />
            <div class="steps">
                <div class="step" runat="server">
                    <table class="style1" align="center">
                        <tr>
                            <td colspan="5" bgcolor="#000066">
                                <asp:label id="Label25" runat="server" backcolor="#000066" forecolor="White" cssclass="panel-header" 
                                    text="INGRESO DATOS FUNCIONARIO"></asp:label>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label1" runat="server" text="Apellido Paterno"></asp:label>
                            </td> 
                            <td class="style24">
                                <div class="input-control text">
                                    <asp:textbox id="inApellido1" runat="server" data-validate-func="required" data-validate-hint="apellido paterno requerido"></asp:textbox>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label12" runat="server" text="Apellido Materno"></asp:label>
                            </td>
                            <td class="style8">
                                <div class="input-control text">
                                    <asp:textbox id="inApellido2" runat="server" data-validate-func="required" data-validate-hint="apellido materno requerido"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22" style="height: 26px">
                                <asp:label id="Label2" runat="server" text="Nombre"></asp:label>
                            </td>
                            <td class="style24" style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="inNombre1" runat="server" data-validate-func="required" data-validate-hint="Primer Nombre requerido"></asp:textbox>
                                </div>
                            </td>
                            <td class="style15" style="height: 26px"></td>
                            <td class="style7" style="height: 26px">
                                <asp:label id="Label13" runat="server" text="2do Nombre"></asp:label>
                            </td>
                            <td class="style8" style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="inNombre2" runat="server" data-validate-func="required" data-validate-hint="Segundo Nombre requerido"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label3" runat="server" text="Nacionalidad"></asp:label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboPais" runat="server" data-validate-func="required" data-validate-hint="Seleccione pais">
                                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                                        <asp:ListItem>Peruano</asp:ListItem>
                                        <asp:ListItem></asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label14" runat="server" text="Sexo"></asp:label>
                            </td>
                            <td class="style8">
                                <label class="input-control checkbox">
                                    <asp:radiobutton id="sexo" runat="server" text="" groupname="sexo" checked="true" />
                                    <span class="check"></span>
                                    <span class="caption">Masculino</span>
                                </label>
                                <label class="input-control checkbox">
                                    <asp:radiobutton id="RadioButton6" runat="server" text="" groupname="sexo" />
                                    <span class="check"></span>
                                    <span class="caption">Femenino</span>
                                </label>


                            </td>
                        </tr>
                        <tr>
                            <td class="style23">
                                <asp:label id="Label4" runat="server" text="Tipo de Documento"></asp:label>
                            </td>



                            <td>
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboDocumento" runat="server" data-validate-func="required" data-validate-hint="Seleccione Tipo documento">
                                        <asp:ListItem>Cedula</asp:ListItem>
                                        <asp:ListItem>Pasaporte</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style16">&nbsp;</td>
                            <td>
                                <asp:label id="Label18" runat="server" text="No"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="inDocumento" runat="server" data-validate-func="required" data-validate-hint="Numero documento inválido"></asp:textbox>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td class="style13">Raza</td>
                            <td class="style14">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboRaza" runat="server" data-validate-func="required" data-validate-hint="Seleccione Raza">
                                        <asp:ListItem>Mestizo</asp:ListItem>
                                        <asp:ListItem>Mulato</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style16">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label16" runat="server" text="Estado Civil"></asp:label>
                            </td>
                            <td class="style8">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboEstadoCivil" runat="server" autopostback="True" onselectedindexchanged="comboEstadoCivil_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Seleccione estado civil">
                                        <asp:ListItem>Soltero</asp:ListItem>
                                        <asp:ListItem>Casado</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label5" runat="server" text="Libreta Militar"></asp:label>
                            </td>
                            <td class="style24">
                                <table class="style17">
                                    <tr>
                                        <td class="style21" style="width: 4px">
                                            <div class="input-control text">
                                                <asp:textbox id="inMilitar" runat="server" data-validate-func="required" data-validate-hint="ingrese libreta militar"></asp:textbox>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label15" runat="server" text="Fecha Nacimiento"></asp:label>
                            </td>
                            <td class="style8">
                                <table class="style17">
                                    <tr>
                                        <td>
                                            <div class="input-control text" data-role="datepickerx" data-format="yyyy-mm-dd">
                                                <asp:textbox id="inFechaNac" runat="server" data-validate-hint="Funcionario fecha nacimiento"></asp:textbox>
                                                <button class="button"><span class="mif-calendar"></span></button>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>


                        <tr>
                            <td class="style22">
                                <asp:label id="Label7" runat="server" text="Tipo de Sangre"></asp:label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboSangre" runat="server" data-validate-func="required" data-validate-hint="Seleccione Tipo de sangre">
                                        <asp:ListItem>--Seleccionar--</asp:ListItem>
                                        <asp:ListItem>O+</asp:ListItem>
                                        <asp:ListItem>A-</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label17" runat="server" text="Telefono Celular"></asp:label>
                            </td>
                            <td class="style8">
                                <div class="input-control text">
                                    <asp:textbox id="inCelular" runat="server" data-validate-func="celular" data-validate-hint="Telefono celular incorrecto"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label8" runat="server" text="Telefono Fijo"></asp:label>
                            </td>
                            <td class="style24">
                                <div class="input-control text">
                                    <asp:textbox id="inTelefono" runat="server" data-validate-func="telefono" data-validate-hint="Telefono fijo incorrecto"></asp:textbox>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7" colspan="2" rowspan="5">
                                <div class="image-container bordered image-format-hd handing" style="max-width: 150px">
                                    <div class="frame">
                                        <asp:image id="Avatar" runat="server" imageurl="~/Uploads/avatar.png" />
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td class="style23">
                                <asp:label id="Label9" runat="server" text="Correo Personal"></asp:label>
                            </td>
                            <td class="style25">
                                <div class="input-control text">
                                    <asp:textbox id="inEmail" runat="server" data-validate-func="email" data-validate-hint="Email incorrecto"></asp:textbox>
                                </div>
                            </td>
                            <td class="style16"></td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label10" runat="server" text="Tarjeta"></asp:label>
                            </td>
                            <td class="style24">
                                <table class="style17">
                                    <tr>
                                        <td>
                                            <label class="input-control checkbox">
                                                <asp:radiobutton id="tarjeta" runat="server" text="" groupname="tarjeta" checked="true" />
                                                <span class="check"></span>
                                                <span class="caption">Si</span>
                                            </label>
                                            <label class="input-control checkbox">
                                                <asp:radiobutton id="RadioButton10" runat="server" text="" groupname="tarjeta" />
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
                                <asp:label id="Label11" runat="server" text="Foto"></asp:label>
                            </td>
                            <td class="style24">
                                <div class="input-control file" data-role="input">
                                    <input id="avatarUpload" type="file" name="file" onchange="previewFile()" runat="server" accept="image/x-png, image/jpeg" />
                                    <button class="button"><span class="mif-camera"></span></button>
                                </div>
                            </td>
                            <td class="style15">
                                <asp:button runat="server" id="atach" text="Subir" onclick="atach_Click" />
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">&nbsp;</td>
                            <td class="style24">&nbsp;</td>
                            <td class="style15">&nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style22" colspan="5" bgcolor="#000066">

                                <asp:label id="Label19" runat="server" backcolor="#000066" forecolor="White" cssclass="panel-header"
                                    text="INGRESO LOCALIZACION DOMICILIO FUNCIONARIO"></asp:label>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22" style="height: 26px">
                                <asp:label id="Label20" runat="server" text="Provincia"></asp:label>
                            </td>
                            <td class="style24" style="height: 26px">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboProvincia" runat="server" autopostback="True" onselectedindexchanged="comboProvincia_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Provincia incorrecta">
                                        <asp:ListItem>Pichincha</asp:ListItem>
                                        <asp:ListItem>Cotopaxi</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style15" style="height: 26px"></td>
                            <td class="style7" style="height: 26px">
                                <asp:label id="Label22" runat="server" text="Canton"></asp:label>
                            </td>
                            <td class="style8" style="height: 26px">
                                <div class="input-control select">
                                    <asp:dropdownlist id="ComboCanton" runat="server" autopostback="True" onselectedindexchanged="ComboCanton_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Canton incorrecto">
                                        <asp:ListItem>Quito</asp:ListItem>
                                        <asp:ListItem>Rumiñahui</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label21" runat="server" text="Parroquia"></asp:label>
                            </td>
                            <td class="style24">
                                <div class="input-control select">
                                    <asp:dropdownlist id="ComboParroquia" runat="server" autopostback="True" onselectedindexchanged="ComboParroquia_SelectedIndexChanged"
                                        data-validate-func="required" data-validate-hint="Parroquia incorrecto">
                                        <asp:ListItem>Chillogallo</asp:ListItem>
                                        <asp:ListItem>La Ecuatoriana</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td class="style15">&nbsp;</td>
                            <td class="style7">
                                <asp:label id="Label23" runat="server" text="Sector"></asp:label>
                            </td>
                            <td class="style8">
                                <div class="input-control select">
                                    <asp:dropdownlist id="comboSector" runat="server"
                                        data-validate-func="required" data-validate-hint="Sector incorrecto">
                                        <asp:ListItem>San Luis</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="style22">
                                <asp:label id="Label24" runat="server" text="Direccion"></asp:label>
                            </td>
                            <td class="style15">
                                <div class="input-control text">
                                    <asp:textbox id="inDireccion" runat="server" data-validate-func="required" data-validate-hint="Dirección incorrecto"></asp:textbox>
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
                                <asp:label id="Label6" runat="server" backcolor="#000066" forecolor="White" cssclass="panel-header"
                                    text="INGRESO CONYUGE"></asp:label>
                            </td>
                        </tr>

                        <tr>
                            <td style="height: 26px">Apellido Paterno</td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="con_apellido1" runat="server" data-validate-func="required" data-validate-hint="Apellido paterno cónyugue"></asp:textbox>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">
                                <asp:label id="Label30" runat="server" text="Apellido Materno"></asp:label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="con_apellido2" runat="server" data-validate-func="required" data-validate-hint="Apellido materno cónyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label31" runat="server" text="Nombre:"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_nombre1" runat="server" data-validate-func="required" data-validate-hint="Primer nombre cónyugue"></asp:textbox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:label id="Label32" runat="server" text="2do Nombre"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_nombre2" runat="server" data-validate-func="required" data-validate-hint="Segundo Nombre cónyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="height: 26px">
                                <asp:label id="Label33" runat="server" text="Nacionalidad"></asp:label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control select">
                                    <asp:dropdownlist id="con_pais" runat="server" data-validate-func="required" data-validate-hint="Seleccione país conyugue">
                                        <asp:ListItem>Ecuatoriano</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">&nbsp;</td>
                            <td style="height: 26px"></td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label34" runat="server" text="Tipo Documento"></asp:label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:dropdownlist id="con_comboDocumento" runat="server" data-validate-func="required" data-validate-hint="Seleccione tipo documento conyugue">
                                        <asp:ListItem>Cedula</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:label id="Label35" runat="server" text="No"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_documento" runat="server" data-validate-func="required" data-validate-hint="Número documento cónyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label37" runat="server" text="Fecha de Nacimiento"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text" data-role="datepickerx" data-format="yyyy-mm-dd">
                                    <asp:textbox id="con_fechaNacimiento" runat="server" data-validate-hint="Conyugue fecha nacimiento"></asp:textbox>
                                    <button class="button"><span class="mif-calendar"></span></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="height: 26px">
                                <asp:label runat="server" text="Telefono Fijo"></asp:label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="con_telefono" runat="server" data-validate-func="telefono" data-validate-hint="Telefono fijo cónyugue"></asp:textbox>
                                </div>
                            </td>
                            <td style="height: 26px"></td>
                            <td style="height: 26px">
                                <asp:label id="Label42" runat="server" text="Celular"></asp:label>
                            </td>
                            <td style="height: 26px">
                                <div class="input-control text">
                                    <asp:textbox id="con_celular" runat="server" data-validate-func="celular" data-validate-hint="Telefono celular cónyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label43" runat="server" text="Correo Personal"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_Email" runat="server" data-validate-func="email" data-validate-hint="Mail conyugue"></asp:textbox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:label id="Label44" runat="server" text="Profesion"></asp:label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:dropdownlist id="con_comboProfesion" runat="server" data-validate-func="required" data-validate-hint="Seleccione profesion cónyugue">
                                        <asp:ListItem>Chofer</asp:ListItem>
                                        <asp:ListItem>Cajera</asp:ListItem>
                                    </asp:dropdownlist>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label45" runat="server" text="Trabaja:"></asp:label>
                            </td>
                            <td>
                                <table class="backgroundRepeatBanner">
                                    <tr>
                                        <td>
                                            <label class="input-control checkbox">
                                                <asp:radiobutton id="con_trabaja" runat="server" text="" groupname="abc1" checked="true" autopostback="true" oncheckedchanged="con_trabaja_CheckedChanged" />
                                                <span class="check"></span>
                                                <span class="caption">Si</span>
                                            </label>
                                            <label class="input-control checkbox">
                                                <asp:radiobutton id="RadioButton2" runat="server" text="" groupname="abc1" autopostback="true" oncheckedchanged="con_trabaja_CheckedChanged" />
                                                <span class="check"></span>
                                                <span class="caption">No</span>
                                            </label>


                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:label id="con_lugarTrabW" runat="server" text="Lugar de trabajo"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_lugarTrab" runat="server" data-validate-func="required" data-validate-hint="Lugar trabajo Conyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="con_empresaW" runat="server" text="Nombre Empresa"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_empresa" runat="server" data-validate-func="required" data-validate-hint="Empresa Conyugue"></asp:textbox>
                                </div>
                            </td>
                            <td>&nbsp;</td>
                            <td>
                                <asp:label id="con_telfTrabajoW" runat="server" text="Telefono Trabajo"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="con_telfTrabajo" runat="server" data-validate-func="digits" data-validate-hint="Telefono trabajo Conyugue"></asp:textbox>
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>

                <div class="step">
                    <label class="input-control checkbox">
                        <asp:checkbox id="hasDisapacidad" runat="server" />
                        <span class="check"></span>
                        <span class="caption">Tiene alguna discapacidad?</span>
                    </label>
                    <div id="discapacidadStep">
                        <table class="backgroundRepeatBanner">
                            <tr>
                                <td colspan="5" bgcolor="#000066">
                                    <asp:label id="Label26" runat="server" backcolor="#000066" forecolor="White" cssclass="panel-header"
                                        text="INGRESO DISCAPACIDAD"></asp:label>
                                </td>
                            </tr>

                            <tr>
                                <td style="height: 23px">
                                    <table class="backgroundRepeatBanner">
                                        <tr>
                                            <td>
                                                <label class="input-control checkbox">
                                                    <asp:checkbox id="dis_isPropia" runat="server" checked="true" />
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
                                    <asp:label id="Label27" runat="server" text="Parentesco"></asp:label>
                                    <asp:dropdownlist id="dis_comboParentesco" runat="server">
                                        <asp:ListItem>Padre</asp:ListItem>
                                        <asp:ListItem>Madre</asp:ListItem>
                                    </asp:dropdownlist>
                                </td>

                            </tr>
                            <tr>
                                <td style="height: 23px">
                                    <table class="backgroundRepeatBanner">
                                        <tr>
                                            <td>

                                                <label class="input-control checkbox">
                                                    <asp:checkbox id="dis_hasConadis" runat="server" checked="true" />
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
                                        <asp:textbox id="dis_conadis" runat="server"></asp:textbox>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <asp:repeater id="Repeater1" runat="server">
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

                <div class="step">
                    <table class="backgroundRepeatBanner">
                        <tr>
                            <td colspan="5" bgcolor="#000066">
                                <asp:label id="Label28" runat="server" backcolor="#000066" forecolor="White" cssclass="panel-header"
                                    text="INGRESO CONTACTO EMERGENCIA"></asp:label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label29" runat="server" text="Nombre"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="emg_nombre" runat="server" data-validate-func="required" data-validate-hint="Nombre contacto emergencia"></asp:textbox>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label36" runat="server" text="Telefono fijo"></asp:label>
                            </td>
                            <td>
                                <div class="input-control text">
                                    <asp:textbox id="emg_telefono" runat="server" data-validate-func="telefono" data-validate-hint="Numero telefono contacto emergencia"></asp:textbox>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label38" runat="server" text="Telefono Celular"></asp:label>
                            </td>
                            <td>

                                <div class="input-control text">
                                    <asp:textbox id="emg_celular" runat="server" data-validate-func="celular" data-validate-hint="Numero celular contacto emergencia"></asp:textbox>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <asp:label id="Label39" runat="server" text="Parentesco"></asp:label>
                            </td>
                            <td>
                                <div class="input-control select">
                                    <asp:dropdownlist id="emg_comboParentesco" runat="server" data-validate-func="required" data-validate-hint="Seleccione parentezco contacto emergencia">
                                        <asp:ListItem>Padre</asp:ListItem>
                                        <asp:ListItem>Madre</asp:ListItem>
                                    </asp:dropdownlist>
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

