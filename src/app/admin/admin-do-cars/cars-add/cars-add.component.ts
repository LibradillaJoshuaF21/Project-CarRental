import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarsService } from 'src/app/shared/admin-cars/cars.service';
import { Car } from 'src/app/shared/admin-cars/cars';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  addCarForm = this.fb.group({
    cmodel: ['',{
      validators: [Validators.required],
    }],
    cbrand: ['',{
      validators: [Validators.required],
    }],
    ctype: ['',{
      validators: [Validators.required],
    }],
    transmission: ['',{
      validators: [Validators.required],
    }],
    seats: ['',{
      validators: [Validators.required],
    }],
  })

  constructor(private fb: FormBuilder, private cservice: CarsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const payload: Car = {
      key: '',
      model: this.f.cmodel.value,
      brand: this.f.cbrand.value,
      type: this.f.ctype.value,
      transmission: this.f.transmission.value,
      seats: this.f.seats.value
    };
      this.cservice.addCar(payload);
      this.addCarForm.reset();
  }

  get f(){
    return this.addCarForm.controls;
  }
}
