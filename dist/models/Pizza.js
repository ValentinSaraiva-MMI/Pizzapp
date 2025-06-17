export class Pizza {
    pate;
    sauce;
    taille;
    garnitures;
    constructor(pate, sauce, taille, garnitures) {
        this.pate = pate;
        this.sauce = sauce;
        this.taille = taille;
        this.garnitures = garnitures;
    }
    cuire() {
        console.log("Cuisson de la pizza");
    }
    emballer() {
        console.log("Emballage de la pizza.");
    }
    afficher() {
        console.log(`Pizza avec pâte ${this.pate}, sauce ${this.sauce}, garnitures : ${this.garnitures.join(", ")},  en cours de préparation !`);
        this.cuire();
        this.emballer();
    }
}
