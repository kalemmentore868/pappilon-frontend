import { Component, Inject } from '@angular/core';
import { QuestionDetails } from 'src/types';
import { QuestionIdService } from '../../services/question-id-service.service';
import { QuestionDetailsService } from '../../services/question-details.service';
import { NewTemplatePageComponent } from '../new-template-page.component';

@Component({
  selector: 'app-question-details-form',
  templateUrl: './question-details-form.component.html',
  styleUrls: ['./question-details-form.component.css'],
})
export class QuestionDetailsFormComponent {
  questionDetails: QuestionDetails = {
    question_template_id: '',
    question_text_template: '',
    question_image: '',
    developer_note: '',
  };

  constructor(
    private questionIdService: QuestionIdService,
    private questionDetailsService: QuestionDetailsService,
    @Inject(NewTemplatePageComponent)
    private newTemplatePage: NewTemplatePageComponent
  ) {}

  ngOnInit() {
    this.questionDetails.question_template_id =
      this.questionIdService.responseId;
  }

  submitForm() {
    this.questionDetailsService
      .createQuestionDetails(this.questionDetails)
      .subscribe(
        (response) => {
          alert('Details added successfully');
          this.newTemplatePage.updateScreen(3);
        },
        (error) => {
          console.log('Error loading subjects:', error);
        }
      );
  }
}
