import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/shared/admin-cars/cars.service';
import { Car } from 'src/app/shared/admin-cars/cars';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {

  @Input('sendCarInfo') car!: Car;
  @Output() editStatus = new EventEmitter<boolean>();

  editCarForm!: FormGroup;

  constructor(private fb: FormBuilder, private cservice: CarsService) { }

  ngOnInit(): void {
    this.editCarForm = this.fb.group({
      key: [this.car.key],
      cmodel: [this.car.model, Validators.required],
      cbrand: [this.car.brand, Validators.required],
      ctype: [this.car.type, Validators.required],
      transmission: [this.car.transmission, Validators.required],
      seats: [this.car.seats, Validators.required],
    });
  }
  
  ngOnChanges(): void {
    this.editCarForm = this.fb.group({
      key: [this.car.key],
      cmodel: [this.car.model, Validators.required],
      cbrand: [this.car.brand, Validators.required],
      ctype: [this.car.type, Validators.required],
      transmission: [this.car.transmission, Validators.required],
      seats: [this.car.seats, Validators.required],
    });
  }

  onSubmit(){
    const payload: Car = {
      key: this.car.key,
      model: this.f.cmodel.value,
      brand: this.f.cbrand.value,
      type: this.f.ctype.value,
      transmission: this.f.transmission.value,
      seats: this.f.seats.value
    };

    this.cservice.modifyCar(this.car.key, payload);
    this.editStatus.emit(false);
  }

  stopEditing(){
    this.editStatus.emit(false);
  }

  passEditStatus(status: any){
    this.editStatus.emit(status);
  }

  get f(){
    return this.editCarForm.controls;
  }
}
