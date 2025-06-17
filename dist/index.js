import { PizzaFactory } from "./factoryPattern/PizzaFactory.js";
import { PizzaBuilder } from "./builderPattern/PizzaBuilder.js";
const pizza1 = PizzaFactory.createPizza("Fromage");
pizza1.afficher();
const pizza2 = PizzaFactory.createPizza("Fromage");
pizza2.afficher();
const pizza3 = new PizzaBuilder()
    .setTaille("Grande")
    .setSauce("Tomate")
    .setPate("Mol")
    .addGarniture("Champignon")
    .build();
pizza3.afficher();
