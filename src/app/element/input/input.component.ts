import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'srh-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.formControl.setValue(changes['value'].currentValue);
  }
  @Input()
  name!: string;

  @Input()
  inputLevel!: string;

  @Input()
  inputType!: string;

  @Input()
  isDissabled!: boolean;

  @Input()
  value !: string | boolean;

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

  @Output()
  inputValue = new EventEmitter<string>();

  formControl = new FormControl();

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((value) => {
      this.inputValue.emit(value);
    });
  }
}
