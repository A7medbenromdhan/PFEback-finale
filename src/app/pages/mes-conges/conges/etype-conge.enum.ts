export enum EtypeConge {
  Annuel = 1,
  Maladie = 2,
  Maternité = 3,
  Paternité = 4,
  Sans_solde = 5,
  Autre = 6
}
export namespace EtypeConge {
  export const EtypeCongeLabels: { [key: number]: string } = {
    [EtypeConge.Annuel]: "Annuel",
    [EtypeConge.Maladie]: "Maladie",
    [EtypeConge.Maternité]: "Maternité",
    [EtypeConge.Paternité]: "Paternité",
    [EtypeConge.Sans_solde]: "Sans solde",
    [EtypeConge.Autre]: "Autre",
  };
}
