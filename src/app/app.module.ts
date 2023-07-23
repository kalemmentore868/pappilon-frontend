import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { NewTemplatePageComponent } from './new-template-page/new-template-page.component';
import { AllTemplatesPageComponent } from './all-templates-page/all-templates-page.component';
import { AppComponent } from './app.component';
import { QuestionTemplateFormComponent } from './new-template-page/question-template-form/question-template-form.component';
import { QuestionDetailsFormComponent } from './new-template-page/question-details-form/question-details-form.component';
import { QuestionSolutionsComponent } from './new-template-page/question-solutions/question-solutions.component';
import { DisplayTemplatesComponent } from './all-templates-page/display-templates/display-templates.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './all-templates-page/top-bar/top-bar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'new-template',
    component: NewTemplatePageComponent,
  },
  {
    path: 'all-templates',
    component: AllTemplatesPageComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionTemplateFormComponent,
    NewTemplatePageComponent,
    AllTemplatesPageComponent,
    QuestionDetailsFormComponent,
    QuestionSolutionsComponent,
    DisplayTemplatesComponent,
    HomepageComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
