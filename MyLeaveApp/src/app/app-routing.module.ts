import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveFormComponent } from './leave-form/leave-form.component';

const routes: Routes = [
  {path:'Leave',component :LeaveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
