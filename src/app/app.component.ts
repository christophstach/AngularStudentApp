import { Component, OnInit } from '@angular/core';
import { StudentService } from './shared/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'Student List';

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getAll().subscribe();
  }
}
