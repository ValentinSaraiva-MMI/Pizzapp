import { Pizza } from "../models/Pizza.js";

/**
 * Fabrique des pizzas selon un type donné.
 * Utilise le pattern Factory.
 */
export class PizzaFactory {
  static createPizza(type: string): Pizza {
    switch (type.toLowerCase()) {
      case "fromage":
        return new Pizza("fromage", "fine", "tomate", "moyenne", [
          "mozzarella",
          "emmental",
        ]);

      case "vegetarienne":
        return new Pizza("vegetarienne", "épaisse", "tomate", "grande", [
          "poivrons",
          "oignons",
          "champignons",
        ]);

      case "pepperoni":
        return new Pizza("pepperoni", "classique", "tomate", "grande", [
          "pepperoni",
          "fromage",
        ]);

      default:
        throw new Error(
          `Type de pizza inconnu: ${type}, les pizzas que nous fabriquons sont : "fromage","vegetarienne" et "pepperoni"`
        );
    }
  }
}
