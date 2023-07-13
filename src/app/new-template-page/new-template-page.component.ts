import { Component } from '@angular/core';

@Component({
  selector: 'app-new-template-page',
  templateUrl: './new-template-page.component.html',
  styleUrls: ['./new-template-page.component.css'],
})
export class NewTemplatePageComponent {
  screen = 1;

  updateScreen(value: number) {
    this.screen = value;
  }
}
