import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-untyped-example',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './untyped-example.component.html',
  styleUrls: ['./untyped-example.component.css'],
})
export class UntypedExampleComponent implements OnInit {
  untypedExampleForm = new FormGroup({
    age: new FormControl(0),
  });
  constructor() {}

  ngOnInit() {
    this.untypedExampleForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
