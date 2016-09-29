using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;

namespace WebApiBia.Data.SQ
{
    public class MySqlTest
    {
        public void Load()
        {
            string cs = @"server=localhost;userid=mp;
            password=10101042;database=reporting";

            MySqlConnection conn = null;

            try
            {
                conn = new MySqlConnection(cs);
                conn.Open();
                string stm = "SELECT * FROM bia_v_project";
                MySqlCommand cmd = new MySqlCommand(stm, conn);
                MySqlDataReader rdr  = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    Console.WriteLine("");
                }

            }
            catch (MySqlException ex)
            {
                Console.WriteLine("Error: {0}", ex.ToString());

            }
            finally
            {
                if (conn != null)
                {
                    conn.Close();
                }
            }
        }

    }
}
