import { MyUploadsFilterPipe } from './posts/pipes/my-uploads-filter.pipe';
import { TopContributorsFilterPipe } from './users/pipes/top-contributors-filter.pipe';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { MostRatedFilterPipe } from './posts/pipes/most-rated-filter.pipe';
import { LastWeekFilterPipe } from './posts/pipes/last-week-filter.pipe';

import { UserService } from 'src/app/shared/services/user.service';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { UsersComponent} from './users/users.component';


import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from 'src/app/shared/services/post.service';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { CreatePostComponent } from './posts/post-create/create-post.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/posts/list/:filter', pathMatch: 'full' },
  { path: 'root', component: AppComponent},
  {
    path: 'posts', component: PostsComponent,
    children: [
      { path: 'list/:filter', component: PostListComponent, data: { title: 'List of Posts' } },
      { path: 'create', component: CreatePostComponent, data: { title: 'Create Post' } },
      { path: 'detail/:Id', component: PostDetailComponent, data: { title: 'Post Details' } },
      { path: 'edit/:Id', component: PostEditComponent, data: { title: 'Edit Post' } },
    ]
  },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: 'list/:filter', component: UsersListComponent, data: { title: 'List of Users' } },
      { path: 'registration', component: UserRegistrationComponent , data: { title: 'Registration' } },
      { path: 'login', component: UserLoginComponent , data: { title: 'Login' } },
      { path: 'detail/:Id', component: UserDetailComponent, data: { title: 'User Details' } },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,

    PostsComponent,
    PostDetailComponent,
    PostListComponent,
    CreatePostComponent,
    PostEditComponent,

    MyUploadsFilterPipe,
    LastWeekFilterPipe,
    MostRatedFilterPipe,
    TopContributorsFilterPipe,

    UsersComponent,
    UsersListComponent,
    UserRegistrationComponent,
    UserDeleteComponent,
    UserDetailComponent,
    UserLoginComponent,

    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
