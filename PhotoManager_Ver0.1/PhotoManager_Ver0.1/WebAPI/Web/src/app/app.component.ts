import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthGuard } from './auth/auth.guard';
import { PostListComponent } from './posts/post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [PostListComponent],
})
export class AppComponent implements OnInit {
  filter?: string;
  constructor(private router: Router, private postListComponent: PostListComponent) { }
  title = 'Photo Manager';
  ngOnInit() {
    this.filter = 'default';
    this.router.navigate(['posts/list/', this.filter]);
  }
}


