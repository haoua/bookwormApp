import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	constructor(public navCtrl: NavController) {}

	ionViewDidLoad() {
		console.log('Hello LoginPage Page');
	}

	logIn() {
		this.navCtrl.setRoot(Page1);
	}

}