import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { NewTemplatePageComponent } from './new-template-page/new-template-page.component';
import { AllTemplatesPageComponent } from './all-templates-page/all-templates-page.component';
import { AppComponent } from './app.component';
import { QuestionTemplateFormComponent } from './question-template-form/question-template-form.component';

const appRoutes: Routes = [
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}