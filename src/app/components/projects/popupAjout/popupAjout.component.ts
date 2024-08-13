import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../service/project.service";
import {Projet} from "../../../utils/models/models";

@Component({
  selector: 'PopupAjoutProjetComponent',
  templateUrl: './popupAjout.component.html',
  styleUrls: ['./popupAjout.component.scss']
})
export class popupAjoutProjectsComponent implements OnInit {
  @Output() close = new EventEmitter();
  projetForm: FormGroup;
project:Projet = new Projet();
  constructor(    public fb: FormBuilder, private projectService : ProjectService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.projetForm = this.fb.group({
      promoteur: ['', Validators.required],
      dateContact: ['', Validators.required],
      nomPromoteur: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      experiencePromoteur: ['', Validators.required],
      agePromoteur: ['', Validators.required],
      diplome: ['', Validators.required],
      observations: ['', Validators.maxLength(200)],
      calendrier: ['', Validators.required],
      nomProjet: ['', Validators.required],
      activiteProjet: ['', Validators.required],
      secteurProjet: ['', Validators.required],
      capitalSocial: ['', Validators.required],
      phaseInvestissement: ['', Validators.required],
      adresseSiege: ['', Validators.required],
      adresseUsine: ['', Validators.required],
      observationsProjet: ['', Validators.maxLength(200)],
      nomContact: ['', Validators.required],
      emailContact: ['', [Validators.required, Validators.email]],
      telContact: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      activiteContact: ['', Validators.required],
      observationsContact: ['', Validators.maxLength(200)]
    });
  }
  onClose(){
    this.close.emit();
  }
  onSubmit() {
    this.project.promoteur = this.projetForm.get('promoteur').value;
    this.project.dateContact = this.projetForm.get('dateContact').value;
    this.project.nomPromoteur = this.projetForm.get('nomPromoteur').value;
    this.project.email = this.projetForm.get('email').value;
    this.project.tel = this.projetForm.get('tel').value;
    this.project.experiencePromoteur = this.projetForm.get('experiencePromoteur').value;
    this.project.agePromoteur = this.projetForm.get('agePromoteur').value;
    this.project.diplome = this.projetForm.get('diplome').value;
    this.project.observations = this.projetForm.get('observations').value;
    this.project.calendrier = this.projetForm.get('calendrier').value;
    this.project.nomProjet = this.projetForm.get('nomProjet').value;
    this.project.activiteProjet = this.projetForm.get('activiteProjet').value;
    this.project.secteurProjet = this.projetForm.get('secteurProjet').value;
    this.project.capitalSocial = this.projetForm.get('capitalSocial').value;
    this.project.phaseInvestissement = this.projetForm.get('phaseInvestissement').value;
    this.project.adresseSiege = this.projetForm.get('adresseSiege').value;
    this.project.adresseUsine = this.projetForm.get('adresseUsine').value;
    this.project.observationsProjet = this.projetForm.get('observationsProjet').value;
    this.project.nomContact = this.projetForm.get('nomContact').value;
    this.project.emailContact = this.projetForm.get('emailContact').value;
    this.project.telContact = this.projetForm.get('telContact').value;
    this.project.activiteContact = this.projetForm.get('activiteContact').value;
    this.project.observationsContact = this.projetForm.get('observationsContact').value;
    this.projectService.createProject(this.project).subscribe(
      (createdProject: Projet) => {
        console.log('Project created:', createdProject);
        this.close.emit();

      },
      (error) => {
        console.error('Failed to create project:', error);
      }
    );
  }

  }
