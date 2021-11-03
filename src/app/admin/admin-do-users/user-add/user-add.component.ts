import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

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
  });

  constructor(private fb: FormBuilder, private uservice: UserServiceService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    const payload: User = {
      key: '',
      firstName: this.f.fname.value,
      lastName: this.f.lname.value,
      address: this.f.address.value,
      email: this.f.email.value,
      contactNumber: this.f.contactnum.value,
      password: this.f.rpassword.value
    };
      this.uservice.addUser(payload);
      this.addUserForm.reset();
  }

  get f(){
    return this.addUserForm.controls;
  }
}
