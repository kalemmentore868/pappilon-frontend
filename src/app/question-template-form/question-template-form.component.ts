import { Component } from '@angular/core';
import { QuestionFormValue, Subject, CSECSection } from 'src/types';
import { SubjectsService } from '../subjects.service';
import { CsecSectionsService } from '../csec-sections.service';
import { QuestionTemplatesService } from '../question-templates.service';

@Component({
  selector: 'app-question-template-form',
  templateUrl: './question-template-form.component.html',
  styleUrls: ['./question-template-form.component.css'],
})
export class QuestionTemplateFormComponent {
  questionFormValue: QuestionFormValue = {
    status: '',
    subject: '',
    name: '',
    description: '',
    csecSection: '',
    objectives: [],
    questionFormat: '',
    questionType: '',
    difficulty: '',
  };

  subjectOptions: Subject[] = [];

  csecSectionOptions: CSECSection[] = [];

  objectivesOptions: string[] = [''];

  responseId: string = '';

  constructor(
    private subjectsService: SubjectsService,
    private csecSectionServices: CsecSectionsService,
    private questionTemplatesService: QuestionTemplatesService
  ) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectsService.getSubjects().subscribe(
      (response: Subject[]) => {
        this.subjectOptions = response;
      },
      (error) => {
        console.log('Error loading subjects:', error);
      }
    );
  }

  loadCSECSections() {
    const chosenSubject = this.subjectOptions.find(
      (subject) =>
        subject.name.toLocaleLowerCase() ===
        this.questionFormValue.subject.toLocaleLowerCase()
    );
    if (chosenSubject) {
      // Make an HTTP request to fetch the CSEC sections for the selected subject
      this.csecSectionServices
        .getCSECSectionsBySubject(chosenSubject._id.$oid)
        .subscribe(
          (response: CSECSection[]) => {
            this.csecSectionOptions = response;
          },
          (error) => {
            console.log('Error loading CSEC sections:', error);
          }
        );
    }
  }

  populateObjectives() {
    const chosenCSECSection = this.csecSectionOptions.find(
      (csecSection) =>
        csecSection.name.toLocaleLowerCase() ===
        this.questionFormValue.csecSection.toLocaleLowerCase()
    );
    if (chosenCSECSection) {
      this.objectivesOptions = chosenCSECSection.objectives;
    }
  }

  submitForm() {
    this.questionTemplatesService
      .createQuestionTemplate(this.questionFormValue)
      .subscribe(
        (response: any) => {
          this.responseId = response.inserted_id;
          alert('Successfully created a new question template');
        },
        (error) => {
          console.log('Error loading CSEC sections:', error);
        }
      );
  }
}
