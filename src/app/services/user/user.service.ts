/* eslint-disable @typescript-eslint/semi */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor(private alertController: AlertController, private router: Router) {
    this.users = [
      {
        Firstname: 'Miguel',
        Lastname: 'Florian',
        Email: 'migflor@gmail.com',
        Password: 'mimiflo',
      }
    ];
  }

  Login(email: string, code: string) {
    if (email === 'migflor@gmail.com' && code === 'mimiflo') {
      this.router.navigateByUrl('/home');
    } else {
      this.onShowAlert("Credentails incorrects !!");
    }
  }
  Register(nom: string, prenom: string, mail: string, code: string,) {
    this.users.push({
      Firstname: nom,
      Lastname: prenom,
      Email: mail,
      Password: code,
    });
    console.log(this.users);
  }
  GetAllUsers() {
    return this.users;
  }

  async onShowAlert(message: string) {
    const alert = await this.alertController.create({
      header: "Status",
      message: message,
      cssClass: "customAlert",
      buttons: ['OK']
    });
    alert.present()
  }
}
