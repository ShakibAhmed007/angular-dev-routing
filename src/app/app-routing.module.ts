import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ConfidentialDataComponent } from './confidential-data/confidential-data.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home-component/home-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './user-component/user-component.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:requestType/:id',
    component: UserComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  },
  {
    path: 'servers/:id',
    component: ServersComponent
  },
  {
    path: 'confidential-data',
    component: ConfidentialDataComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent
  // },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { errorMsg: 'Static Error Msg' }
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
