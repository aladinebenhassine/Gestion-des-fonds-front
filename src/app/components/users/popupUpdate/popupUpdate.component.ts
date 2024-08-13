import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Fonds, Projet} from "../../../utils/models/models";
import {AuthService} from "../../../auth/service/auth.service";

@Component({
  selector: 'popupupdate-User',
  templateUrl: './popupUpdate.component.html',
  styleUrls: ['./popupUpdate.component.scss']
})
export class popupUpdateUserComponent implements OnInit {
  registerForm: FormGroup;
  project:Projet = new Projet();
  roles: string[] = [
    'Gestionnaire de fonds',
    'Investisseur',
    'Souscripteur',
    'Administrateur'
  ];
  @Input() userToUpdate;
  @Output() close = new EventEmitter();
  constructor(public fb: FormBuilder,private authService: AuthService) { }

  ngOnInit() {
    console.log("hello update opened");

    this.initializeForm();

    this.registerForm.get('fullname').setValue(this.userToUpdate.fullname);
    this.registerForm.get('email').setValue(this.userToUpdate.email);
    this.registerForm.get('password').setValue(this.userToUpdate.password);
    this.registerForm.get('role').setValue(this.userToUpdate.role);



  }
    initializeForm() {
      this.registerForm = this.fb.group({
        'fullname' : [null, Validators.required],
        'email' : [null, Validators.required],
        'password' : [null, Validators.required],
        'role' : [null, Validators.required]

      });
    }
  onClose(){
    this.close.emit();
  }


  onFormSubmit(form: NgForm) {
    debugger;
    this.authService.update(form)
      .subscribe(res => {
        this.close.emit();
      }, (err) => {
        console.log(err);
        alert(err.error);
      });

  }
}
