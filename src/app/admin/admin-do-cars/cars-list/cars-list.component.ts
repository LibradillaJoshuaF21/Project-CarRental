import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input('sendCarList') carList: any;
  @Output() selectedCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number){
    this.selectedCar.emit(i);
  }

}
