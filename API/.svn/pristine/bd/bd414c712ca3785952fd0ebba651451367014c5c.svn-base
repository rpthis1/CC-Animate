using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;

namespace WebApi.Data.MySql
{
    public class Class1
    {
        private MySqlConnection conn;



        public void Execute(string sql)
        {
            try
            {
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                cmd.ExecuteNonQuery();
                Console.WriteLine("OK: " + sql);
            }
            catch (Exception e)
            {
                Console.WriteLine("ERROR: " + sql + "\n" + e.ToString());
            }
        }

        public void TestJson()
        {
            Console.WriteLine("--- MySQL JSON Test ---");
            string connStr = "server=localhost;user=mp;port=3306;password=10101042;";
            conn = new MySqlConnection(connStr);
            try
            {
                Console.WriteLine("Connecting to MySQL...");
                conn.Open();

                //Execute("CREATE DATABASE IF NOT EXISTS trs");
                //Execute("DROP TABLE IF EXISTS trs.t");
                //Execute("CREATE TABLE trs.t (doc json)");
                //Execute("INSERT INTO trs.t VALUES(' { \"name\" : \"Bob\" , \"age\" : 25 } ')");
                //Execute("INSERT INTO trs.t VALUES(' { \"name\" : \"Sue\" , \"age\" : 26 } ')");

                //MySqlCommand cmd = new MySqlCommand("select cast(json_data as char(40)) from reporting.vertex_project", conn);

              //  MySqlCommand cmd = new MySqlCommand("select json_data from reporting.vertex_project", conn);
                  MySqlCommand cmd = new MySqlCommand("select json_data from reporting.vertex_project WHERE JSON_EXTRACT(json_data,'$.order') = '1' ", conn);



                using (MySqlDataReader rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        string doc = rdr.GetString(0);
                        Console.WriteLine("ROW: json -> " + doc);
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            conn.Close();
            Console.WriteLine("Done.");
        }

        private void GetCustomer(int customerId)
        {
            string constr = "server=localhost;user=mp;port=3306;password=10101042;";
            //string constr = ConfigurationManager.ConnectionStrings["constr"].ConnectionString;
            using (MySqlConnection con = new MySqlConnection(constr))
            {
                using (MySqlCommand cmd = new MySqlCommand("Customers_GetCustomer", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@CustId", customerId);
                    using (MySqlDataAdapter sda = new MySqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);
                    }
                }
            }
        }

        private void Insert()
        {
            string constr = "server=localhost;user=mp;port=3306;password=10101042;";
            using (var con = new SqlConnection(constr))
            {
                int newID;
                var cmd = "INSERT INTO foo (column_name)VALUES (@Value);SELECT CAST(scope_identity() AS int)";
                using (var insertCommand = new SqlCommand(cmd, con))
                {
                    insertCommand.Parameters.AddWithValue("@Value", "bar");
                    con.Open();
                    newID = (int)insertCommand.ExecuteScalar();
                }
            }
        }


    }
}
