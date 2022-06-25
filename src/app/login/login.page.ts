/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private userService: UserService) { }

  OnSignIn() {
    this.userService.Login(this.email, this.password);
  }

  ngOnInit() {
  }

}
