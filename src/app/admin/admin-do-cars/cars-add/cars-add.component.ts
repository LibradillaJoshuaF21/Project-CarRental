import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars-add',
  templateUrl: './cars-add.component.html',
  styleUrls: ['./cars-add.component.css']
})
export class CarsAddComponent implements OnInit {

  submitted = false;

  addCarForm = this.fb.group({
    cmodel: ['',{
      validators: [Validators.required],
    }],
    cbrand: ['',{
      validators: [Validators.required],
    }],
    transmission: ['',{
      validators: [Validators.required],
    }],
    seats: ['',{
      validators: [Validators.required],
    }],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.addCarForm.controls;}

  onSubmit(){
    this.submitted = true;
    console.log(this.addCarForm.controls['transmission'].value);
  }
}
