import { Component } from '@angular/core';

import { App, MenuController } from 'ionic-angular';


/**
 * Generated class for the MainCartao component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'main-cartao',
  templateUrl: 'main-cartao.html'
})
export class MainCartao {

  text: string;

  constructor(app: App, menu: MenuController) {
    menu.enable(true);
    
    console.log('Hello MainCartao Component');
    this.text = 'Cartão Principal';
  }

}
