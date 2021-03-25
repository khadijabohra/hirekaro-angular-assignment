import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { GroupsPageComponent } from './groups-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsPageComponent
  }
];

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [
    HeaderModule,
    RouterModule.forChild(routes),
    CommonModule]
      
})
export class GroupsModule { }
