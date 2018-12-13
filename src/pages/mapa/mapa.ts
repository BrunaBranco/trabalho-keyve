import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;


@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  // @ViewChild('map') mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    this.initializeMap();
  }

  // criando o map
  initializeMap() {
    // aqui vai setar a possição(recomendo usar a geolalização automatica mais se naõ conseguir deixa assim mesmo)
    this.startPosition = new google.maps.LatLng(-27.8155, -50.3264);

    const mapOptions = {
      // aqui é apossição do marcado e zoom que o mapa vai ter
      zoom: 18,
      center: this.startPosition,
      disableDefaultUI: true
    }
// aqui ele vai monatando o mapa 
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
    });

  }

// aquie ele cacula a rota mais aqui ele esta só indo de uma cidade na outr
  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }
//  aqui ele vai traçar a rota mais esta só de uma cidade na outro por enquanto, sugiro que deem uma olhada de como fz isso pra rua.
  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }

}
