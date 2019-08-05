import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/students' },
  { path: 'students', pathMatch: 'full', component: StudentListComponent },
  { path: 'studentAdd', pathMatch: 'full', component: StudentAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
