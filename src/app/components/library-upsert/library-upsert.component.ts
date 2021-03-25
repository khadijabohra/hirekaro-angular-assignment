import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Library } from 'src/app/data-models/data-models';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library-upsert',
  templateUrl: './library-upsert.component.html',
  styleUrls: ['./library-upsert.component.scss']
})
export class LibraryUpsertComponent implements OnInit, OnChanges {
  libraryForm: FormGroup;
  isSaving = false;

  @Input()
  private library: Library;

  @Input()
  private isEditEnabled: Boolean;

  @Output()
  private editSuccessful: EventEmitter<Library> = new EventEmitter<Library>();

  constructor(private _fb: FormBuilder, private _libSvc: LibraryService) {
    this.libraryForm = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  addLibrary() {
    this.isSaving = true;
    let editedData = this.libraryForm.value;
    editedData.id = this.library ? this.library.id : undefined
    let backendCall = this.isEditEnabled ?
      this._libSvc.editLibrary(editedData) : this._libSvc.addLibrary(this.libraryForm.value);
    backendCall.subscribe(
      data => {
        console.log('edit/added successfully');
        console.log(data);

        this.isSaving = false;
        this.libraryForm.reset();
        this.libraryForm.markAsPristine();
        this.libraryForm.markAsUntouched();
        this._libSvc.updateLibraryList(data as Library);
        if (this.isEditEnabled) this.editSuccessful.emit(editedData);
        let resp = data as Library
        this._libSvc.showSnackBar('Saved successfully, id: ' + resp.id);
      },
      err => {
        console.log(err);
        this.isSaving = false;
        console.log('error occured');
        this._libSvc.showSnackBar('Error occured while saving');
      }
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'library': {
            this.libraryForm.patchValue(this.library);
          }
        }
      }
    }
  }

  get f() { return this.libraryForm.controls; }
}
