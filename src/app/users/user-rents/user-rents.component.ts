import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-rents',
  templateUrl: './user-rents.component.html',
  styleUrls: ['./user-rents.component.css']
})
export class UserRentsComponent implements OnInit {

  submitted = false;

  rentDetail = this.fb.group({
    carName: ['', {
      validators: [Validators.required, Validators.nullValidator]
    }],
    startDate: ['', {
      validators: [Validators.required]
    }],
    endDate: ['', {
      validators: [Validators.required]
    }],
  })



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.rentDetail.controls;}

  onSubmit(){
    this.submitted = true;
    console.log(this.submitted);
  }

}
