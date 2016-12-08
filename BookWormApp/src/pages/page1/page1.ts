import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BarcodeScanner } from 'ionic-native';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
  }


  scan(){
      BarcodeScanner.scan().then((barcodeData) => {
      	var data = JSON.stringify(barcodeData);
      	alert("Vous avez scanné le livre avec l'ISBN suivant : "+barcodeData.text+" ")
      	// ISBN = barcodeData.text
      }, (err) => {
          alert("Un problème est survenu lors de la lecture du code barre.")
      });
    }

}
