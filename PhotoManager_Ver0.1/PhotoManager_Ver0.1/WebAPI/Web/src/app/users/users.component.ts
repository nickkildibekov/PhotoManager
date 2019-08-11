import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService ) { }

  ngOnInit() {
  }

}
