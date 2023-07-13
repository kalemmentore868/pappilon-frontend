import { Component, OnInit } from '@angular/core';
import { Subject, TemplateFilters } from 'src/types';
import { SubjectsService } from '../subjects.service';
import { QuestionTemplatesService } from '../question-templates.service';
import { QuestionTemplateResponse } from 'src/responseTypes';

@Component({
  selector: 'app-all-templates-page',
  templateUrl: './all-templates-page.component.html',
  styleUrls: ['./all-templates-page.component.css'],
})
export class AllTemplatesPageComponent implements OnInit {
  subjectOptions: Subject[] = [];
  filters: TemplateFilters = {
    subject: '',
    name: '',
  };
  templates: QuestionTemplateResponse[] = [];
  allTemplates: QuestionTemplateResponse[] = [];

  constructor(
    private subjectsService: SubjectsService,
    private questionTemplatesService: QuestionTemplatesService
  ) {}

  ngOnInit() {
    this.loadSubjects();
    this.loadTemplates();
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

  loadTemplates() {
    this.questionTemplatesService.getQuestionTemplates().subscribe(
      (response: QuestionTemplateResponse[]) => {
        this.templates = response;
        this.allTemplates = response;
        this.filterTemplates();
      },
      (error) => {
        console.log('Error loading templates:', error);
      }
    );
  }

  filterTemplates() {
    if (this.filters.name === '') {
      this.templates = this.allTemplates.filter((template) => {
        return template.subject
          .toLowerCase()
          .includes(this.filters.subject.toLowerCase());
      });
    } else {
      this.templates = this.allTemplates.filter((template) => {
        return (
          template.subject
            .toLowerCase()
            .includes(this.filters.subject.toLowerCase()) &&
          template.name.toLowerCase().includes(this.filters.name.toLowerCase())
        );
      });
    }
  }

  onFilterChange() {
    this.filterTemplates();
  }
}
