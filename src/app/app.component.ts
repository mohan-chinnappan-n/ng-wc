import { Component, ElementRef, ViewChild } from '@angular/core';
/*
ElementRef, ViewChild

We need ElementRef and ViewChild because we’ll need to manipulate 
our Web Components directly to change their values. 


*/

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

   /*
    You’ll see that we’ve also added something extra to our components: #iCounter and #dCounter.
    As we’ll see in a moment, these tags allow our Angular component to obtain direct references
     to these elements so we can update them.
    Finally, we have increment and decrement buttons that call methods in the app component 
    to change the value of our Web Component counters.
   */

   // instance variable to store our current counter value
   private count: number = 0;  
   //  use the ViewChild decorator to acquire ElementRefs to our two web components 
   //  by using the tags we have in the template.
   @ViewChild('iCounter', {static : true}) iCounter: ElementRef;  
   @ViewChild('dCounter', {static: true}) dCounter: ElementRef;

   // ElementRef instances make it possible to use underlying native elements directly.
   //  In our case, these elements are DOM nodes.

   // we change the component’s count variable, and then update our Web Components to use the new value. 

   increment() {  
    this.count++;  
    // we call its increment and decrement methods.
    this.iCounter.nativeElement.increment();  
    // we use the DOM’s setAttribute method to update the counter’s value.
    this.dCounter.nativeElement.setAttribute("count", this.count);  
  }

  decrement() {  
    this.count--;  
    this.iCounter.nativeElement.decrement();  
    this.dCounter.nativeElement.setAttribute("count", this.count);  
  }  


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

