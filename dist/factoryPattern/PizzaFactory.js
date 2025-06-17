import { Pizza } from "../models/Pizza.js";
export class PizzaFactory {
    static createPizza(type) {
        switch (type.toLowerCase()) {
            case "fromage":
                return new Pizza("fine", "tomate", "moyenne", [
                    "mozzarella",
                    "emmental",
                ]);
            case "vegetarienne":
                return new Pizza("épaisse", "tomate", "grande", [
                    "poivrons",
                    "oignons",
                    "champignons",
                ]);
            case "pepperoni":
                return new Pizza("classique", "tomate", "grande", [
                    "pepperoni",
                    "fromage",
                ]);
            default:
                throw new Error(`Type de pizza inconnu: ${type}`);
        }
    }
}
