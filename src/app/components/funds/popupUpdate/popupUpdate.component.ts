import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FundsService} from "../service/funds.service";
import {Fonds} from "../../../utils/models/models";

@Component({
  selector: 'popupUpdate-fond',
  templateUrl: './popupUpdate.component.html',
  styleUrls: ['./popupUpdate.component.scss']
})
export class popupUpdateFundsComponent implements OnInit {
  subscriberTypes=[];
  fundForm: FormGroup;
  fund:Fonds = new Fonds();
  page=false;
  @Input() fundToUpdate;
  @Output() close = new EventEmitter();
  constructor(
    public fb: FormBuilder,private fundService: FundsService
  ) {
  }
  ngOnInit() {
    console.log("hello update opened");
    this.subscriberTypes = ['Etablissement bancaire', "Sociétés d'assurances", 'Personnes physiques', 'Etablissement publics', 'Autres établissements'];

    this.createForm();
    this.fundForm.get('nomFonds').setValue(this.fundToUpdate.nomFonds);
    this.fundForm.get('montantProjete').setValue(this.fundToUpdate.montantProjete);
    this.fundForm.get('dureeFonds').setValue(this.fundToUpdate.dureeFonds);
    this.fundForm.get('dateCreation').setValue(this.fundToUpdate.dateCreation);
    this.fundForm.get('periodesSouscription').setValue(this.fundToUpdate.periodesSouscription);
    this.fundForm.get('dateObtentionVisa').setValue(this.fundToUpdate.dateObtentionVisa);
    this.fundForm.get('banqueDepositaire').setValue(this.fundToUpdate.banqueDepositaire);
    this.fundForm.get('fraisDepositaire').setValue(this.fundToUpdate.fraisDepositaire);
    this.fundForm.get('fraisGestion').setValue(this.fundToUpdate.fraisGestion);
    this.fundForm.get('natureFonds').setValue(this.fundToUpdate.natureFonds);
    this.fundForm.get('secteurs').setValue(this.fundToUpdate.secteurs);
    this.fundForm.get('ratiosReglementaires').setValue(this.fundToUpdate.ratiosReglementaires);
    this.fundForm.get('ratiosConformite').setValue(this.fundToUpdate.ratiosConformite);
    this.fundForm.get('autresRatios').setValue(this.fundToUpdate.autresRatios);
    this.fundForm.get('typesSouscripteurs').setValue(this.fundToUpdate.typesSouscripteurs);
    this.fundForm.get('subscriber').setValue(this.fundToUpdate.subscriber);
    this.fundForm.get('subscriptionAmount').setValue(this.fundToUpdate.subscriptionAmount);
    this.fundForm.get('subscriptionDate').setValue(this.fundToUpdate.subscriptionDate);
    this.fundForm.get('releaseAmount').setValue(this.fundToUpdate.releaseAmount);
    this.fundForm.get('releaseDate').setValue(this.fundToUpdate.releaseDate);
    this.fundForm.get('regulatoryUseEndDate').setValue(this.fundToUpdate.regulatoryUseEndDate);
    this.fundForm.get('subscriptionBulletin').setValue(this.fundToUpdate.subscriptionBulletin);

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
    // const fundData = this.fundForm.value;
    this.fund.id= this.fundToUpdate.id;
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


    //this.fund.accord = this.fundForm.get('accord').value;
    // this.fund.reglementation = this.fundForm.get('reglementation').value;
    this.fund.typesSouscripteurs = this.fundForm.get('typesSouscripteurs').value;
    this.fund.subscriber= this.fundForm.get('subscriber').value;
    this.fund.subscriptionAmount = this.fundForm.get('subscriptionAmount').value;
    this.fund.subscriptionDate = this.fundForm.get('subscriptionDate').value;
    this.fund.releaseAmount = this.fundForm.get('releaseAmount').value;
    this.fund. releaseDate = this.fundForm.get('releaseDate').value;
    this.fund.regulatoryUseEndDate = this.fundForm.get('regulatoryUseEndDate').value;
    // this.fund.subscriptionBulletin = this.fundForm.get('subscriptionBulletin').value,
    this.fund.subscriptionBulletin = this.fundForm.get('subscriptionBulletin').value;
    //  this.fund.transferOrder = this.fundForm.get('transferOrder').value

    this.fundService.updateFund(this.fund).subscribe(
      (createdFund: Fonds) => {
        this.close.emit();
        console.log('Fund updated:', createdFund);
      },
      (error) => {
        console.error('Failed to update fund:', error);
      }
    );


  }
  onClose(){
    this.close.emit();
  }

}
