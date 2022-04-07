using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyLeaveApp.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyLeaveApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveController : ControllerBase
    {
        private readonly MyDataContext _context;

        public LeaveController(MyDataContext context)
        {
            _context = context;
        }


        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<Leave>>> Get()
        {
            return await _context.Leaves.ToListAsync();
        }


        [HttpGet]
        [Route("Details")]
        public async Task<ActionResult<Leave>> Get(int id)
        {
            var data = await _context.Leaves.FindAsync(id);
            return data;
        }


        [HttpPost]
        //public async void Post(Product product)
        [Route("CreateRecord")]
        public async Task<ActionResult<Leave>> POST(Leave leave)
        {
            _context.Leaves.Add(leave); ;
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = leave.LeaveID }, leave);
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }


        [HttpPost]
        [Route("DeleteLeave")]
        public async Task<ActionResult<IEnumerable<Leave>>> Delete(int id)
        {
            var product = await _context.Leaves.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            _context.Leaves.Remove(product);
            await _context.SaveChangesAsync();

            return await _context.Leaves.ToListAsync();
        }


        [HttpPost]
        [Route("UpdateLeave")]
        public async Task<ActionResult<IEnumerable<Leave>>> Update(int id, Leave leave)
        {
            if (id != leave.LeaveID)
            {
                return BadRequest();
            }

            var leaveData = await _context.Leaves.FindAsync(id);
            if (leaveData == null)
            {
                return NotFound();
            }

      leaveData.LeaveType = leave.LeaveType;
      leaveData.LeaveName = leave.LeaveName;
      leaveData.LeaveSurname = leave.LeaveSurname;
      leaveData.LeaveDate = leave.LeaveDate;
      leaveData.ReturnDate = leave.ReturnDate;

            await _context.SaveChangesAsync();
            return await _context.Leaves.ToListAsync();

        }

    }
}

