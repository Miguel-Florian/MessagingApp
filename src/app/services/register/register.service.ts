/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from 'ionic-angular';
import { User } from './../../../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  users: User[];


  constructor(private alertController: AlertController, private router: Router) {
    this.users = [
      {
        Firstname: "Miguel",
        Lastname: "Florian",
        Email: "migflor@gmail.com",
        Password: "mimiflo",
      }
    ]
  }

  onLogin(firstanme: string, code: string) {
    if (firstanme === "Miguel" && code === "mimiflo") {
      this.router.navigateByUrl('/home')
    } else {
      this.onShowAlert("Credentials incorrects")
    }

  }
  onSignUp(nom: string, prenom: string, mail: string, code: string,) {
    this.users.push({
      Firstname: nom,
      Lastname: prenom,
      Email: mail,
      Password: code,
    })
    console.log(this.users)
  }
  onGetAllUsers() {
    return this.users
  }

  async onShowAlert(msg: string) {
    const alert = await this.alertController.create({
      header: "Status",
      message: msg,
      cssClass: "customAlert",
      button: ['OK']
    });
    alert.present()
  }
}
