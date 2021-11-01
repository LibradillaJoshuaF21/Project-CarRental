import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-add',
  templateUrl: './reservation-add.component.html',
  styleUrls: ['./reservation-add.component.css']
})
export class ReservationAddComponent implements OnInit {

  submitted = false;

  reserveAddForm = this.fb.group({
    // CUICO FORM ATTRIBUTES HERE
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.reserveAddForm.controls;}

  onSubmit(){
    this.submitted = true;
  }
}
