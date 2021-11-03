import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/shared/admin-cars/cars.service';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.css']
})
export class CarsDeleteComponent implements OnInit {

  @Input('sendCarID') carID!: string;
  @Output() editStatus = new EventEmitter<boolean>();

  constructor(private cservice: CarsService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.cservice.removeCar(this.carID);
    this.editStatus.emit(false);
  }

}
