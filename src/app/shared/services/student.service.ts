import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Observable, Observer, BehaviorSubject } from 'rxjs';


@Injectable()
export class StudentService {
  private students: BehaviorSubject<Student[]> = new BehaviorSubject([]);

  constructor() {

  }

  getStream(): Observable<Student[]> {
    return this.students.asObservable();
  }

  getAll(): Observable<Student[]> {
    return Observable.create((observer: Observer<Student[]>) => {
      setTimeout(() => {
        this.students.next([
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
        ]);

        observer.next(this.students.getValue());
        observer.complete();
      }, 3000);
    });
  }

  add(student: Student): Observable<Student> {
    return Observable.create((observer: Observer<Student>) => {
      this.students.getValue().push(student);

      observer.next(student);
      observer.complete();
    });
  }

  remove(student: Student): Observable<Student> {
    return Observable.create((observer: Observer<Student>) => {
      let idx = this.students.getValue().findIndex((value) => value.id == student.id);
      this.students.getValue().splice(idx, 1);

      observer.next(student);
      observer.complete();
    });
  }

}
