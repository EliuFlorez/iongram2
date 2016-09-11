import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/login/login.html',
  directives: [ FORM_DIRECTIVES ]
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    private navCtrl: NavController
  ) {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  doLogin(){
    let data = this.loginForm.value;
    if(data.username == 'nicobytes' && data.password == '123456'){
      this.navCtrl.setRoot( TabsPage );
    }
  }

}
