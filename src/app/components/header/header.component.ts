import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { CommonService } from 'src/app/services/common.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  change: boolean;
  selectedTab: string;
  private _currentPageDetailsSubscription: any = null;

  constructor(private _router: Router, private _appService: AppService,
    private _commonService: CommonService, private _storageSvc: StorageService) { }

  barChange() {
    this.change = !this.change;
  }

  onHomeClick() {
    this.selectedTab = "home";
    this._router.navigate([this._appService.routingConstants.home]);
  }
  onLibraryClick() {
    this.selectedTab = "library";
    this._router.navigate([this._appService.routingConstants.library]);
  }
  onUsersClick() {
    this.selectedTab = "users";
    this._router.navigate([this._appService.routingConstants.users]);
  }
  onGroupsClick() {
    this.selectedTab = "groups";
    this._router.navigate([this._appService.routingConstants.groups]);
  }
  onAnalyticsClick() {
    this.selectedTab = "analytics";
    this._router.navigate([this._appService.routingConstants.analytics]);
  }

  onLogoutClick() {
    this._storageSvc.signOutWithLoginRedirect();
  }

  ngOnDestroy() {
    if (this._currentPageDetailsSubscription) {
      this._currentPageDetailsSubscription.unsubscribe();
    }
  }
  ngOnInit() {

    this._currentPageDetailsSubscription = this._commonService.currentPageDetails.subscribe(data => {
      if (data) {
        if (data.pageName == this._appService.pageConstants.home) {
          this.selectedTab = "home";
        }
        else if (data.pageName == this._appService.pageConstants.library) {
          this.selectedTab = "library";
        }
        else if (data.pageName == this._appService.pageConstants.users) {
          this.selectedTab = "users";
        }
        else if (data.pageName == this._appService.pageConstants.groups) {
          this.selectedTab = "groups";
        }
        else if (data.pageName == this._appService.pageConstants.analytics) {
          this.selectedTab = "analytics";
        }
        else {
          this.selectedTab = "library";
        }
      }
      else {
        this.selectedTab = "library";
      }
    });
  }
}
