import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { CurrentUserService } from 'src/app/utils/utils';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://localhost:44327/api/Posts/';
  result: any;
  curUser: any;
  token: string;
  constructor(private fb: FormBuilder, private http: HttpClient, public currentUserService: CurrentUserService) { }

  private handleError<T>({ operation = 'operation', result }: { operation?: string; result?: T; } = {}) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
      .pipe(
        tap(list => console.log(list)),
        catchError(this.handleError({ operation: 'getPosts', result: [] }))
      );
  }

  getPostById(id: number) {
    const url = `${this.apiUrl}${id}`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched Post id=${id}`)),
      catchError(this.handleError<Post>({ operation: `getPostById id=${id}` }))
    );
  }

  addPost(title: string, description: string, fileToUpload: File) {
    this.token = sessionStorage.getItem('token');
    const formData: FormData = new FormData();
    formData.append('Title', title);
    formData.append('Description', description);
    formData.append('File', fileToUpload);
    formData.append('ApplicationUserId', this.currentUserService.getCurrentUserId(this.token));
    formData.append('AuthorFullName', (this.currentUserService.getCurrentUserFName() + ' '
      + this.currentUserService.getCurrentUserLName()));
    return this.http.post(this.apiUrl, formData);
  }

  updatePost(id: string, title: string, description: string, fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('Title', title);
    formData.append('Description', description);
    if (fileToUpload != null) {
      formData.append('File', fileToUpload);

    }
    formData.append('Id', id);

    return this.http.put(this.apiUrl, formData);
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.apiUrl}${id}`;
    return this.http.delete<Post>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Post id=${id}`)),
      catchError(this.handleError<Post>({ operation: 'deletePost' }))
    );
  }

  likePost(token: string, postId: any) {
    const url = `${this.apiUrl}Like/${token}/${postId}`;
    const result = this.http.post(url, httpOptions);
    return result;
  }

  disLikePost(token: string, postId: number) {
    const url = `${this.apiUrl}DisLike/${token}/${postId}`;
    const result = this.http.post(url, httpOptions);
    return result;
  }

  checkForLike(userId: string, postId: number) {
    const url = `${this.apiUrl}CheckForLike/${userId}/${postId}`;
    const result = this.http.post(url, httpOptions);
    return result;
  }

  checkForDisLike(userId: string, postId: number) {
    const url = `${this.apiUrl}CheckForDisLike/${userId}/${postId}`;
    const result = this.http.post(url, httpOptions);
    return result;
  }
}
