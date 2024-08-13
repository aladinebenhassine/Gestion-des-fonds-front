import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Projet} from "../../../utils/models/models";
import {AuthService} from "../../../auth/service/auth.service";

@Component({
  selector: 'PopupAjoutUserComponent',
  templateUrl: './popupAjout.component.html',
  styleUrls: ['./popupAjout.component.scss']
})
export class popupAjoutUserComponent implements OnInit {
  @Output() close = new EventEmitter();
  registerForm: FormGroup;
project:Projet = new Projet();
  roles: string[] = [
    'Gestionnaire de fonds',
    'Investisseur',
    'Souscripteur',
    'Administrateur'
  ];
  constructor(    public fb: FormBuilder, private userService : AuthService) { }

  ngOnInit() {
    this.initializeForm();
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
      this.userService.register(form)
        .subscribe(res => {
          this.close.emit();
        }, (err) => {
          console.log(err);
          alert(err.error);
        });

    }


  }
