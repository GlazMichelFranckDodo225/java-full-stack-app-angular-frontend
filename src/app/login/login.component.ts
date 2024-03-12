import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'John Doe'; // Default Value
  password: string = '1234'; // Default Value
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if (this.username === 'John Doe' && this.password === '1234') {
      // Redirect to Welcome Page
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
