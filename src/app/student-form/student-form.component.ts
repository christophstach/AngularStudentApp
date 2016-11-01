import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: [ './student-form.component.scss' ]
})
export class StudentFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {
  }

  private prepareForm() {
    this.form = this.formBuilder.group({
      id: new FormControl('s0555' + (Math.floor(Math.random() * 999) + 100), Validators.required),
      firstName: new FormControl('Christoph', Validators.required),
      lastName: new FormControl('Stach', Validators.required),
      street: new FormControl('Plönzeile', Validators.required),
      houseNumber: new FormControl('21', Validators.required),
      postcode: new FormControl(12459, Validators.required),
      city: new FormControl('Berlin', Validators.required),
      picture: new FormControl('http://lorempixel.com/640/480/people/' + (Math.floor(Math.random() * 10) + 1), Validators.required)
    });
  }

  ngOnInit() {
    this.prepareForm();
  }

  add() {
    let student: Student = this.form.getRawValue() as Student;
    this.studentService.add(student).subscribe(
      () => {

      },
      () => {},
      () => {
        this.prepareForm();
      }
    );
  }

}
