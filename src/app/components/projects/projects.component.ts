import {Component, OnInit } from '@angular/core';
import {Projet} from "../../utils/models/models";
import {ProjectService} from "./service/project.service";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  ajout : boolean = false;
  modifier : boolean = false;
projetToUpdate : Projet = new Projet();
  projets: Projet[];
  filterName="";
  sortField: string = '';
  sortOrder: string = 'asc';
  role="";
  constructor(private projectService : ProjectService,private authService: AuthService) { }

  ngOnInit() {
    this.getProjects();
    this.role= this.authService.role;
  }
  togglePopup(){
    this.ajout=!this.ajout;
    this.getProjects();
  }
  getProjects(){
    this.projectService.getProjects().subscribe(res => this.projets=res);
  }

  update(projet : Projet){
    console.log("update")
this.projetToUpdate=projet;
    this.modifier = !this.modifier;

  }
  delete(id){
    console.log("delete")
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce projet?')) {
      this.projectService.deleteProject(id).subscribe(res => {console.log('delete')},error => {},()=>{
        this.getProjects()
      })    }
  }
  afficher(projet : Projet) {
    console.log("affichage");
    window.alert(
      "ID: " + projet.id + "\n" +
      "Promoteur: " + projet.promoteur + "\n" +
      "Date de contact: " + projet.dateContact + "\n" +
      "Nom du promoteur: " + projet.nomPromoteur + "\n" +
      "Email: " + projet.email + "\n" +
      "Téléphone: " + projet.tel + "\n" +
      "Expérience du promoteur: " + projet.experiencePromoteur + "\n" +
      "Âge du promoteur: " + projet.agePromoteur + "\n" +
      "Diplôme: " + projet.diplome + "\n" +
      "Observations: " + projet.observations + "\n" +
      "Calendrier: " + projet.calendrier + "\n" +
      "Nom du projet: " + projet.nomProjet + "\n" +
      "Activité du projet: " + projet.activiteProjet + "\n" +
      "Secteur du projet: " + projet.secteurProjet + "\n" +
      "Capital social: " + projet.capitalSocial + "\n" +
      "Phase d'investissement: " + projet.phaseInvestissement + "\n" +
      "Adresse du siège: " + projet.adresseSiege + "\n" +
      "Adresse de l'usine: " + projet.adresseUsine + "\n" +
      "Observations du projet: " + projet.observationsProjet + "\n" +
      "Nom du contact: " + projet.nomContact + "\n" +
      "Email du contact: " + projet.emailContact + "\n" +
      "Téléphone du contact: " + projet.telContact + "\n" +
      "Activité du contact: " + projet.activiteContact + "\n" +
      "Observations du contact: " + projet.observationsContact + "\n"
    );
  }

  sort(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }

    this.projets.sort((a: Projet, b: Projet) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortOrder === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return this.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });
  }

  getSortIndicator(field: string): string {
    if (this.sortField === field) {
      return this.sortOrder === 'asc' ? '▲' : '▼';
    } else {
      return '';
    }
  }

}
