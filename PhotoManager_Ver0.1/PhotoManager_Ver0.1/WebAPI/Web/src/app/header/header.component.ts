import { AuthGuard } from 'src/app/auth/auth.guard';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
  providers: [AppComponent]
})
export class HeaderComponent implements OnInit, OnChanges {
  isActivated: any;
  firstName: string;
  lastName: string;
  filter: string;
  constructor(private root: AppComponent, private router: Router, private authGuard: AuthGuard) { }

  ngOnInit() {
    this.isActivated = this.authGuard.canActivate(null, null);
    if (this.isActivated) {
      this.firstName = sessionStorage.getItem('curUserFName');
      this.lastName = sessionStorage.getItem('curUserLName');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.firstName = changes.firstName.currentValue;
    this.lastName = changes.lastName.currentValue;

  }

  onLogout() {
    sessionStorage.removeItem('token');
    location.reload();

  }
  onUploadsFilter() {
    this.filter = 'myUploads';
    this.router.navigate(['posts/list/', this.filter]);
  }
  topContribFilter() {
    this.filter = 'topContrib';
    this.router.navigate(['users/list/', this.filter]);
  }
  lastWeekFilter() {
    this.filter = 'lastWeek';
    this.router.navigate(['posts/list/', this.filter]);
  }
  mostRatedFilter() {
    this.filter = 'mostRated';
    this.router.navigate(['posts/list/', this.filter]);
  }
  defaultFilter() {
    this.filter = 'default';
    this.router.navigate(['posts/list/', this.filter]);
  }
}
