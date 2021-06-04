import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user-component/user-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { ServersComponent } from './servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfidentialDataComponent } from './confidential-data/confidential-data.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    HomeComponent,
    ServersComponent,
    PageNotFoundComponent,
    ConfidentialDataComponent,
    ErrorPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
