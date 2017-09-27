import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/security/login/login.component';
import { ForgotPasswordComponent } from './components/security/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/security/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerAddComponent } from './components/player/player-add/player-add.component';
import { PlayerDetailComponent } from './components/player/player-detail/player-detail.component';
import { PlayerEditComponent } from './components/player/player-edit/player-edit.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    PlayerAddComponent,
    PlayerDetailComponent,
    PlayerEditComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
