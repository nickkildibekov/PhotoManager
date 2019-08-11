import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: []
})
export class UsersListComponent implements OnInit {
  filter: string;
  userList: User[];
  topContribVal: number;
  constructor(private userService: UserService, private actrouter: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      resultArray => {
        console.log(resultArray);
        return this.userList = resultArray;
      },
      error => console.log('Error :: ' + error)
    );
    this.actrouter.paramMap.subscribe(params => {
      switch (params.get('filter')) {
        case 'topContrib':
          this.topContribVal = 1;
          break;
      }
    });
  }
  getTotalRating(posts: Post[]) {
    let rating = 0;
    posts.forEach(value => rating += value.Rating);
    return rating;
  }
}
