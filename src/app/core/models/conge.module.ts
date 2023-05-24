export class Conge {
  id: number;
  matricule: string;
  dateDebut: Date;
  dateFin: Date;
  duree: number;
  statut: string;
  typeConge: string;
  cause: string;

  constructor(
    id: number,
    matricule: string,
    dateDebut: Date,
    dateFin: Date,
    statut: string,
    typeConge: string,
    cause: string
  ) {
    this.id = id;
    this.matricule = matricule;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.statut = statut;
    this.typeConge = typeConge;
    this.cause = cause;
  }

  getDuree(): number {
    const diffTime = Math.abs(this.dateDebut.getTime() - this.dateFin.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays + 1; // add 1 to include the start date in the duration
  }
}
