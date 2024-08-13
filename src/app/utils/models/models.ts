export class Fonds {
  id: number;
  nomFonds: string;
  montantProjete: number;
  dureeFonds: number;
  dateCreation: string;
  periodesSouscription: string;
  dateObtentionVisa: string;
  banqueDepositaire: string;
  fraisDepositaire: number;
  fraisGestion: number;
  natureFonds: string;
  secteurs?: string;
  ratiosReglementaires: number;
  ratiosConformite: number;
  autresRatios: number;

  typesSouscripteurs: string[];
  subscriber?: string;
  subscriptionAmount?: number;
  subscriptionDate?: string;
  releaseAmount?: number;
  releaseDate?: string;
  regulatoryUseEndDate?: string;
  subscriptionBulletin?: string;
 // transferOrder?: string;
};
export class Projet {
  id:number;
  promoteur: string;
  dateContact: Date;
  nomPromoteur: string;
  email: string;
  tel: string;
  experiencePromoteur: string;
  agePromoteur: number;
  diplome: string;
  observations: string;
  calendrier: string;
  nomProjet: string;
  activiteProjet: string;
  secteurProjet: string;
  capitalSocial: string;
  phaseInvestissement: string;
  adresseSiege: string;
  adresseUsine: string;
  observationsProjet: string;
  nomContact: string;
  emailContact: string;
  telContact: string;
  activiteContact: string;
  observationsContact: string;
}
export class User {
  id: string;
  email: string;
  password: string;
  fullname: string;
  role: string;
}
