import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/admin-cars/cars.service';

@Component({
  selector: 'app-admin-do-cars',
  templateUrl: './admin-do-cars.component.html',
  styleUrls: ['./admin-do-cars.component.css']
})
export class AdminDoCarsComponent implements OnInit {

  carList = [] as any;
  editing = false;
  editCarIndex!: number;


  constructor(private cservice: CarsService) { }

  ngOnInit(): void {
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
  }

  onEdit(index: any) {
    this.editing = true;
    this.editCarIndex = index;
  }

  editComplete(value: any){
    this.editing = value;
    this.editCarIndex = null as any;
  }

}
