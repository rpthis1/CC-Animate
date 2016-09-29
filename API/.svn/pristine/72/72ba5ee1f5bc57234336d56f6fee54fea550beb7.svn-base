using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;
using log4net;

namespace IBISReportingUIMaintenanceLib
{
    public class IbisReportingUiMaintenanceScheduler
    {

        private static System.Timers.Timer aTimer;
        private readonly ILog log = log4net.LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);
        public void Start()
        {
            string frequency = ConfigurationManager.AppSettings["exportFrequency"];
            aTimer = new System.Timers.Timer(Convert.ToInt32(frequency));
            aTimer.Elapsed += new ElapsedEventHandler(OnTimedEvent);
            aTimer.Enabled = true;
            log4net.Config.XmlConfigurator.Configure();
            log.Debug("Reporting UI Maintenance service started");

        }

        private void ExecuteBackupBat()
        {
            try
            {
                DeleteBackups();
                string directory = ConfigurationManager.AppSettings["exportsDownloadPath"];
                if (File.Exists(directory+"\\postgresqlBackup.bat"))
                {
                    DateTime now = DateTime.Now;
                    System.Diagnostics.Process proc = new System.Diagnostics.Process();
                    proc.StartInfo.FileName = directory+"\\postgresqlBackup.bat";
                    proc.StartInfo.WorkingDirectory = directory;
                    proc.StartInfo.Arguments = String.Format("{0} {1}_{2}_{3}___{4}_{5}_{6} ",directory + "\\backups", now.Year, now.Month, now.Day, now.Hour, now.Minute, now.Second);
                    proc.Start();

                }
                else
                {
                    log.Debug("Reporting UI backup Bat does not exist: ");
                }
            }
            catch (Exception e)
            {
                log.Debug("Failed to create backup for reporting UI: " + e.Message);
            }

        }

        private void OnTimedEvent(object source, ElapsedEventArgs e)
        {
            ExecuteBackupBat();

        }

        private void DownloadExports()
        {

            try
            {
                string url = "http://localhost:2480/export/reporting0";
                string directory = ConfigurationManager.AppSettings["exportsDownloadPath"];
                string version = ConfigurationManager.AppSettings["version"];
                WebClient client = new WebClient();
                String userName = "root";
                String passWord = "10101042";
                string credentials = Convert.ToBase64String(Encoding.ASCII.GetBytes(userName + ":" + passWord));
                client.Headers[HttpRequestHeader.Authorization] = "Basic " + credentials;
                client.DownloadFileCompleted += new AsyncCompletedEventHandler(Completed);
                DateTime now = DateTime.Now;
                client.DownloadFileAsync(new Uri(url), directory + @"\Export_" + now.Month + "_" + now.Day + "_" + now.Year + "_" + now.Hour + "_" + now.Minute + "_" + now.Second + "_v" + version + ".zip");
            }
            catch (Exception e)
            {
                log.Debug("Failed to write or download export: " + e.Message);
            }
       
            
        }
        private void Completed(object sender, AsyncCompletedEventArgs e)
        {
            DeleteBackups();
        }
        private void DeleteBackups()
        {
            try
            {

               
                string directory = ConfigurationManager.AppSettings["exportsDownloadPath"];
                directory = directory + "\\backups";
                string keepMaximumExports = ConfigurationManager.AppSettings["keepMaximumExports"];
                int maximumExports = Convert.ToInt32(keepMaximumExports);
                var files = GetZipFilesByLastWriteTime(directory).ToList();
                List<String> markForDelete = new List<string>();
                int counter = 0;

                foreach (var path in files)
                {
                    if (counter >= maximumExports)
                    {
                        markForDelete.Add(directory + @"\" + path);
                    }
                    counter++;
                }

                foreach (var deletePath in markForDelete)
                {
                    log.Debug("Deleted: " + deletePath);
                    File.Delete(deletePath);
                }
            }

            catch (Exception e)
            {
                log.Debug("Failed to delete backups: " + e.Message);
            }
        }

        private  IEnumerable<string> GetZipFilesByLastWriteTime(string path)
        {
            var directoryInfo = new DirectoryInfo(path);
            if (!directoryInfo.Exists) return Enumerable.Empty<string>();

            var query =
                from file in directoryInfo.GetFiles()
                where file.Extension.ToLower() == ".backup"
                orderby file.LastWriteTime descending 
                select file.Name;

            return query;
        }
    }
}
