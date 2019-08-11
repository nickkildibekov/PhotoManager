import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Location} from '@angular/common';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styles: []
})
export class PostDetailComponent implements OnInit {
  Id: number;
  post: any;
  filter: string;
  constructor(private actrouter: ActivatedRoute, private toastr: ToastrService,
              public postService: PostService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.actrouter.paramMap.subscribe(params => {
      console.log(params.get('Id'));
      this.postService.getPostById(+params.get('Id')).subscribe(c => {
        console.log(c);
        this.post = c;
      });
    });
  }

  onBack() {
    this.location.back();
  }
  onEdit(Id: number) {
    this.router.navigate(['posts/edit/', Id]);
   }
  onDelete(Id: number) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.postService.deletePost(Id)
      .subscribe(x => {
        this.filter = 'default';
        this.router.navigate(['posts/list/', this.filter]);
        this.toastr.warning('Deleted Successfully', 'Post Info');
      });
    }
  }
}
