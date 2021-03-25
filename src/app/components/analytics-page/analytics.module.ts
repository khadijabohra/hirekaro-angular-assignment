import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { AnalyticsPageComponent } from './analytics-page.component';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPageComponent
  }
];

@NgModule({
  declarations: [AnalyticsPageComponent],
  imports: [
    HeaderModule,
    RouterModule.forChild(routes),
    CommonModule]
      
})
export class AnalyticsModule { }
