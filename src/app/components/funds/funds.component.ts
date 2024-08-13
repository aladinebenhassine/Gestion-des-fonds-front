import { Component, OnInit } from '@angular/core';
import {FundsService} from "./service/funds.service";
import {Fonds} from "../../utils/models/models";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  ajout : boolean = false;
  modifier : boolean = false;
  fonds= [];
  fundToUpdate:Fonds = new Fonds();
  filterName="";
  sortField: string = '';
  sortOrder: string = 'asc';
  role=""
  constructor(private fundService : FundsService,private authService: AuthService) { }

  ngOnInit() {
    this.getfonds();
    this.role= this.authService.role;
  }
  getfonds(){
    this.fundService.getFonds().subscribe(res => this.fonds=res);
  }

  togglePopup(){
    this.ajout = !this.ajout;
    console.log(this.ajout)
    this.getfonds();

  }
  update(fund : Fonds){
console.log("update")
    this.fundToUpdate=fund;
this.modifier = !this.modifier;

  }

  delete(id){
    console.log("delete")
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce fonds?')) {
this.fundService.deleteFund(id).subscribe(res => {console.log('delete')},error => {},()=>{
  this.getfonds()
})    }
  }
  afficher(fund : Fonds){
    console.log("affichage")
    window.alert(" ID:  "+fund.id  +" \n" +
      "       Montant Projeté:  "+fund.montantProjete  +" \n" +
      "       Durée Fonds:  "+fund.dureeFonds  +" \n" +
      "       Date de création:  "+fund.dateCreation  +" \n" +
      "       Périodes de souscription:  "+fund.periodesSouscription  +" \n" +
      "       Date d'obtention du visa:  "+fund.dateObtentionVisa  +" \n" +
      "       Banque dépositaire:  "+fund.banqueDepositaire  +" \n" +
      "       Frais dépositaire:  "+fund.fraisDepositaire  +" \n" +
      "       Frais de gestion:  "+fund.fraisGestion  +" \n" +
      "       Nature du fonds:  "+fund.natureFonds  +" \n" +
      "       Secteurs:  "+fund.secteurs  +" \n" +
      "       Ratios réglementaires:  "+fund.ratiosReglementaires  +" \n" +
      "       Ratios de conformité:  "+fund.ratiosConformite  +" \n" +
      "       Autres ratios:  "+fund.autresRatios +" \n" +
      "       Types de souscripteurs:  "+fund.typesSouscripteurs  +" \n");
  }

  sort(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }

    this.fonds.sort((a: Fonds, b: Fonds) => {
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
