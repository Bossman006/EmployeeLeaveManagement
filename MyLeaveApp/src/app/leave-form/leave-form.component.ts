import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { LeaveServiceService } from '../leave-service.service';
import { Leave } from './../../Leave.model';

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.css']
})
export class LeaveFormComponent implements OnInit {

  leaveDetail : FormGroup;
  leaveObj : Leave = new Leave();
  leaveList : Leave[] = [];



  constructor(private formBuilder : FormBuilder, private leaveService : LeaveServiceService) { }

  ngOnInit(): void {

    this.getLeaveList();

    this.leaveDetail = this.formBuilder.group({

leaveID          : [''],
  leaveType        : [''],
	leaveName        : [''],
	leaveSurname     : [''],
  leaveDate        : [''],
	returnDate       : [''],

    });

  }

  addLeave() {
    console.log(this.leaveDetail);
    this.leaveObj.leaveID = 0
    this.leaveObj.leaveType = this.leaveDetail.value.leaveType;
    this.leaveObj.leaveName = this.leaveDetail.value.leaveName;
    this.leaveObj.leaveSurname = this.leaveDetail.value.leaveSurname;
    this.leaveObj.leaveDate = this.leaveDetail.value.leaveDate;
    this.leaveObj.returnDate = this.leaveDetail.value.returnDate;
    console.log(this.leaveObj)
    this.leaveService.addLeave(this.leaveObj).subscribe(res=>{
        console.log(res);
        this.getLeaveList();
    },err=>{
        console.log(err);
    });

  }

  getLeaveList() {
    this.leaveService.getLeaveList().subscribe(res=>{
        this.leaveList = res;
        console.log(this.leaveList);
    },err=>{
      console.log("error while fetching data.")
       })
  }

  editLeave(lvl : Leave) {
    this.leaveDetail.controls['leaveID'].setValue(lvl.leaveID);
    this.leaveDetail.controls['leaveType'].setValue(lvl.leaveType);
    this.leaveDetail.controls['leaveName'].setValue(lvl.leaveName);
    this.leaveDetail.controls['leaveSurname'].setValue(lvl.leaveSurname);
    this.leaveDetail.controls['leaveDate'].setValue(lvl.leaveDate);
    this.leaveDetail.controls['returnDate'].setValue(lvl.returnDate);

  }

  updateLeave() {

    this.leaveObj.leaveID = this.leaveDetail.value.leaveID;
    this.leaveObj.leaveType = this.leaveDetail.value.leaveType;
    this.leaveObj.leaveName = this.leaveDetail.value.leaveName;
    this.leaveObj.leaveSurname = this.leaveDetail.value.leaveSurname;
    this.leaveObj.leaveDate = this.leaveDetail.value.leaveDate;
    this.leaveObj.returnDate = this.leaveDetail.value.returnDate;

    this.leaveService.updateLeave(this.leaveObj).subscribe(res=>{
      console.log(res);
      this.getLeaveList();
    },err=>{
      console.log(err);
    })

  }

  deleteLeave(lvl : Leave) {

    this.leaveService.deleteLeave(lvl).subscribe(res=>{
      console.log(res);
      alert('Employee deleted successfully');
      this.getLeaveList();
    },err => {
      console.log(err);
    });

  }

}
