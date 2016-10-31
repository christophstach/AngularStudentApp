import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor() {
  }

  ngOnInit() {
    this.students = [
      {
        id: 's0555912',
        picture: 'http://lorempixel.com/640/480/people/1',
        firstName: 'Christoph',
        lastName: 'Stach',
        street: 'Plönzeile',
        houseNumber: '21',
        postcode: 12459,
        city: 'Berlin'
      },
      {
        id: 's0555782',
        picture: 'http://lorempixel.com/640/480/people/2',
        firstName: 'Miles',
        lastName: 'Lorenz',
        street: 'Tolle Straße',
        houseNumber: '55',
        postcode: 12459,
        city: 'Berlin'
      },
      {
        id: 's0555555',
        picture: 'http://lorempixel.com/640/480/people/3',
        firstName: 'Laura',
        lastName: 'Hartgers',
        street: 'Hollandstraße',
        houseNumber: '15',
        postcode: 12459,
        city: 'Berlin'
      },
      {
        id: 's0555444',
        picture: 'http://lorempixel.com/640/480/people/4',
        firstName: 'Steffen',
        lastName: 'Exler',
        street: 'Kreuzbergstraße',
        houseNumber: '99',
        postcode: 12459,
        city: 'Berlin'
      }
    ];
  }

}
