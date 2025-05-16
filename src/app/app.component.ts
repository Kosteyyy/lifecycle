import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleMethods';

  demoDestroyed: boolean = false;

  inputText: string = '';

  OnSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value
  }

  destroyDemo() {
    this.demoDestroyed = true;
  }
}
