import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-rentals-detail',
  templateUrl: './user-rentals-detail.component.html',
  styleUrls: ['./user-rentals-detail.component.css']
})
export class UserRentalsDetailComponent implements OnInit {

  @Input() editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(){
    this.editing = !this.editing;
  }
}
