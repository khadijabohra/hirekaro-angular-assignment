import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/data-models/data-models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private _http: HttpClient) { }
  users: UserModel[] = [];

  ngOnInit() {
    this._http.get(environment.baseUrl+'users')
    .subscribe(
      data=>{
        this.users = data as UserModel[];
      },
      error=>{
        console.log('Error: '+ error)
      }
    )

  }

}
