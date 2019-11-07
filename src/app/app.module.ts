import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/*
  refer: https://vaadin.com/tutorials/using-web-components-in-angular

  By default, Angular assumes that all custom HTML elements are Angular components
   and throws errors when encountering non-angular components. 
   You can enable custom elements by adding the CUSTOM_ELEMENTS_SCHEMA to the application module. 
   At the same time, import the ReactiveFormsModule that we use for creating the form.

*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   [ BrowserModule,
     ReactiveFormsModule
    ]
  ],
  providers: [],
  bootstrap: [AppComponent],
  // for wc support
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
