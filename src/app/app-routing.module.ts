import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { RedirectGuardService } from './services/redirect-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login-page/login.module').then(m => m.LoginModule),
    canActivate: [RedirectGuardService]
  }, {
    path: 'home',
    loadChildren: () => import('./components/home-page/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users-page/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'libraries',
    loadChildren: () => import('./components/library-page/library.module').then(m => m.LibraryModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'groups',
    loadChildren: () => import('./components/groups-page/groups.module').then(m => m.GroupsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'analytics',
    loadChildren: () => import('./components/analytics-page/analytics.module').then(m => m.AnalyticsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
