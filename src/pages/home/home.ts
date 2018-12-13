import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapaPage} from  '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;

  constructor(public navCtrl: NavController) {
    this.pushPage = MapaPage;
  }

}
