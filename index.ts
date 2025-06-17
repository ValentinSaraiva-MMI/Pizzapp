import { PizzaFactory } from "./factoryPattern/PizzaFactory.js";
import { PizzaBuilder } from "./builderPattern/PizzaBuilder.js";
import { CommandeManager } from "./singleton/CommandeManager.js";

const manager = CommandeManager.getInstance();

// Factory = pizzas standard
const pizza1 = PizzaFactory.createPizza("Fromage");

const pizza2 = PizzaFactory.createPizza("Fromage");

// Builder = Pizzas Personnalisé
const pizza3 = new PizzaBuilder()
  .setTaille("Grande")
  .setSauce("Tomate")
  .setPate("Mol")
  .addGarniture("Champignon")
  .build();

manager.ajouterCommande(pizza1);
manager.ajouterCommande(pizza2);
manager.ajouterCommande(pizza3);
manager.afficherCommandes();
