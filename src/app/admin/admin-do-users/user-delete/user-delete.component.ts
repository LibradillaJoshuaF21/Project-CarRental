import { Component, OnInit, Input} from '@angular/core';
import { UserServiceService } from 'src/app/shared/user-service.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Input('sendUserID') userID!: string;

  constructor(private uservice: UserServiceService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.uservice.removeUser(this.userID);
  }

}
