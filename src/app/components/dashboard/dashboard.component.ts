import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../utils/variables/charts";
import {ProjectService} from "../projects/service/project.service";
import {FundsService} from "../funds/service/funds.service";
import {AuthService} from "../../auth/service/auth.service";
import {Fonds, Projet} from "../../utils/models/models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  projectSize:number;
  fundSize:number;
  userSize:number;


  projets:Projet[];
  fonds:Fonds[];

  constructor(private projectService : ProjectService,private fundService : FundsService,private userService : AuthService) { }

  ngOnInit() {

    this.getProjects();
    this.getfonds();
    this.getUsers();


  }



  getProjects(){
    this.projectService.getProjects().subscribe(res => {this.projectSize=res.length;
      this.projets=res;});
  }
  getfonds(){
    this.fundService.getFonds().subscribe(res =>{ this.fundSize=res.length;
      this.fonds=res});
  }
  getUsers(){
    this.userService.getUsers().subscribe(res => this.userSize=res.length);
  }
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }



  projetsQR(): string {
    /*

     const data = {
       projets: this.projets,
       funds: this.fonds,
     };

     return JSON.stringify(data); */


    let data = 'Projet : ';

    this.projets.forEach((projet, index) => {
      data += `Projet ${index + 1}:\n`;
      data += `ID: ${projet.id}\n`;
      data += `Promoteur: ${projet.promoteur}\n`;
      data += `Date Contact: ${projet.dateContact}\n`;
      data += `Nom Promoteur: ${projet.nomPromoteur}\n`;
      data += `Email: ${projet.email}\n`;
      data += `Tel: ${projet.tel}\n`;
      data += `Experience Promoteur: ${projet.experiencePromoteur}\n`;
      data += `Age Promoteur: ${projet.agePromoteur}\n`;
      data += `Diplome: ${projet.diplome}\n`;
      data += `Observations: ${projet.observations}\n`;
      data += `Calendrier: ${projet.calendrier}\n`;
      data += `Nom Projet: ${projet.nomProjet}\n`;
      data += `Activite Projet: ${projet.activiteProjet}\n`;
      data += `Secteur Projet: ${projet.secteurProjet}\n`;
      data += `Capital Social: ${projet.capitalSocial}\n`;
      data += `Phase Investissement: ${projet.phaseInvestissement}\n`;
      data += `Adresse Siege: ${projet.adresseSiege}\n`;
      data += `Adresse Usine: ${projet.adresseUsine}\n`;
      data += `Observations Projet: ${projet.observationsProjet}\n`;
      data += `Nom Contact: ${projet.nomContact}\n`;
      data += `Email Contact: ${projet.emailContact}\n`;
      data += `Tel Contact: ${projet.telContact}\n`;
      data += `Activite Contact: ${projet.activiteContact}\n`;
      data += `Observations Contact: ${projet.observationsContact}\n`;

      // Add a blank line between funds for readability
      data += '\n';
    });

    return data;

  }






  fondsQR(): string {
    /*

     const data = {
       projets: this.projets,
       funds: this.fonds,
     };

     return JSON.stringify(data); */


    let data = 'Fonds : ';
    //fund
    this.fonds.forEach((fund, index) => {
      data += `Fonds ${index + 1}:\n`;
      data += `ID: ${fund.id}\n`;
      data += `NomFonds: ${fund.nomFonds}\n`;
      data += `MontantProjete: ${fund.montantProjete}\n`;
      data += `DureeFonds: ${fund.dureeFonds}\n`;
      data += `DateCreation: ${fund.dateCreation}\n`;
      data += `PeriodesSouscription: ${fund.periodesSouscription}\n`;
      data += `DateObtentionVisa: ${fund.dateObtentionVisa}\n`;
      data += `BanqueDepositaire: ${fund.banqueDepositaire}\n`;
      data += `FraisDepositaire: ${fund.fraisDepositaire}\n`;
      data += `FraisGestion: ${fund.fraisGestion}\n`;
      data += `NatureFonds: ${fund.natureFonds}\n`;
      data += `Secteurs: ${fund.secteurs}\n`;
      data += `RatiosReglementaires: ${fund.ratiosReglementaires}\n`;
      data += `RatiosConformite: ${fund.ratiosConformite}\n`;
      data += `AutresRatios: ${fund.autresRatios}\n`;
      data += `TypesSouscripteurs: ${fund.typesSouscripteurs.join(', ')}\n`;

      // Add a blank line between funds for readability
      data += '\n';
    });

    return data;

  }
}
