import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, AuthService } from 'angular-6-social-login';
import { SocialUser } from './data-models/data-models';
import { CommonService } from './services/common.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'khadija 9819453553';
  constructor(private _authService: AuthService,
    private _commonSvc: CommonService) { }
  ngOnInit() {
  }
}
