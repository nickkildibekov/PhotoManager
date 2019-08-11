import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styles: []
})
export class CreatePostComponent implements OnInit {
  post: Post;
  formData: Post;
  fileToUpload: File = null;
  filter: string;
  imageUrl = '../../../assets/default.png';
  constructor(public postService: PostService, private location: Location, private router: Router) { }
  ngOnInit() {
    this.resetForm();
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      Id: null,
      Title: '',
      Description: '',
      PostedDateTime: null,
      Likes: [],
      DisLikes: [],
      Rating: 0,
      AuthorFullName: '',
      ApplicationUserId: '',
      ImagePath: 'assets/default.png',
      Image: null
    };
  }
  onSubmit(Title, Description, Image) {
    this.postService.addPost(Title.value, Description.value, this.fileToUpload).subscribe(data => {
      console.log('done');
      this.imageUrl = '';
      this.resetForm();
      this.filter = 'default';
      this.router.navigate(['posts/list/', this.filter]);
    });
  }

  onBack() {
    this.location.back();
  }
}
