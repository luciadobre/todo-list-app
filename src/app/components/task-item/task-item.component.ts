import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../Task';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  faSquare = faSquare;

  constructor() {}

  ngOnInit(): void {

  }

}
