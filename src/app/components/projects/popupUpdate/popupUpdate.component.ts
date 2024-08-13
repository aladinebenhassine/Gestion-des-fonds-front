import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectService} from "../service/project.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Fonds, Projet} from "../../../utils/models/models";

@Component({
  selector: 'popupupdate-projet',
  templateUrl: './popupUpdate.component.html',
  styleUrls: ['./popupUpdate.component.scss']
})
export class popupUpdateProjectsComponent implements OnInit {
  projetForm: FormGroup;
  project:Projet = new Projet();
  page=false;
  @Input() projectToUpdate;
  @Output() close = new EventEmitter();
  constructor(public fb: FormBuilder,private projectService: ProjectService) { }

  ngOnInit() {
    console.log("hello update opened");

    this.initializeForm();

    this.projetForm.get('promoteur').setValue(this.projectToUpdate.promoteur);
    debugger;
    this.projetForm.get('dateContact').setValue(this.projectToUpdate.dateContact);
    this.projetForm.get('nomPromoteur').setValue(this.projectToUpdate.nomPromoteur);
    this.projetForm.get('email').setValue(this.projectToUpdate.email);
    this.projetForm.get('tel').setValue(this.projectToUpdate.tel);
    this.projetForm.get('experiencePromoteur').setValue(this.projectToUpdate.experiencePromoteur);
    this.projetForm.get('agePromoteur').setValue(this.projectToUpdate.agePromoteur);
    this.projetForm.get('diplome').setValue(this.projectToUpdate.diplome);
    this.projetForm.get('observations').setValue(this.projectToUpdate.observations);
    this.projetForm.get('calendrier').setValue(this.projectToUpdate.calendrier);
    this.projetForm.get('nomProjet').setValue(this.projectToUpdate.nomProjet);
    this.projetForm.get('activiteProjet').setValue(this.projectToUpdate.activiteProjet);
    this.projetForm.get('secteurProjet').setValue(this.projectToUpdate.secteurProjet);
    this.projetForm.get('capitalSocial').setValue(this.projectToUpdate.capitalSocial);
    this.projetForm.get('phaseInvestissement').setValue(this.projectToUpdate.phaseInvestissement);
    this.projetForm.get('adresseSiege').setValue(this.projectToUpdate.adresseSiege);
    this.projetForm.get('adresseUsine').setValue(this.projectToUpdate.adresseUsine);
    this.projetForm.get('observationsProjet').setValue(this.projectToUpdate.observationsProjet);
    this.projetForm.get('nomContact').setValue(this.projectToUpdate.nomContact);
    this.projetForm.get('emailContact').setValue(this.projectToUpdate.emailContact);
    this.projetForm.get('telContact').setValue(this.projectToUpdate.telContact);
    this.projetForm.get('activiteContact').setValue(this.projectToUpdate.activiteContact);
    this.projetForm.get('observationsContact').setValue(this.projectToUpdate.observationsContact);


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
    this.project.id = this.projectToUpdate.id;
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
    this.projectService.updateProject(this.project).subscribe(
      (createdProject: Projet) => {
        this.close.emit();
        console.log('Project updated:', createdProject);
      },
      (error) => {
        console.error('Failed to update project:', error);
      }
    );
  }
}
