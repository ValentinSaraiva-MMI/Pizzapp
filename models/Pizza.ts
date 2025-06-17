export class Pizza {
  public pate: string;
  public sauce: string;
  public taille: string;
  public garnitures: string[];

  constructor(
    pate: string,
    sauce: string,
    taille: string,
    garnitures: string[]
  ) {
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

  afficher(): void {
    console.log(
      `Pizza avec pâte ${this.pate}, sauce ${
        this.sauce
      }, garnitures : ${this.garnitures.join(", ")}`
    );
  }
}
