import { Pizza } from "../models/Pizza.js";

export class PizzaBuilder {
  private pate: string = "";
  private sauce: string = "";
  private taille: string = "";
  private garnitures: string[] = [];

  setTaille(taille: string): PizzaBuilder {
    this.taille = taille;
    return this;
  }

  setPate(pate: string): PizzaBuilder {
    this.pate = pate;
    return this;
  }

  setSauce(sauce: string): PizzaBuilder {
    this.sauce = sauce;
    return this;
  }

  addGarniture(garniture: string): PizzaBuilder {
    this.garnitures.push(garniture);
    return this;
  }

  build() {
    if (!this.pate || !this.sauce || !this.taille) {
      throw new Error("Pâte,sauce et taille doivent être définies.");
    } else
      return new Pizza(
        "personnalisée",
        this.pate,
        this.sauce,
        this.taille,
        this.garnitures
      );
  }
}
