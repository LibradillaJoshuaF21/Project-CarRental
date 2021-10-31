import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  loginForm = this.fb.group({
    username: ['',{
      validators: [Validators.required]
    }], 
    password: ['',{
      validators: [Validators.required]
    }]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.loginForm.controls;}

  onSubmit(){
      this.submitted = true;
      console.log(this.submitted);
  }

}
