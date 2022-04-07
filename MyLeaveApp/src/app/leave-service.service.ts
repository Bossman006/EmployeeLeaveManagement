import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from './../Leave.model';

@Injectable({
  providedIn: 'root'
})

export class LeaveServiceService {

  addLeaveURL: string;
  getLeaveURL: string;
  updateLeaveUrl: string;
  deleteLeaveUrl: string;

  constructor(private http : HttpClient) {

    this.addLeaveURL = 'https://localhost:44311/api/Leave/CreateRecord';
    this.getLeaveURL = 'https://localhost:44311/api/Leave/List';
    this.updateLeaveUrl = 'https://localhost:44311/api/Leave/DeleteLeave?id=';
    this.deleteLeaveUrl = 'https://localhost:44311/api/Leave/DeleteLeave?id=';
   }

   addLeave(lve : Leave): Observable<Leave> {
     return this.http.post<Leave>(this.addLeaveURL,lve);
   }

   getLeaveList(): Observable<Leave[]>{
     return this.http.get<Leave[]>(this.getLeaveURL);
   }

   updateLeave(lve :Leave) : Observable<Leave>{
     return this.http.put<Leave>(this.updateLeaveUrl, lve);
   }

   deleteLeave(lve : Leave) : Observable<Leave> {
     return this.http.delete<Leave>(this.deleteLeaveUrl+'/'+lve.leaveID);
   }


}
