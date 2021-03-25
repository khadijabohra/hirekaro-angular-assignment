import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-library-model',
  templateUrl: './library-model.component.html',
  styleUrls: ['./library-model.component.scss']
})
export class LibraryModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private _data: any,
    private _dref: MatDialogRef<LibraryModelComponent>) { }

  ngOnInit() {
    console.log('printing data');

    console.log(this._data);

  }
  onEditSuccessful() {
    this._dref.close();
  }
}
