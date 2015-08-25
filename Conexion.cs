using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
//using System.Web.Security;
//using System.Web.UI;
//using System.Web.UI.HtmlControls;
//using System.Web.UI.WebControls;
//using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Data.SqlClient;

namespace ProcesosAmbiental
{
    public class Conexion
    {
        //public string CadenaConexion = ConfigurationManager.ConnectionStrings["RequerimientosConnectionString"].ConnectionString;
        public string cadena = ConfigurationManager.ConnectionStrings["ProcesosAmbientalConnectionString"].ConnectionString;
        //public string cadenaresp = ConfigurationManager.ConnectionStrings["ProyectoBitacoraConnectionString"].ConnectionString;
        private SqlConnection conexion;

        public DataSet LlenarDataSet(string SQL)
        {
            conexion = new SqlConnection();
            //conexion.ConnectionString = CadenaConexion;
            conexion.ConnectionString = cadena;

            SqlCommand command = new SqlCommand();
            command.CommandText = SQL;
            command.Connection = conexion;

            SqlDataAdapter adapter = new SqlDataAdapter();

            adapter.SelectCommand = command;

            DataSet dataset = new DataSet();

            adapter.Fill(dataset);

            return dataset;
        }

        public DataSet LlenarDataSetP(string SQL)
        {
            conexion = new SqlConnection();
            conexion.ConnectionString = cadena;

            SqlCommand command = new SqlCommand();
            command.CommandText = SQL;
            command.Connection = conexion;

            SqlDataAdapter adapter = new SqlDataAdapter();

            adapter.SelectCommand = command;

            DataSet dataset = new DataSet();

            adapter.Fill(dataset);

            return dataset;
        }


        public DataSet LlenarDataSetBitacora(string SQL)
        {
            conexion = new SqlConnection();
            // conexion.ConnectionString = cadenaresp;
            conexion.ConnectionString = cadena;

            SqlCommand command = new SqlCommand();
            command.CommandText = SQL;
            command.Connection = conexion;

            SqlDataAdapter adapter = new SqlDataAdapter();

            adapter.SelectCommand = command;

            DataSet dataset = new DataSet();

            adapter.Fill(dataset);

            return dataset;
        }

        //funcion que permite actualizar, borrar o insertar
        public void EjecutarSQL(string SQL)
        {
            conexion = new SqlConnection();
            //conexion.ConnectionString = CadenaConexion;
            conexion.ConnectionString = cadena;

            SqlCommand command = new SqlCommand();
            command.CommandText = SQL;
            /*
            Esta variable SQL obtendria cualquiera de estas 3 funciones
             * 1. update table set campo = 2
             * 2. deleted from table where campo = 2
             * 3. insert into tabla values(1,2,3)
            */
            command.Connection = conexion;

            conexion.Open();
            command.ExecuteNonQuery();
            conexion.Close();

        }

        //nueva funcion de llenar dataset para validar si es usuario o proveedor
        public DataSet LlenarDataSet2(string SQL)
        {
            conexion = new SqlConnection();
            conexion.ConnectionString = cadena;

            SqlCommand command1 = new SqlCommand();
            command1.CommandText = SQL;
            command1.Connection = conexion;

            SqlDataAdapter adapter1 = new SqlDataAdapter();

            adapter1.SelectCommand = command1;

            DataSet dataset1 = new DataSet();

            adapter1.Fill(dataset1);

            return dataset1;
        }


    }
}
