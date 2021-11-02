import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() sendUserList: any;
  @Output() selectedUser = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number){
    this.selectedUser.emit(i);
  }
}
