import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre="";
  edad:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {

    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre, this.edad)
  }

  cerrarConParametros(){
      let data = {
        nombre: "Daniel",
        edad:18,
        coords: {
          lat:43,
          lng:55
        }
      }
      this.viewCtrl.dismiss( data ); //devuelve data a la pagina desde la que lo hemos abierto
  }

  cerrarSinParametros(){
    this.viewCtrl.dismiss();
  }

}
