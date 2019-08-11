import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';

@Component({
    providers: [AppComponent],
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styles: []
})
export class UserLoginComponent implements OnInit {

    loginFormModel = {
        Email: '',
        Password: ''
    };
    constructor(private route: ActivatedRoute, public userService: UserService,
                private router: Router, private toastr: ToastrService, private root: AppComponent) { }

    ngOnInit() {
    }

    onSubmit(Email, Password) {
        this.userService.login(Email.value, Password.value).subscribe(
            (res: any) => {
                sessionStorage.setItem('token', res.token);
                sessionStorage.setItem('curUserFName', res.userFName);
                sessionStorage.setItem('curUserLName', res.userLName);
                this.root.ngOnInit();
                location.reload();
            },
            err => {
                if (err.status === 400) {
                    this.toastr.error('Incorrect email or password.', 'Authentication failed.');
                } else {
                    console.log(err);
                }
            }
        );
    }
}

