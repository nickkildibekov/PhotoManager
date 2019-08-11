import { PostService } from 'src/app/shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService ) { }

  ngOnInit() {
  }

}
