import { PizzaFactory } from "./factoryPattern/PizzaFactory.js";
const pizza1 = PizzaFactory.createPizza("Fromage");
pizza1.afficher();
const pizza2 = PizzaFactory.createPizza("Fromage");
pizza2.afficher();
