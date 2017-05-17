import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';

import {Main} from '../main/main';


@NgModule({
  declarations: [
    Login,
    Main
  ],
  imports: [
    IonicPageModule.forChild(Login),
    Main
  ],
  exports: [
    Login
  ]
})
export class LoginModule {}
