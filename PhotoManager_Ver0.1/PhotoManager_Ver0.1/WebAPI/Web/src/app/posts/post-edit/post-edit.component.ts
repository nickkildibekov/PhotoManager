import { PostService } from 'src/app/shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styles: []
})

export class PostEditComponent implements OnInit {
  post: any;
  fileToUpload: File = null;
  filter: string;
  constructor(private actrouter: ActivatedRoute, public postService: PostService,
              private location: Location,  private router: Router) { }
  ngOnInit() {
    this.actrouter.paramMap.subscribe(params => {
      console.log(params.get('Id'));
      this.postService.getPostById(+params.get('Id')).subscribe(c => {
        console.log(c);
        this.post = c;
      });
    });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.post.ImagePath = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  onSubmit(Id, Title, Description) {
    this.postService.updatePost(Id.value, Title.value, Description.value, this.fileToUpload).subscribe(data => {
      this.filter = 'default';
      this.router.navigate(['posts/list/', this.filter]);
    });
  }

  onBack() {
    this.location.back();
  }
}
