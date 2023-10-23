import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ListChannelsComponent } from './list-channels/list-channels.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { ChannelComponent } from './channel/channel.component';
import { ImgDisplayComponent } from './img-display/img-display.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { ChannelProfileComponent } from './channel-profile/channel-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ListChannelsComponent,
    CreateChannelComponent,
    ChannelComponent,
    ImgDisplayComponent,
    CustomDialogComponent,
    ChannelProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
