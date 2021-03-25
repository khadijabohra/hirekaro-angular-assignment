import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { LibraryPageComponent } from './library-page.component';
import { LibraryListComponent } from '../library-list/library-list.component';
import { MatDialogModule, MatPaginatorModule, MatSnackBarModule, MatSortModule, MatTableModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LibraryUpsertComponent } from '../library-upsert/library-upsert.component';
import { LibraryModelComponent } from '../library-model/library-model.component';
import { LibraryService } from 'src/app/services/library.service';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {
    path: '',
    component: LibraryPageComponent
  }
];

@NgModule({
  declarations: [LibraryPageComponent, LibraryListComponent, LibraryUpsertComponent, LibraryModelComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HeaderModule,
    MatButtonModule
  ],
  providers: [LibraryService],
  entryComponents: [LibraryModelComponent, LibraryUpsertComponent]
})
export class LibraryModule { }
