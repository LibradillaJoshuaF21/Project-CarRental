import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/shared/user-service.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Output() editStatus = new EventEmitter<boolean>();
  @Input('sendUserInfo') user!: User;
  submitted = false;
  editUserForm!: FormGroup;


  constructor(private fb: FormBuilder, private uservice: UserServiceService) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      key: [this.user.key],
      fname: [this.user.firstName, Validators.required],
      lname: [this.user.lastName, Validators.required],
      address: [this.user.address, Validators.required],
      email: [this.user.email, 
        {
          validators: [Validators.required, Validators.email],
        }
      ],
      contactnum: [this.user.contactNumber, 
        {
          validators: [Validators.required, Validators.pattern("^[0-9]*$")],
        }
      ],
      rpassword: [this.user.email, 
        {
          validators: [Validators.required, Validators.minLength(6)],
        }
      ],
    });
  }

  ngOnChanges(): void {
    this.editUserForm = this.fb.group({
      key: [this.user.key],
      fname: [this.user.firstName, Validators.required],
      lname: [this.user.lastName, Validators.required],
      address: [this.user.address, Validators.required],
      email: [this.user.email, 
        {
          validators: [Validators.required, Validators.email],
        }
      ],
      contactnum: [this.user.contactNumber, 
        {
          validators: [Validators.required, Validators.pattern("^[0-9]*$")],
        }
      ],
      rpassword: [this.user.email, 
        {
          validators: [Validators.required, Validators.minLength(6)],
        }
      ],
    });
  }

  onSubmit(){
    const payload: User = {
      key: this.user.key,
      firstName: this.f.fname.value,
      lastName: this.f.lname.value,
      address: this.f.address.value,
      email: this.f.email.value,
      contactNumber: this.f.contactnum.value,
      password: this.f.rpassword.value
    };

    this.uservice.modifyUser(this.user.key, payload);
    this.editStatus.emit(false);
  }
  
  stopEditing(){
    this.editStatus.emit(false);
  }

  get f(){return this.editUserForm.controls;}
}
