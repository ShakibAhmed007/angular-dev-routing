import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user-component/user-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes = [
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
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
