import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'user', component: UserComponentComponent },
      { path: '/home', component: HomeComponentComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponentComponent,
    HomeComponentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
