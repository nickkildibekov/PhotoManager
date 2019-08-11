import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post.model';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserService } from 'src/app/shared/services/user.service';
import { CurrentUserService } from 'src/app/utils/utils';
import { ToastrService } from 'ngx-toastr';


@Component({
  providers: [],
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})
export class PostListComponent implements OnInit {
  isActivated: any;
  userDetails: any;
  postList: Post[];
  likedPostId: number;
  disLikedPostId: number;
  curLikes: number;
  curDisLikes: number;
  filteredPostList: any;
  filterCurUserId: string;
  curUserId: string;
  token: string;
  lwfilter: Date;
  mostrtd: number;
  likedposts: number[];
  disLikedposts: number[];
  p = 1;
  filter: string;
  cpost: any;
  curPost: Post;

  constructor(private authGuard: AuthGuard,
              private postService: PostService, private router: Router,
              private currentUserService: CurrentUserService, private actrouter: ActivatedRoute,
              private toastr: ToastrService) { }
  ngOnInit() {
    this.isActivated = this.authGuard.canActivate(null, null);
    this.likedPostId = null;
    this.disLikedPostId = null;
    this.lwfilter = null;
    this.token = sessionStorage.getItem('token');
    if (this.token !== null) {
      this.curUserId = this.currentUserService.getCurrentUserId(this.token);
    }
    this.postService.getPosts().subscribe(
      resultArray => {
        console.log(resultArray);
        return this.postList = resultArray;
      },
      error => console.log('Error :: ' + error)
    );
    this.actrouter.paramMap.subscribe(params => {
      switch (params.get('filter')) {
        case 'myUploads':
          this.lwfilter = null;
          this.mostrtd = 0;
          this.filterCurUserId = this.currentUserService.getCurrentUserId(this.token);
          break;
        case 'mostRated':
          this.lwfilter = null;
          this.filterCurUserId = null;
          this.mostrtd = 1;
          break;
        case 'lastWeek':
          this.filterCurUserId = null;
          this.mostrtd = 0;
          this.lwfilter = new Date();
          break;
        case 'default':
          this.filterCurUserId = null;
          this.mostrtd = 0;
          this.lwfilter = null;
          this.likedposts = [];
          this.disLikedposts = [];
          this.postService.getPosts().subscribe(
            resultArray => {
              console.log(resultArray);
              return this.postList = resultArray;
            },
            error => console.log('Error :: ' + error)
          );
      }
    });
    this.cpost = {
      Id: null,
      Title: '',
      Description: '',
      PostedDateTime: null,
      Rating: 0,
      Likes: [],
      DisLikes: [],
      AuthorFullName: '',
      ApplicationUserId: '',
      ImagePath: 'assets/default.jpg',
      Image: null
    };
  }

  postDetails(id: number) {
    this.router.navigate(['posts/detail/', id]);
  }

  like(post: Post) {
    if (this.token !== null) {
      if (!this.isContainFromBase(post, this.curUserId) && !this.isContainCurr(post)) {
        this.curLikes = null;
        this.curDisLikes = null;
        this.likedposts.push(post.Id);
        this.likedPostId = post.Id;
        this.postService.likePost(this.token, post.Id).subscribe(x => {
          this.cpost = x;
          this.curDisLikes = this.cpost.DisLikes.length;
          this.curLikes = this.cpost.Likes.length;
        });
      } else {
        this.toastr.error('You can vote only one time.', 'Voting failed.');
      }
    } else {
      this.toastr.error('Only registered users can vote.', 'Voting failed.');
    }
  }

  disLike(post: Post) {
    if (this.token !== null) {
      if (!this.isContainFromBase(post, this.curUserId) && !this.isContainCurr(post)) {
        this.curLikes = null;
        this.curDisLikes = null;
        this.disLikedposts.push(post.Id);
        this.disLikedPostId = post.Id;
        this.postService.disLikePost(this.token, post.Id).subscribe(x => {
          this.cpost = x;
          this.curDisLikes = this.cpost.DisLikes.length;
          this.curLikes = this.cpost.Likes.length;
        });
      } else {
        this.toastr.error('You can vote only one time.', 'Voting failed.');
      }
    } else {
      this.toastr.error('Only registered users can vote.', 'Voting failed.');
    }
  }
  getUserId() {
    this.currentUserService.getCurrentUserId(this.token);
  }

  isContainFromBase(post: Post, curUserId: string) {
    if (post.Likes.length > 0 && post.Likes.some(l => l.ApplicationUserId === curUserId)) {
      return true;
    } else if (post.DisLikes.length > 0 && post.DisLikes.some(l => l.ApplicationUserId === curUserId)) {
      return true;
    } else {
      return false;
    }
  }

  isContainCurr(post: Post) {
    return this.likedposts.some(lp => lp === post.Id) || this.disLikedposts.some(dp => dp === post.Id);
  }

  getRating() {
    return this.curLikes - this.curDisLikes;
  }
}
