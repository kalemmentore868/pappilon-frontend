import { Component, OnInit } from '@angular/core';
import { getTimeNow } from 'src/app/helpers/time';
import { IPService } from 'src/app/services/ip-service';
import { SubjectsService } from 'src/app/subjects.service';
import { Subject } from 'src/types';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  subjects: Subject[] = [];
  country: string = '';
  time = getTimeNow();

  constructor(
    private subjectService: SubjectsService,
    private ipService: IPService
  ) {}

  ngOnInit() {
    // Fetch templates from the service
    this.subjectService.getSubjects().subscribe(
      (templates) => {
        this.subjects = templates;
      },
      (error) => {
        console.error('Error fetching templates:', error);
      }
    );

    this.ipService.getCountryByIP().subscribe(
      (data) => {
        this.country = data.country_name;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching IP and country:', error);
      }
    );
  }
}
