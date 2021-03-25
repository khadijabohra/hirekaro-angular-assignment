import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, AuthService } from 'angular-6-social-login';
import { SocialUser } from 'src/app/data-models/data-models';
import { CommonService } from 'src/app/services/common.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  isFormSubmitted: boolean = false;
  errorMessage: string = "";
  loading: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService,
    private _storageSvc: StorageService, private _router: Router) { }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.isFormSubmitted = false;
    this.loading = false;
    this.loginForm = this._formBuilder.group({
      userId: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  signInWithGoogle(): void {
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(
        (user) => {
          if (user) {
            let socialuser = user as SocialUser;
            this._storageSvc.updateUsername(socialuser);
            this._storageSvc.saveToken(socialuser.token)
            console.log(this._storageSvc.getIsLoggedIn());
            console.log('routing to libraries');
            setTimeout(() => this._router.navigate(['libraries']), 500);
          }
        }
      );
  }

  dummyLogin(): void {
    let socialuser = new SocialUser();
    socialuser.name = 'DummyName';
    socialuser.token = 'f46a4gd67a6dg46a46g8g6h7ragd';
    this._storageSvc.updateUsername(socialuser);
    this._storageSvc.saveToken(socialuser.token)
    console.log(this._storageSvc.getIsLoggedIn());
    console.log('routing to default page: libraries');
    setTimeout(() => this._router.navigate(['libraries']), 500);
  }



}

