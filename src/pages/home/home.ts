import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  regData = { avatar:'', email: '', password: '', fullname: '' };
  imgPreview = 'assets/imgs/blank-avatar.jpg';

  constructor(public navCtrl: NavController,
    private imagePicker: ImagePicker,
    private base65: Base64) {}

}
