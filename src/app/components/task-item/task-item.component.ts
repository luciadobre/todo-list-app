import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faSquare, faTrashCan, faCheckSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onCheckTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faSquare = faSquare;
  faTrashCan = faTrashCan;
  faCheckSquare = faCheckSquare;

  constructor() {}

  ngOnInit(): void {

  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onCheck(task: Task) {
    this.onCheckTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
