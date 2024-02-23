import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'John Doe'; // Default Value
  password: string = '1234'; // Default Value
  errorMessage: string = "Invalid Credentials";
  invalidLogin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if(this.username === "John Doe" && this.password === "1234") {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
