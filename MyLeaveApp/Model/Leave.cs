using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyLeaveApp.Model
{
    public class Leave
    {
        [Key]
        public int LeaveID { get; set; }
        public string LeaveType { get; set; }
        public string LeaveName { get; set; }
        public string LeaveSurname { get; set; }
        public DateTime LeaveDate { get; set; }
        public DateTime ReturnDate { get; set; }

    }
}
