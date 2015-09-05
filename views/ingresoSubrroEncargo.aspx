<%@ Page Title="ingreso de subrrogacion/encargo" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoSubrroEncargo.aspx.cs" Inherits="ingresoSubrroEncargo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1 class="text-light">INGRESO DE SUBROGACION / ENCARGO </h1>
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
                    <div class="cell colspan9">

                        <h1 id="cargo_empty" class="text-center text-light" runat="server">Ningún cargo en esta área</h1>
                        <asp:Repeater ID="Repeater1" runat="server" OnItemCommand="Repeater1_ItemCommand">
                            <HeaderTemplate>

                                <br />
                                <table class="backgroundRepeatBanner table striped hovered cell-hovered border bordered">
                                    <thead>
                                        <th>ID puesto</th>
                                        <th>Nombre del cargo</th>
                                        <th>Denominacion</th>
                                        <th>Acción</th>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td>
                                        <asp:Label runat="server"><%# Eval("CAR_ID") %></asp:Label>
                                    </td>
                                    <td>
                                        <asp:HiddenField Value='<%# Eval("CAR_ID") %>' ID="car_id" runat="server" />
                                        <div class="input-control text full-size info">
                                            <asp:TextBox ID="inCargo" runat="server" Text='<%# Eval("CAR_NOM") %>' ReadOnly="true" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input-control text full-size info">
                                            <asp:TextBox ID="cargo_denominacion" Text='<%# Eval("SCPM_DENOMINACIONES.DEN_NOM") %>' runat="server" ReadOnly="true" />
                                        </div>
                                    </td>
                                    <td>
                                         <asp:Button runat="server" CssClass="button success" CommandArgument='<%# Eval("CAR_ID") %>' Text="Seleccionar cargo" />
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
   
     <div class="panel">
        <div class="header panel-header">
            Puesto seleccionado
        </div>
        <div class="content">
            <div class="grid">
                
                <div class="row cells8">
                    <div class="cell colspan8">
                        <asp:HiddenField runat="server" Value="dcm" ID="current_puesto_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="current_tipo_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="current_persona_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="current_subroga_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="sub_hist_id" />

                        <h2 runat="server" class="text-light text-left" id="search_res">No se seleccionó Puesto</h2>
                    </div>
                </div>
                <div class="row cells8" runat="server" id="unidadWrap">
                    <div class="cell colspan3">
                        <label>Unidad</label><br />
                        <strong runat="server" id="unidadLabel">Unidad 33.1</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Area</label><br />
                        <strong runat="server" id="areaLabel">area 1</strong>
                    </div>
                </div>

                <div class="row cells8" runat="server" id="cargoWrap">
                    <div class="cell colspan3">
                        <label>Cargo</label><br />
                        <strong runat="server" id="cargoLabel">Analista</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Denominacion</label><br />
                        <strong runat="server" id="denominacionLabel">SP1</strong>
                    </div>
                </div>
                <div class="row cells8" runat="server" id="personaWrap">
                    <div class="cell colspan3">
                        <label>Funcionario en puesto</label><br />
                        <strong runat="server" id="personaLabel">Cristina Mora</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Relacion laboral</label><br />
                        <strong runat="server" id="relLabLabel">Servicios Profesionales</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Encargado / Subrogado</label><br />
                        <strong runat="server" id="subrogaPerLabel">Darwin Correa</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br />
    <br />
    <hr class="thin" />
    <br />
    <br />

    <div class="panel">
        <div class="header panel-header">Subrogación / Encargo</div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Tipo</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="combo_tipo" runat="server" AutoPostBack="true">
                                <asp:ListItem Value="1">Subrogacion</asp:ListItem>
                                <asp:ListItem Value="2">Encargo</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Funcionario</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="comboPersona" runat="server" AutoPostBack="true">
                                <asp:ListItem>Darwin Correa</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                </div>
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Fecha Ingreso</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="inFechaStart" runat="server"></asp:TextBox>
                            <button class="button"><span class="mif-calendar"></span></button>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Fecha Salida</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="inFechaEnd" runat="server"></asp:TextBox>
                            <button class="button"><span class="mif-calendar"></span></button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <button class="button success text-shadow margin5R" onclick="showDialog2('#previewAV');return false;"><span class="mif-profile margin-double"></span>&nbsp;Guardar</button>
                <br />
                <br />

            </div>
        </div>
    </div>

    <br />
    <br />
    <hr class="thin" />
    <br />
    <br />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div data-role="dialog" id="previewAV" data-windows-style="true" data-overlay="true" data-overlay-color="op-dark" class="window-style">
        <div class="gridx">
            <div class="row">
                <div class="cell" style="margin: auto; float: none;">
                    <div class="container page-content">
                        <h1 class="text-light"><span class="mif-cabinet"></span>Actualizar cargo</h1>
                        <hr class="thin" />
                        <br />
                        <div class="row-fluid body-preview" id="dialogContent">
                            Seguro deseaa actualizar esto?
                        </div>
                        <br />
                        <br />
                        <div class="form-actions page-content align-right">
                            <button type="button" class="button primary" onclick="ocultDialog('#previewAV')">Cancelar</button>
                            <asp:Button CssClass="button success text-shadow" runat="server" ID="saveAll" Text="Guardar" OnClick="saveAll_Click" />
                        </div>
                        <br />
                        <br />
                    </div>

                </div>
            </div>
        </div>

    </div>
    <script type="text/javascript">
        function showDialog2(id) {
            var content = $("#dialogContent");
            var comboPersona = $('#<%= comboPersona.ClientID %>');
            var comboTipo = $('#<%= combo_tipo.ClientID %>');
            var saveBut = $('#<%= saveAll.ClientID %>');
            var current_puesto_id = $('#<%= current_puesto_id.ClientID %>');
            var current_tipo_id = $('#<%= current_tipo_id.ClientID %>');
            var current_persona_id = $('#<%= current_persona_id.ClientID %>');
            var current_subroga_id = $('#<%= current_subroga_id.ClientID %>');

            if (current_puesto_id.val() == "dcm") {
                content.html("Seleccione un cargo al cual subrogar / encargar.");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }

            if (comboPersona.prop('disabled') || comboPersona.text() == "--Ninguno--") {
                content.html("Funcionarios no disponibles");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }

            if (current_tipo_id.val() != "dcm" && current_tipo_id.val() != comboTipo.val()) {
                content.html("Puesto ya está subrogado encargado");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }


            content.html("Seguro desea subrogar/encargar este puesto?.");
            saveBut.prop('disabled', false);
            showDialog(id);


        }
    </script>
</asp:Content>
