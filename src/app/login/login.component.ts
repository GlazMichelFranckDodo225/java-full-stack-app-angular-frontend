import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'John Doe'; // Default Value
  password: string = '1234'; // Default Value

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    console.log(this.username);
  }
}
