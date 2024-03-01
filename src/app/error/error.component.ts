import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  constructor() {}

  errorMessage: string = 'An Error Occured. Please Contact Support at ...';

  ngOnInit(): void {}
}
