import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Main } from './main';
import { TesteClasse } from '../../classes/testeClasse';


@NgModule({
  declarations: [
    Main,
    TesteClasse
  ],
  imports: [
    IonicPageModule.forChild(Main),
  ],
  exports: [
    Main
  ]
})
export class MainModule {}
