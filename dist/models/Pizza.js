export class Pizza {
    type;
    pate;
    sauce;
    taille;
    garnitures;
    constructor(type, pate, sauce, taille, garnitures) {
        this.type = type;
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
        console.log(`Pizza ${this.type} avec pâte ${this.pate}, sauce ${this.sauce}, garnitures : ${this.garnitures.join(", ")} de taille ${this.taille}`);
        this.cuire();
        this.emballer();
    }
}
