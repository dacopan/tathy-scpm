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
                        <h2 runat="server" class="text-light text-left" id="search_res">No se encontro Puesto</h2>
                    </div>
                </div>
                <div class="row cells8">
                    <div class="cell colspan3">
                        <label>Cargo</label><br />
                        <strong runat="server" id="cargoLabel">Analista</strong>
                    </div>
                    <div class="cell colspan3">
                        <label>Denominacion</label><br />
                        <strong runat="server" id="denominacionLabel">SP1</strong>
                    </div>
                </div>
                <div class="row cells8">
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


            </div>
    </div>
    </div>

    <table class="backgroundRepeatBanner">
        <tr>
            <td colspan="5" bgcolor="#000066">
                <asp:Label ID="Label1" runat="server" BackColor="#000066" ForeColor="White"
                    Text="INGRESO DE SUBROGACION/ ENCARGO "></asp:Label>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label2" runat="server" Text="ID Puesto"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </td>
            <td>
                <asp:Button ID="Button1" runat="server" Text="Buscar" />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label3" runat="server" Text="Relacion Laboral"></asp:Label>
            </td>
            <td>
                <asp:Label ID="Label4" runat="server" Text="Denominacion"></asp:Label>
            </td>
            <td>
                <asp:Label ID="Label5" runat="server" Text="Cargo"></asp:Label>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="height: 23px">
                <asp:Label ID="Label6" runat="server" Style="font-weight: 700"
                    Text="SERVICIOS PROFESIONALES"></asp:Label>
            </td>
            <td style="height: 23px">
                <asp:Label ID="Label7" runat="server" Style="font-weight: 700"
                    Text="SERVICIOS PROFESIONALES 1"></asp:Label>
            </td>
            <td style="height: 23px">
                <asp:Label ID="Label8" runat="server" Style="font-weight: 700"
                    Text="ANALISTA 1"></asp:Label>
            </td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
        </tr>
        <tr>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label9" runat="server" Text="Funcionario en puesto"></asp:Label>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label10" runat="server" Style="font-weight: 700"
                    Text="RUIZ MERA LUIS MARIO"></asp:Label>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label11" runat="server" Text="Tipo"></asp:Label>
                        </td>
                        <td>
                            <asp:DropDownList ID="DropDownList1" runat="server">
                                <asp:ListItem>Subrogación</asp:ListItem>
                                <asp:ListItem>Encargo</asp:ListItem>
                            </asp:DropDownList>
                        </td>
                    </tr>
                </table>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label12" runat="server" Text="Funcionario A"></asp:Label>
                        </td>
                        <td>
                            <asp:Label ID="Label13" runat="server" Style="font-weight: 700"
                                Text="Subrogar/encargar"></asp:Label>
                        </td>
                    </tr>
                </table>
            </td>
            <td>
                <asp:DropDownList ID="DropDownList6" runat="server">
                    <asp:ListItem>CESAR JACOME</asp:ListItem>
                    <asp:ListItem>JUAN CARLOS</asp:ListItem>
                </asp:DropDownList>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td>
                            <asp:Label ID="Label14" runat="server" Text="Fecha Inicio"></asp:Label>
                        </td>
                        <td>
                            <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 23px">
                <table class="backgroundRepeatBanner">
                    <tr>
                        <td style="height: 23px">
                            <asp:Label ID="Label15" runat="server" Text="Fecha Fin"></asp:Label>
                        </td>
                        <td style="height: 23px">
                            <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                </table>
            </td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
            <td style="height: 23px"></td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td>
                <asp:Button ID="Button2" runat="server" Text="GUARDAR" />
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </table>
</asp:Content>

