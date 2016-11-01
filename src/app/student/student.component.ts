import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: [ './student.component.scss' ]
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {

  }

  delete() {
    this.studentService
      .remove(this.student)
      .subscribe();
  }
}


