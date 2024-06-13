import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-forms';
}
