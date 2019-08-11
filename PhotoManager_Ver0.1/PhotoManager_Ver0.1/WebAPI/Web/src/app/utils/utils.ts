import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
    decoded: any;
    user: any;
    getCurrentUserId(token: string) {
            if (token !== null) {
                this.decoded = jwt_decode(token);
                const userId =  this.decoded.UserID;
                return userId;
            }
            return null;
    }
    getCurrentUserFName() {
        if (sessionStorage.getItem('token') != null) {
            return this.user = sessionStorage.getItem('curUserFName');
        }
    }
    getCurrentUserLName() {
        if (sessionStorage.getItem('token') != null) {
            return this.user = sessionStorage.getItem('curUserLName');
        }
    }
}
