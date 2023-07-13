import { Component } from '@angular/core';
import { QuestionTemplatesService } from '../question-templates.service';
import { QuestionTemplateResponse } from 'src/responseTypes';

@Component({
  selector: 'app-display-templates',
  templateUrl: './display-templates.component.html',
  styleUrls: ['./display-templates.component.css'],
})
export class DisplayTemplatesComponent {
  templates: QuestionTemplateResponse[] = [];

  constructor(private questionTemplatesService: QuestionTemplatesService) {}

  ngOnInit() {
    this.questionTemplatesService.getQuestionTemplates().subscribe(
      (response: QuestionTemplateResponse[]) => {
        this.templates = response;
      },
      (error) => {
        console.log('Error loading subjects:', error);
      }
    );
  }
}
