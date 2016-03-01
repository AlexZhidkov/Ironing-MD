import { Component } from 'angular2/core';  
import {  
  FORM_DIRECTIVES,  
  FormBuilder,  
  ControlGroup  
} from 'angular2/common';

const styles: string = require('./order-form.scss');
const template: string = require('./order-form-classic.html');

@Component({  
  selector: 'order-form',  
  directives: [FORM_DIRECTIVES],  
  styles: [styles],
  template
})  

export class OrderForm {  
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {  
    this.myForm = fb.group({  
      'name': [],
      'email': [],
      'phone': [],
      'subject': [],
      'message': []
    });  
  }

  onSubmit(value: string): void {  
    console.log('you submitted value: ', value);  
  }
}
