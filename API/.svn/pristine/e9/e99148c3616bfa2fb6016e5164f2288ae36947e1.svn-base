using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WebApiBia.Common
{
    public class RecordIdUtil
    {
        public int GetClusterIdFromFullId(string fullRecordId)
        {
            string[] temp = fullRecordId.Split('#');
            string cleanId = temp[1];
            string[] cleanArray = cleanId.Split(':');
            return Convert.ToInt32(cleanArray[0]);
        }
        public int GetRecordIdFromFullId(string fullRecordId)
        {
            string[] temp = fullRecordId.Split('#');
            string cleanId = temp[1];
            string[] cleanArray = cleanId.Split(':');
            return Convert.ToInt32(cleanArray[1]);
        }

        public int GetClusterIdFromPartialId(string partialRecordId)
        {
            string[] temp = partialRecordId.Split(':');
            return Convert.ToInt32(temp[0]);
        }
        public int GetRecordIdFromPartialId(string partialRecordId)
        {
            string[] temp = partialRecordId.Split(':');
            return Convert.ToInt32(temp[1]);
        }
    }
}
