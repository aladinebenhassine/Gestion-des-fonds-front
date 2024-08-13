import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import {AuthService} from "../service/auth.service";
/*enum Roles {
  ROLE_GESTIONNAIRE_FOND = 'Gestionnaire de fonds',
  ROLE_INVESTISSEUR = 'Investisseur',
  ROLE_SOUSCRIPTEUR = 'Souscripteur',
  ROLE_ADMINISTRATEUR = 'Administrateur',
} */
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fullname = '';
  email = '';
  password = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  //roles: string[] = Object.values(Roles);
  roles: string[] = [
    'Gestionnaire de fonds',
    'Investisseur',
    'Souscripteur',
    'Administrateur'
  ];
  rolesWA: string[] = [
    'Gestionnaire de fonds',
    'Investisseur',
    'Souscripteur'
  ];
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.setRoles();
    this.registerForm = this.formBuilder.group({
      'fullname' : [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'role' : [this.roles[0], Validators.required]

    });
  }
setRoles(){
  this.authService.isAdmin().subscribe(res=>{
    if(res){
this.roles=this.rolesWA;
    }
  })
}
  onFormSubmit(form: NgForm) {
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['login']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

}
