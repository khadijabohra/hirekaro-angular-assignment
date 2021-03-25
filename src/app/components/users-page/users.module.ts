import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersPageComponent } from './users-page.component';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
    {
        path: '',
        component: UsersPageComponent
    }
];

@NgModule({
    declarations: [UsersPageComponent],
    imports: [
        HeaderModule,
        RouterModule.forChild(routes),
        CommonModule]
})
export class UsersModule { }
