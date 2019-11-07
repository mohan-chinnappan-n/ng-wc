import { Component } from '@angular/core';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

// import '../sflwc/app';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lwc-ng';
  // Our component state is an array of people that should be listed in the grid
  people: Person[] = [
    new Person('Dennis', 'Ritchie'),
    new Person('Ken', 'Thompson'),
    new Person('APJ', 'Kalam'),
    new Person('Srinivasa', 'Ramanujan'),
    new Person('Albert', 'Einstein')
   ];

  // A reactive FormGroup with controls for firstName and lastName
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  // When submitting the form, create a new array containing
  //  a Person object with the information in the form, then reset the form.
  addPerson() {
    this.people = [
      ...this.people,
      new Person(this.form.value.firstName, this.form.value.lastName)
    ];
    this.form.reset();
  }

}

class Person {
  constructor(public firstName: string, public lastName: string) {
    console.log('constructor called');
  }
}

