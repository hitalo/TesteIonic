import { Component } from '@angular/core';

/**
 * Generated class for the OutroComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'outro-component',
  templateUrl: 'outro-component.html'
})
export class OutroComponent {

  text: string;

  constructor() {
    console.log('Hello OutroComponent Component');
    this.text = 'Hello World';
  }

}
