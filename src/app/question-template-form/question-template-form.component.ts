import { Component } from '@angular/core';
import { QuestionFormValue, Subject, CSECSection } from 'src/types';
import { HttpClient } from '@angular/common/http';

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
    format: '',
    type: '',
    difficulty: '',
  };

  subjectOptions: Subject[] = [];

  csecSectionOptions: CSECSection[] = [];

  objectivesOptions: string[] = [''];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.http.get<Subject[]>('http://127.0.0.1:5000/api/subjects').subscribe(
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
      this.http
        .get<CSECSection[]>(
          `http://127.0.0.1:5000/api/csec_sections/by_subject/${chosenSubject._id.$oid}`
        )
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
    // Handle form submission
  }
}
