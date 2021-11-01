import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  submitted = false;

  editUserForm = this.fb.group({
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

  get f(){return this.editUserForm.controls;}

  onSubmit(){
    this.submitted = true;
    console.log(this.submitted);
  }
}
