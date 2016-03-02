import {View, Component} from 'angular2/core';
import {MdPatternValidator, MdMinValueValidator, MdNumberRequiredValidator, MdMaxValueValidator, MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {FORM_DIRECTIVES, Validators, FormBuilder, ControlGroup} from 'angular2/common';

const template: string = require('./order-form.html');
//const styles: string = require('./order-form.scss');

@Component({selector: 'order-form'})
@View({
  directives: [MATERIAL_DIRECTIVES, FORM_DIRECTIVES],
  //styles: [styles],
  template

})
export class OrderForm {
  projectForm: ControlGroup;
  model = {
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    subject: '',
    message: ''
  };
  constructor(fb: FormBuilder) {
    this.projectForm = fb.group({
      'clientName': ['', Validators.required],
      'clientEmail': ['', Validators.compose([
        MdPatternValidator.inline('^.+@.+\..+$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100)
      ])],
      'clientPhone': ['', Validators.compose([
        MdNumberRequiredValidator.inline()
      ])],
      'subject': ['', Validators.required],
      'message': ['', Validators.required]
    });
  }
}