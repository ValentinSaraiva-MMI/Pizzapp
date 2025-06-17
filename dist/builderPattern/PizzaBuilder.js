import { Pizza } from "../models/Pizza.js";
export class PizzaBuilder {
    pate = "";
    sauce = "";
    taille = "";
    garnitures = [];
    setTaille(taille) {
        this.taille = taille;
        return this;
    }
    setPate(pate) {
        this.pate = pate;
        return this;
    }
    setSauce(sauce) {
        this.sauce = sauce;
        return this;
    }
    addGarniture(garniture) {
        this.garnitures.push(garniture);
        return this;
    }
    build() {
        if (!this.pate || !this.sauce || !this.taille) {
            throw new Error("Pâte,sauce et taille doivent être définies.");
        }
        else
            return new Pizza(this.pate, this.sauce, this.taille, this.garnitures);
    }
}
const pizza = new PizzaBuilder()
    .setPate("fine")
    .setSauce("tomate")
    .setTaille("grande")
    .addGarniture("fromage")
    .addGarniture("champignons")
    .build();
pizza.afficher();
