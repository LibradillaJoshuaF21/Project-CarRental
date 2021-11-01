import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {

  submitted = false;

  editCarForm = this.fb.group({
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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.editCarForm.controls;}

  onSubmit(){
    this.submitted = true;
  }
}
