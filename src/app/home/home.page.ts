import { UserService } from './../services/user/user.service';
import { Component } from '@angular/core';
import { User } from 'src/models/users.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.GetAllUsers();
    console.log(this.users);
  }

}
