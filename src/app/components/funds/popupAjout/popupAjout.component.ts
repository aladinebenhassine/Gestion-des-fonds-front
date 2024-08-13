import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, FormControl, Validators} from "@angular/forms";
import {Fonds} from "../../../utils/models/models";
import {FundsService} from "../service/funds.service";

@Component({
  selector: 'PopupAjoutFundsComponent',
  templateUrl: './popupAjout.component.html',
  styleUrls: ['./popupAjout.component.scss']
})
export class PopupAjoutFundsComponent implements OnInit {
  subscriberTypes=[];
  fundForm: FormGroup;
  fund:Fonds = new Fonds();
page=false;
  @Output() close = new EventEmitter();
  constructor(
    public fb: FormBuilder,private fundService: FundsService
    ) {
  }
  ngOnInit() {
    console.log("hello ajout opened");
    this.subscriberTypes = ['Etablissement bancaire', "Sociétés d'assurances", 'Personnes physiques', 'Etablissement publics', 'Autres établissements'];

    this.createForm();
  }

  createForm() {
    this.fundForm = this.fb.group({
      nomFonds: ['', Validators.required],
      montantProjete: ['', Validators.required],
      dureeFonds: ['', Validators.required],
      dateCreation: ['', Validators.required],
      periodesSouscription: ['', Validators.required],
      dateObtentionVisa: [''],
      banqueDepositaire: ['', Validators.required],
      fraisDepositaire: ['', Validators.required],
      fraisGestion: ['', Validators.required],
      natureFonds: ['', Validators.required],
      secteurs: [''],
      ratiosReglementaires: ['', Validators.required],
      ratiosConformite: ['', Validators.required],
      autresRatios: [''],
    //  prospectus: ['',Validators.required],
      // accord: ['',Validators.required],
      // reglementation: ['',Validators.required],
      typesSouscripteurs: [[]],
      subscriber: ['',Validators.required],
      subscriptionAmount: ['',Validators.required],
      subscriptionDate: ['',Validators.required],
      releaseAmount: ['',Validators.required],
      releaseDate: ['',Validators.required],
      regulatoryUseEndDate: ['',Validators.required],
      subscriberType: this.fb.array([]),
     // subscriptionBulletin: ['',Validators.required],
      subscriptionBulletin: [''],
      //transferOrder: ['',Validators.required]

    });
  }

  pagechange(){
  this.page =!this.page;
}
  onSubmit() {
    this.fund.nomFonds = this.fundForm.get('nomFonds').value;
    this.fund.montantProjete = this.fundForm.get('montantProjete').value;
    this.fund.dureeFonds = this.fundForm.get('dureeFonds').value;
    this.fund.dateCreation = this.fundForm.get('dateCreation').value;
    this.fund.periodesSouscription = this.fundForm.get('periodesSouscription').value;
    this.fund.dateObtentionVisa = this.fundForm.get('dateObtentionVisa').value;
    this.fund.banqueDepositaire = this.fundForm.get('banqueDepositaire').value;
    this.fund.fraisDepositaire = this.fundForm.get('fraisDepositaire').value;
    this.fund.fraisGestion = this.fundForm.get('fraisGestion').value;
    this.fund.natureFonds = this.fundForm.get('natureFonds').value;
    this.fund.secteurs = this.fundForm.get('secteurs').value;
    this.fund.ratiosReglementaires = this.fundForm.get('ratiosReglementaires').value;
    this.fund.ratiosConformite = this.fundForm.get('ratiosConformite').value;
    this.fund.autresRatios = this.fundForm.get('autresRatios').value;
   // this.fund.prospectus = null;

    //this.fund.accord = null;
   // this.fund.reglementation = null;
    this.fund.typesSouscripteurs = this.fundForm.get('typesSouscripteurs').value;
    this.fund.subscriber= this.fundForm.get('subscriber').value;
    this.fund.subscriptionAmount = this.fundForm.get('subscriptionAmount').value;
    this.fund.subscriptionDate = this.fundForm.get('subscriptionDate').value;
    this.fund.releaseAmount = this.fundForm.get('releaseAmount').value;
    this.fund. releaseDate = this.fundForm.get('releaseDate').value;
    this.fund.regulatoryUseEndDate = this.fundForm.get('regulatoryUseEndDate').value;
   this.fund.subscriptionBulletin = this.fundForm.get('subscriptionBulletin').value,
      //this.fund.subscriptionBulletin = null;
    //  this.fund.transferOrder = null;

    this.fundService.createFund(this.fund).subscribe(
      (createdFund: Fonds) => {
        console.log('Fund created:', createdFund);
        this.close.emit();
      },
      (error) => {
        console.error('Failed to create fund:', error);
      }
    );



  }
onClose(){
    this.close.emit();
}

}
