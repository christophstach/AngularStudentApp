import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: [ './student-list.component.scss' ]
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService
      .getStream()
      .subscribe(
        (students) => {this.students = students},
        () => {},
        () => {}
      );
  }
}


