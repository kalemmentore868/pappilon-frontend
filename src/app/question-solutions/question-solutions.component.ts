import { QuestionIdService } from '../question-id-service.service';
import { QuestionSolutionsService } from '../question-solutions.service';
import { Component } from '@angular/core';
import { QuestionSolutions } from 'src/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-solutions',
  templateUrl: './question-solutions.component.html',
  styleUrls: ['./question-solutions.component.css'],
})
export class QuestionSolutionsComponent {
  questionSolutions: QuestionSolutions = {
    question_formula: '',
    question_hint: '',
    video_solution: '',
    image_solution: '',
    question_template_id: '',
  };

  constructor(
    private questionIdService: QuestionIdService,
    private questionSolutionsService: QuestionSolutionsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questionSolutions.question_template_id =
      this.questionIdService.responseId;
  }

  submitForm() {
    this.questionSolutionsService
      .createQuestionSolutions(this.questionSolutions)
      .subscribe(
        (response) => {
          alert('Question Solutions Created Successfully');
          this.router.navigate(['/all-templates']);
        },
        (error) => {
          console.log('Error creating question solutions:', error);
        }
      );
  }
}
