import { UserLoginComponent } from './../user-login/user-login.component';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  providers: [ UserLoginComponent ],
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styles: []
})
export class UserRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private login: UserLoginComponent,
              public userService: UserService, private router: Router, private toastr: ToastrService) { }

  user: any = {};
  filter: string;
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

  ngOnInit() {
    this.formModel.reset();
  }

  onSubmit() {
    this.userService.register(this.formModel).subscribe(
      (res: any) => {
        if (res.Succeeded) {
          this.userService.login(this.formModel.value.Email, this.formModel.value.Passwords.Password).subscribe(
            (log: any) => {
                sessionStorage.setItem('token', log.token);
                sessionStorage.setItem('curUserFName', log.userFName);
                sessionStorage.setItem('curUserLName', log.userLName);
                this.router.navigateByUrl('/root').then(c => location.reload()).then(
                    r => this.toastr.success('New user created!', 'Registration successful.'));
            });
          this.formModel.reset();
        } else {
          res.Errors.forEach(element => {
            switch (element.Code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;
              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
