<%@ Page Title="ingreso de subrrogacion/encargo" Language="C#" MasterPageFile="~/views/MasterPage2.master" AutoEventWireup="true" CodeFile="ingresoSubrroEncargo.aspx.cs" Inherits="ingresoSubrroEncargo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <h1 class="text-light">INGRESO DE SUBROGACION / ENCARGO </h1>
    <div class="panel">
        <div class="header panel-header">
            Buscar Puesto
        </div>
        <div class="content">
            <div class="grid">
                <div class="row cells9 condensed">
                    <div class="cell colspan2">
                        <label><span class="icon mif-filter"></span>&nbsp;Filtro</label>
                        <div class="input-control slect iconic info">
                            <asp:DropDownList ID="comboFiltro" runat="server">
                                <asp:ListItem Text="Puesto ID" Value="2"></asp:ListItem>
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
                        <asp:HiddenField runat="server" Value="dcm" ID="current_puesto_id" />
                        <asp:HiddenField runat="server" Value="dcm" ID="current_tipo_id" />
                        <h2 runat="server" class="text-light text-left" id="search_res">No se encontro Puesto</h2>
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
                        <strong runat="server" id="Strong1">Cristina Mora</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Relacion laboral</label><br />
                        <strong runat="server" id="Strong2">Servicios Profesionales</strong>
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
                            <asp:DropDownList ID="cargo_comboUnidad" runat="server">
                                <asp:ListItem Value="0">Subrogacion</asp:ListItem>
                                <asp:ListItem Value="1">Encargo</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Funcionario</label>
                        <div class="input-control text full-size">
                            <asp:DropDownList ID="cargo_comboArea" runat="server">
                                <asp:ListItem>Darwin Correa</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>

                </div>
                <div class="row cells9 condensed">
                    <div class="cell colspan4">
                        <label>Fecha Ingreso</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="inFechaNac" runat="server"></asp:TextBox>
                            <button class="button"><span class="mif-calendar"></span></button>
                        </div>
                    </div>
                    <div class="cell colspan4">
                        <label>Fecha Salida</label><br />
                        <div class="input-control text" data-role="datepicker" data-format="yyyy-mm-dd">
                            <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
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

            showDialog(id);
        }
    </script>
</asp:Content>
