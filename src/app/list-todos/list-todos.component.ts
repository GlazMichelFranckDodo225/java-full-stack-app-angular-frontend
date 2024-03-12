import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe]
})
export class ListTodosComponent implements OnInit {
  todos = [
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Export at Angular' },
    { id: 3, description: 'Visit India' },
  ];

  /* todo = {
    id: 1,
    description: 'Learn to Dance'
  }; */

  constructor() {}

  ngOnInit(): void {}
}
