import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  submitted = false;

  addUserForm = this.fb.group({
    fname: ['',{
      validators: [Validators.required],
    }],
    lname: ['',{
      validators: [Validators.required],
    }],
    address: ['',{
      validators: [Validators.required],
    }],
    email: ['',{
      validators: [Validators.required, Validators.email],
    }],
    contactnum: ['',{
      validators: [Validators.required, Validators.pattern("^[0-9]*$")],
    }],
    rpassword: ['',{
      validators: [Validators.required, Validators.minLength(6)],
    }],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.addUserForm.controls;}

  onSubmit(){
    this.submitted = true;
    console.log(this.submitted);
  }
}
