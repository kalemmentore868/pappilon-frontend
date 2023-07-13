import { Component } from '@angular/core';
import { Subject } from 'src/types';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-all-templates-page',
  templateUrl: './all-templates-page.component.html',
  styleUrls: ['./all-templates-page.component.css'],
})
export class AllTemplatesPageComponent {
  subjectOptions: Subject[] = [];

  filters = {
    subject: '',
  };

  constructor(private subjectsService: SubjectsService) {}

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
}
