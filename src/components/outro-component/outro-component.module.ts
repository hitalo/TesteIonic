import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutroComponent } from './outro-component';

@NgModule({
  declarations: [
    OutroComponent,
  ],
  imports: [
    IonicPageModule.forChild(OutroComponent),
  ],
  exports: [
    OutroComponent
  ]
})
export class OutroComponentModule {}
