import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TesteClasse } from '../../classes/testeClasse';

/**
 * Generated class for the Main page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class Main {

  public testeClasse1: TesteClasse;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.testeClasse1 = new TesteClasse("Meu nome");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Main');
    console.log(this.testeClasse1.getIdade());
    console.log(this.testeClasse1.getNome());
  }

}
