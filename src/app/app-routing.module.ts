import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ListChannelsComponent } from './list-channels/list-channels.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"channel/list",
    component:ListChannelsComponent
  },
  {
    path:"channel/create",
    component:CreateChannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
