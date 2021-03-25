import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Library } from '../data-models/data-models';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable()
export class LibraryService {

  private refreshLibraryList = new BehaviorSubject<Library>(undefined);
  refreshLibraryList$ = this.refreshLibraryList.asObservable();


  constructor(private _http: HttpClient, private _snackBar: MatSnackBar) { }

  updateLibraryList(obj: Library) {
    this.refreshLibraryList.next(obj)
  }

  deleteLibrary(id: number) {
    return this._http.delete(environment.baseUrl + 'libraries/' + id);
  }

  editLibrary(data: any) {
    console.log(data);
    return this._http.put(environment.baseUrl + 'libraries/' + data.id, data, { headers: headers });
  }

  addLibrary(data: any) {
    return this._http.post(environment.baseUrl + 'libraries', data, { headers: headers })
  }
  getLibraryData() {
    return this._http.get(environment.baseUrl + 'libraries');
  }

  showSnackBar(msg: string) {
    this._snackBar.open(msg, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
