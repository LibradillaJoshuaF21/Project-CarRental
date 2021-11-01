import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {

  submitted = false;

  reserveEditForm = this.fb.group({
    // CUICO FORM ATTRIBUTES HERE
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.reserveEditForm.controls;}

  onSubmit(){
    this.submitted = true;
  }
}
