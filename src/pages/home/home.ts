import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  regData = { avatar:'', email: '', password: '', fullname: '' };
  imgPreview = 'assets/imgs/blank-avatar.jpg';

  constructor(public navCtrl: NavController,
    private imagePicker: ImagePicker,
    private base64: Base64,
    public api: ApiProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {}

  getPhoto() {
    let options = {
      maximumImagesCount: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          this.imgPreview = results[i];
          this.base64.encodeFile(results[i]).then((base64File: string) => {
            this.regData.avatar = base64File;
          }, (err) => {
            console.log(err);
          });
      }
    }, (err) => { });
  }

}
