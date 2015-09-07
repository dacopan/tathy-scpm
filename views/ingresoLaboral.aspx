<%@ Page Title="ingresoLabora" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoLaboral.aspx.cs" Inherits="ingresoLaboral" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="panel">
        <div class="header panel-header">
            Buscar Funcionario
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan2">
                        <label><span class="icon mif-filter"></span>&nbsp;Filtro</label>
                        <div class="input-control slect iconic info">
                            <asp:DropDownList ID="comboFiltro" runat="server">
                                <asp:ListItem Text="--Seleccionar--" Value="999"></asp:ListItem>
                                <asp:ListItem Text="No. de Identificación" Value="0"></asp:ListItem>
                                <asp:ListItem Text="Nombre" Value="1"></asp:ListItem>
                                <asp:ListItem Text="ID Institucional" Value="2"></asp:ListItem>
                            </asp:DropDownList>
                        </div>

                    </div>

                    <div class="cell colspan4">
                        <div class="input-control text full-size info">
                            <asp:TextBox runat="server" ID="inFiltro" />
                            <button class="button" onclick="applyFilter()"><span class="mif-search"></span></button>
                        </div>
                        <asp:Button ID="filtroBut" runat="server" Text="Button" CssClass="no-visible" OnClick="filtroBut_Click" />
                        <script type="text/javascript">
                            function applyFilter() {
                                setTimeout(function () {

                                    $('#<%=filtroBut.ClientID %>').trigger("click");
                                }, 25);
                                return false;
                            }

                        </script>
                    </div>

                </div>
                <div class="row cells8">
                    <div class="cell colspan8">
                        <h2 runat="server" class="text-light text-left" id="search_res">No se encontro funcionario</h2>
                        <asp:Repeater ID="Repeater1" runat="server" OnItemCommand="Repeater1_ItemCommand">
                            <HeaderTemplate>
                                <table class="dataTable striped border bordered" data-role="datatable" data-searching="true">
                                    <thead>
                                        <tr>
                                            <th>No. de Identificación</th>
                                            <th>Nombre</th>
                                            <th>ID Institucional</th>
                                            <th>Estado</th>
                                            <th>Acción</th>
                                        </tr>
                                    </thead>
                            </HeaderTemplate>
                            <ItemTemplate>
                                <tr>
                                    <td><%# Eval("PER_NUM_DOC") %></td>
                                    <td><%# Eval("PER_APE_PAT").ToString()+ " " +Eval("PER_APE_MAT").ToString()+ " " +Eval("PER_NOM1").ToString()+ " " +Eval("PER_NOM2").ToString() %></td>
                                    <td><%# Eval("PER_ID") %></td>
                                    <td>
                                        <label class="switch-original">
                                            <asp:CheckBox ID="xxx" runat="server" Checked='<%# bool.Parse( Eval("PER_EST").ToString()) %>' />
                                            <span class="check"></span>
                                        </label>
                                    </td>
                                    <td>

                                        <asp:Button runat="server" CssClass="button success" CommandArgument='<%# Eval("PER_ID") %>' Text="Editar Datos laborales" Enabled='<%# bool.Parse( Eval("PER_EST").ToString()) %>' />
                                    </td>
                                </tr>
                            </ItemTemplate>
                            <FooterTemplate>
                                <tfoot>
                                    <tr>
                                        <th>No. de Identificación</th>
                                        <th>Nombre</th>
                                        <th>ID Institucional</th>
                                        <th>Estado</th>
                                        <th>Acción</th>
                                    </tr>
                                </tfoot>
                                </table>
                            </FooterTemplate>
                        </asp:Repeater>


                    </div>
                </div>


            </div>
        </div>
    </div>
    <div class="panel" id="puestoActualWrap" runat="server">
        <div class="header panel-header">
            Puesto Actual
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells8">
                    <div class="cell colspan8">
                        <h2 runat="server" class="text-light text-left" id="search_res2">Ningun funcionario seleccionado</h2>
                        <h5 runat="server" class="text-left" id="puestoActual">Puesto Actual: ninguno</h5>
                        <asp:HiddenField runat="server" Value="dcm" ID="current_cargo_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="current_persona_id" />
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
        <div class="header panel-header">
            Lugar de trabajo
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Unidad</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="comboUnidad" runat="server" AutoPostBack="True" OnSelectedIndexChanged="comboUnidad_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Area</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="ComboArea" runat="server" AutoPostBack="True" OnSelectedIndexChanged="ComboArea_SelectedIndexChanged">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <br />
    <br />

    <div class="panel">
        <div class="header panel-header">
            Puesto de Trabajo
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Relación Laboral</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="comboRelacionLab" runat="server" AutoPostBack="True">
                                <asp:ListItem>COORDINACION GENERAL ADMINISTRATIVA FINANCIERA</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                    <div class="cell colspan4">
                        <label>Cargo</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="comboCargo" runat="server" AutoPostBack="True">
                                <asp:ListItem>Analista 1</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                </div>

                <div class="row cells9 condensed">
                    <div class="cell colspan2">
                        <label>Fecha Ingreso</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="inFechaStart" runat="server"></asp:TextBox>
                            <button class="button"><span class="mif-calendar"></span></button>
                        </div>
                    </div>
                    <div class="cell colspan2">
                        <label>Fecha Salida</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="inFechaEnd" runat="server"></asp:TextBox>
                            <button class="button"><span class="mif-calendar"></span></button>
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
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
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
            var comboCargo = $('#<%= comboCargo.ClientID %>');
            var current_cargo_id = $('#<%= current_cargo_id.ClientID %>');
            var current_persona_id = $('#<%= current_persona_id.ClientID %>');

            var saveBut = $('#<%= saveAll.ClientID %>');

            if (current_persona_id.val() == "dcm") {
                content.html("Seleccione un funcionario al cual añadir cargo.");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }

            if (comboCargo.prop('disabled')) {
                content.html("Cargo no disponible");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }

            if (current_cargo_id.val() != "dcm" && comboCargo.val() != current_cargo_id.val()) {
                content.html("EL funcionario ya posee un cargo activo, no lo puede colocar en otro cargo, sin antes dar por terminado el anterior.");
                saveBut.prop('disabled', true);
                showDialog(id);
                return;
            }

            if (current_cargo_id.val() == "dcm") {
                content.html("Seguro desea colocar al funcionario en este cargo?.");
                saveBut.prop('disabled', false);
                showDialog(id);
                return;
            }

            content.html("Seguro desea actualizar los datos del cargo actual?.");
            saveBut.prop('disabled', false);
            showDialog(id);
        }
    </script>
</asp:Content>


