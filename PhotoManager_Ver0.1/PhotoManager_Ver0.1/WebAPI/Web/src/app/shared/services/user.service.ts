import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44327/api/';
  curUserId: string;

  formModel = this.fb.group({
    Email: ['', Validators.email],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Phone: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  loginFormModel = this.fb.group({
    Email: ['', Validators.email],
    Password: ['', [Validators.required, Validators.minLength(6)]]
  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');

    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value !== confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register(formModel) {
    const body = {
      Email: formModel.value.Email,
      FirstName: formModel.value.FirstName,
      LastName: formModel.value.LastName,
      Phone: formModel.value.Phone,
      Password: formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + 'applicationUsers/Register', body);
  }

  login(email: string, password: string) {
    const formData: FormData = new FormData();
    formData.append('Email', email);
    formData.append('Password', password);
    return this.http.post(this.BaseURI + 'applicationUsers/Login', formData);
  }

  private handleError<T>({ operation = 'operation', result }: { operation?: string; result?: T; } = {}) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BaseURI + 'applicationUsers/')
      .pipe(
        tap(list => console.log(list)),
        catchError(this.handleError({ operation: 'getUsers', result: [] }))
      );
  }
}

