import { Component, OnInit } from '@angular/core';
// Router
import { Router } from '@angular/router';
// Service
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: AuthService
  ) { }

  ngOnInit() {
  }

  // onLoadServers() {
  //   this.router.navigate(['/servers']);
  // }

  onLoadServer(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'],
      {
        queryParams: {
          allowEdit: '1'
        },
        fragment: 'loading'
      });
  }

  onLogin() {
    this.loginService.login();
  }

  onLogout() {
    this.loginService.logout();
  }
}
