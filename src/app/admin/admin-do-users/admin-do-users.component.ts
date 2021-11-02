import { Component, OnInit} from '@angular/core';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-admin-do-users',
  templateUrl: './admin-do-users.component.html',
  styleUrls: ['./admin-do-users.component.css']
})
export class AdminDoUsersComponent implements OnInit {

  userList = [] as any;
  editing = false;
  editUserIndex!: number;

  constructor(private uservice: UserServiceService) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  onEdit(index: any) {
    this.editing = true;
    this.editUserIndex = index;
  }

  editComplete(value: any){
    this.editing = value;
    this.editUserIndex = null as any;
  }
}
