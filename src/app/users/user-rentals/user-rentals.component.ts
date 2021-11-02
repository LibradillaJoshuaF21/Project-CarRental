import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-rentals',
  templateUrl: './user-rentals.component.html',
  styleUrls: ['./user-rentals.component.css']
})
export class UserRentalsComponent implements OnInit {

  editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(){
    this.editing = !this.editing;
  }

}
