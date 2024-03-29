import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message: string = 'Some Welcomme Message';
  name: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.message = 5; ==> Compilation Error
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
}
}
