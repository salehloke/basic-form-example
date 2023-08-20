import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UntypedExampleComponent } from './untyped-example/untyped-example.component';
import { TypedFormExampleComponent } from './typed-form-example/typed-form-example.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UntypedExampleComponent, TypedFormExampleComponent],
  templateUrl: './app.component.html',

  // template: `
  //   <h1>Hello from {{name}}!</h1>
  //   <a target="_blank" href="https://angular.io/start">
  //     Learn more about Angular
  //   </a>

  // `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
