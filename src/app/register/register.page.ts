import { RegisterService } from './../services/register/register.service';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: User;
  Firstname = ' ';
  Lastname = ' ';
  Email = ' ';
  Password = ' ';

  constructor(private connect: RegisterService) { }

  OnSignUp() {
    console.log('ok');
    this.connect.onSignUp(this.Firstname, this.Lastname, this.Email, this.Password);
  }

  ngOnInit() {
  }

}
