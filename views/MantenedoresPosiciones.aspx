<%@ Page Title="mantenedor de posiciones" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="MantenedoresPosiciones.aspx.cs" Inherits="MantenedoresPosiciones" %>

<%@ Register Assembly="System.Web.Entity, Version=3.5.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" Namespace="System.Web.UI.WebControls" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="MANTENEDORES DELUGAR DE TRABAJO"></asp:Label>
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
                <asp:Label ID="Label3" runat="server" Text="UNIDAD"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="ComboUnidad" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboUnidad_SelectedIndexChanged">
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
                            <asp:TextBox ID="inUnidad" runat="server"></asp:TextBox>
                        </td>
                        <td style="height: 23px">
                            <asp:CheckBox ID="UnidadEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="AddUnidad" runat="server" Text="Añadir" OnClick="AddUnidad_Click" />
                <asp:Button ID="editUnidad" runat="server" Text="Modificar" OnClick="editUnidad_Click" />
            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label4" runat="server" Text="AREA"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="ComboArea" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboArea_SelectedIndexChanged">
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
                            <asp:TextBox ID="inArea" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="AreaEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="AddArea" runat="server" Text="Añadir" OnClick="AddArea_Click" />
                <asp:Button ID="editArea" runat="server" Text="Modificar" OnClick="editArea_Click" />
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4" bgcolor="#000066">
                <asp:Label ID="Label35" runat="server" BackColor="#000066" ForeColor="White" CssClass="panel-header"
                    Text="PUESTO TRABAJO"></asp:Label>
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
                <asp:Label ID="Label36" runat="server" Text="Relacion Laboral"></asp:Label>
            </td>
            <td style="height: 30px">
                <asp:DropDownList ID="comboRelacionLab" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboRelacionLab_SelectedIndexChanged">
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
                            <asp:TextBox ID="inRelacionLab" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="relacionLabEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 30px">
                <asp:Button ID="addRelacionLab" runat="server" Text="Añadir" OnClick="addRelacionLab_Click" />
                <asp:Button ID="editRelacionLab" runat="server" Text="Modificar" OnClick="editRelacionLab_Click" />

            </td>
        </tr>
        <tr>
            <td style="height: 26px">
                <asp:Label ID="Label38" runat="server" Text="Denominacion"></asp:Label>
            </td>
            <td style="height: 26px">
                <asp:DropDownList ID="ComboDenominacion" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboDenominacion_SelectedIndexChanged">
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
                            <asp:TextBox ID="InDenominacion" runat="server"></asp:TextBox>
                        </td>
                        <td>
                            <asp:CheckBox ID="denominacionEnabled" runat="server" />
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 26px">
                <asp:Button ID="addDenominacion" runat="server" Text="Añadir" OnClick="addDenominacion_Click" />
                <asp:Button ID="editDenominacion" runat="server" Text="Modificar" OnClick="editDenominacion_Click" />
            </td>
        </tr>

    </table>
    <br />
    <br />
    <hr class="thin" />
    <br />
    <br />
    <div class="panel">
        <div class="header panel-header">
            Cargos por areas
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Unidad</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="cargo_comboUnidad" runat="server" AutoPostBack="True" OnSelectedIndexChanged="cargo_comboUnidad_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Area</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="cargo_comboArea" runat="server" AutoPostBack="True" OnSelectedIndexChanged="cargo_comboArea_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                </div>
                <div class="row cells9">

                    <button class="button success text-shadow" onclick="showDialog('#previewAV');return false;"><span class="mif-profile margin-double"></span>Añadir Cargo</button>

                </div>
                <div class="row cells9">
                    <div class="cell colspan9">

                        <h1 id="cargo_empty" class="text-center text-light" runat="server">Ningún cargo en esta área</h1>
                        <asp:Repeater ID="Repeater1" runat="server">
                            <HeaderTemplate>

                                <br />
                                <table class="backgroundRepeatBanner table striped hovered cell-hovered border bordered">
                                    <thead>
                                        <th>Nombre del cargo</th>
                                        <th>Denominacion</th>
                                        <th>Estado</th>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td>
                                        <asp:HiddenField Value='<%# Eval("CAR_ID") %>' ID="dis_tip_id" runat="server" />
                                        <div class="input-control text full-size info">
                                            <asp:TextBox ID="inCargo" runat="server" Text='<%# Eval("CAR_NOM") %>' />
                                        </div>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="cargo_denominacion" Text="dcm" runat="server" CssClass='<%# "no-visible dcm" +Eval("CAR_ID").ToString().Replace(" ","") %>' />
                                        <div class="input-control text full-size info" data-role="select-denominacion"
                                            data-targetx='<%# ".dcm" +Eval("CAR_ID").ToString().Replace(" ","") %>'
                                            data-has-init-val="true"
                                            data-init-val="<%# Eval("SCPM_DENOMINACIONES.DEN_ID") %>">
                                        </div>


                                    </td>
                                    <td>
                                        <label class="switch-original">
                                            <asp:CheckBox ID="cargo_estado" runat="server" Checked='<%# bool.Parse(Eval("CAR_EST").ToString()) %>' />
                                            <span class="check"></span>
                                        </label>
                                    </td>
                                </tr>
                            </ItemTemplate>
                            <FooterTemplate>
                                </table>
                                <br />
                                <br />
                                <br />
                            </FooterTemplate>

                        </asp:Repeater>

                    </div>

                </div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div data-role="dialog" id="previewAV" data-windows-style="true" data-overlay="true" data-overlay-color="op-dark" class="window-style">
        <div class="gridx">
            <div class="row">
                <div class="cell" style="margin: auto; float: none;">
                    <div class="container page-content">
                        <h1 class="text-light"><span class="mif-cabinet"></span>Añadir cargo</h1>
                        <hr class="thin" />
                        <br />
                        <div class="row-fluid body-preview">
                            <label>Nombre del Cargo</label>
                            <div class="input-control text">
                                <asp:TextBox ID="inCargo" runat="server" />
                            </div>
                            <br />
                            <br />
                            <label>Nombre del Cargo</label>
                            <asp:HiddenField ID="cargo_denominacion" runat="server" Value="dcm" />
                            <div class="input-control select" data-role="select-denominacion" data-targetx="#<%=cargo_denominacion.ClientID %>">
                            </div>

                        </div>
                        <br />
                        <br />
                        <div class="form-actions page-content align-right">
                            <button type="button" class="button primary" onclick="ocultDialog('#previewAV')">Cancelar</button>
                            <asp:Button runat="server" ID="addCargo" Text="Guardar" CssClass="button success" OnClick="addCargo_Click1" />
                        </div>
                        <br />
                        <br />
                    </div>

                </div>
            </div>
        </div>

    </div>
    <script type="text/javascript">
        $("[data-role=select-denominacion]").each(function () {
            var r = $(this);
            var deno = $("#<%=ComboDenominacion.ClientID %>").clone();
            var tar = $(r.data("targetx"));

            deno.attr("onchange", "");

            if (r.data("has-init-val")) {
                if (tar.val() != "dcm") {
                    deno.val(tar.val());
                } else {
                    tar.val(r.data("init-val"));
                    deno.val(r.data("init-val"));
                }
            } else {
                tar.val(deno.val());
            }
            r.html(deno);
            deno.change(function () {
                //var r = $(this);

                var tar = $(r.data("targetx"));
                tar.val($(this).val());
                //console.log(tar.val());
            });
        });
    </script>
</asp:Content>
