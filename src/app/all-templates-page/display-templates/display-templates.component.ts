import { Component, Input } from '@angular/core';
import { QuestionTemplatesService } from '../../services/question-templates.service';
import { QuestionTemplateResponse } from 'src/responseTypes';
import { TemplateFilters } from 'src/types';

@Component({
  selector: 'app-display-templates',
  templateUrl: './display-templates.component.html',
  styleUrls: ['./display-templates.component.scss'],
})
export class DisplayTemplatesComponent {
  @Input() templates: QuestionTemplateResponse[] = [];
}
