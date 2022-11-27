import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'srh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor() {}
  @Input()
  name!: string;

  @Input()
  lebelClass!: string;

  @Input()
  inputLevel!: string;

  @Input()
  inputType!: string;

  @Input()
  isDissabled!: boolean;

  @Input()
  control = new FormControl<any>({disabled: this.isDissabled})

  @Input()
  style!: {};

  @Input()
  ariaDescribedby!: string;

  @Input()
  helpText!: string;

  @Input()
  classes!: string;

  @Input()
  validationMessages!: [string];

  @Input()
  rows!: string

  @Output()
  inputValue = new EventEmitter<{fieldName: string, fieldValue : any}>();

  

  errorMessages : Record<string, string> = {
    required  : 'The field is required',
    email : 'The mail is invalid',
    password : 'The password is invalid'
  }
  displayErrors (){
    const {dirty, touched, errors} = this.control
    return dirty && touched && errors
  }
  isPlainType(type: string){
    const plainTypes = [ 'email','text','password' , 'number']
    return plainTypes.includes(type)
  }
}
