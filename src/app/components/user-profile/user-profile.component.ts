import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {User} from "../../utils/models/models";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  registerForm: FormGroup;
  modifier = false;
  user : User= new User();
  roles: string[] = [
    'Gestionnaire de fonds',
    'Investisseur',
    'Souscripteur',
    'Administrateur'
  ];
  constructor(private authService: AuthService,public fb: FormBuilder) { }

  ngOnInit() {
    this.getProfile();
    this.initializeForm();
    this.registerForm.get('fullname').setValue(this.user.fullname);
    this.registerForm.get('email').setValue(this.user.email);
    this.registerForm.get('password').setValue(this.user.password);
    this.registerForm.get('role').setValue(this.user.role);
  }
  getProfile(){
    this.authService.getThisUser().subscribe(res =>{ this.user = res;
    debugger;});
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      'fullname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'role' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.authService.update(form)
      .subscribe(res => {
      }, (err) => {
        console.log(err);
        alert(err.error);
      });

  }
}
