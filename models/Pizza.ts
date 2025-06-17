/**
 * Représente une pizza avec ses caractéristiques principales.
 */
export class Pizza {
  public type: string;
  public pate: string;
  public sauce: string;
  public taille: string;
  public garnitures: string[];

  constructor(
    type: string,
    pate: string,
    sauce: string,
    taille: string,
    garnitures: string[]
  ) {
    this.type = type;
    this.pate = pate;
    this.sauce = sauce;
    this.taille = taille;
    this.garnitures = garnitures;
  }

  cuire(): void {
    console.log("Cuisson de la pizza");
  }

  emballer(): void {
    console.log("Emballage de la pizza.");
  }

  /**
   * Affiche les détails de la pizza, puis lance la cuisson et l'emballage.
   */
  afficher(): void {
    console.log(
      `Pizza ${this.type} avec pâte ${this.pate}, sauce ${
        this.sauce
      }, garnitures : ${this.garnitures.join(", ")} de taille ${this.taille}`
    );

    this.cuire();

    this.emballer();
  }
}
