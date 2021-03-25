import { Component, OnInit } from '@angular/core';

import { Library } from 'src/app/data-models/data-models';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {

  libraries: Library[] = [];
  constructor(private _libSvc: LibraryService) { }

  ngOnInit() {
    this.getLibraryData();
    this._libSvc.refreshLibraryList$.subscribe(data => {
      this.getLibraryData();
    })
  }

  getLibraryData() {
    this._libSvc.getLibraryData()
      .subscribe(
        (data: Library[]) => {
          this.libraries = data;
        },
        err => {
          console.log(err);
          this._libSvc.showSnackBar('error occured while fetching libraries' + err);
          console.log('error occured');
        }
      )
  }

  onDeleteSuccess(lib: Library) {
    console.log(lib);
    this.getLibraryData();
  }

}
