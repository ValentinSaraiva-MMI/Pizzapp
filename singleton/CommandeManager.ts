import { Pizza } from "../models/Pizza.js";

export class CommandeManager {
  private static instance: CommandeManager;
  private commandes: Pizza[] = [];

  private constructor() {}

  public static getInstance(): CommandeManager {
    if (!CommandeManager.instance) {
      CommandeManager.instance = new CommandeManager();
    }
    return CommandeManager.instance;
  }

  public ajouterCommande(pizza: Pizza): void {
    this.commandes.push(pizza);
    console.log(`Commande ajoutée : Pizza ${pizza.type}`);
  }

  public afficherCommandes(): void {
    console.log("Commandes en cours :");
    this.commandes.forEach((pizza, index) => {
      console.log(`Commande ${index + 1}:`);
      pizza.afficher();
    });
  }

  public supprimerCommande(index: number): void {
    if (index >= 0 && index < this.commandes.length) {
      this.commandes.splice(index, 1);
      console.log(`Commande ${index + 1} supprimée`);
    } else {
      console.log("Index invalide.");
    }
  }
}
