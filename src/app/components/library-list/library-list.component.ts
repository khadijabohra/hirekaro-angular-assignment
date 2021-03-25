import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Library } from 'src/app/data-models/data-models';
import { LibraryService } from 'src/app/services/library.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LibraryModelComponent } from '../library-model/library-model.component';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit, OnChanges {

  @Input()
  private libraries: Library[] = [];

  @Output()
  private deleteSuccess: EventEmitter<Library> = new EventEmitter<Library>();

  displayedColumns: string[] = ['sno', 'title', 'author', 'action'];
  dataSource: MatTableDataSource<Library>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private _libSvc: LibraryService, private _dlg: MatDialog) {
    this.dataSource = new MatTableDataSource(this.libraries);
  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'libraries': {
            this.dataSource.data = this.libraries;
          }
        }
      }
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteLibrary(row: any) {
    row.isDeleting = true;
    this._libSvc.deleteLibrary(row.id)
      .subscribe(
        data => {
          console.log('deleted successfully');
          this.deleteSuccess.emit(row);
          this._libSvc.showSnackBar('deleted successfully with id: ' + row.id);
        },
        err => {
          console.log(err);
          console.log('error occured');
          this._libSvc.showSnackBar('error occured while deleting with id: ' + row.id + ' ' + err);
        }
      ).add(() => { row.isDeleting = false; })
  }

  editLibrary(row: any) {
    let model: MatDialogRef<LibraryModelComponent>;
    model = this._dlg.open(LibraryModelComponent, {
      data: {
        row: row,
        isEditEnabled: true
      }
    });
  }

}
