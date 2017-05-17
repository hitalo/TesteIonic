import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainCartao } from './main-cartao';

@NgModule({
  declarations: [
    MainCartao,
  ],
  imports: [
    IonicPageModule.forChild(MainCartao),
  ],
  exports: [
    MainCartao
  ]
})
export class MainCartaoModule {}
