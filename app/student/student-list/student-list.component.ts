import { Component, OnInit } from '@angular/core';
import { StudentRepositryService } from '../../shared/services/student-repositry.service';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  displayedColumns= ["Id", "Name", "Age", "Gender"];

  constructor(private studentRepo: StudentRepositryService) { }

  ngOnInit() {
    this.studentRepo.getStudents().subscribe(
      data => {
        this.students = data;
      }
    );
  }

}
