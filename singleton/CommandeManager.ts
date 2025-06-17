import { Pizza } from "../models/Pizza.js";

/**
 * Gestionnaire de commandes utilisant le pattern Singleton.
 * Permet d'ajouter, d'afficher et de supprimer des commandes de pizzas.
 */
export class CommandeManager {
  private static instance: CommandeManager;
  // Liste des commandes (chaque commande est une Pizza)
  private commandes: Pizza[] = [];

  // Constructeur privé pour empêcher l'instanciation directe
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

  /**
   * Affiche toutes les commandes en cours.
   */
  public afficherCommandes(): void {
    console.log("Commandes en cours :");
    this.commandes.forEach((pizza, index) => {
      console.log(`Commande ${index + 1}:`);
      pizza.afficher();
    });
  }

  /**
   * Supprime une commande selon son index dans la liste.
   */
  public supprimerCommande(index: number): void {
    if (index >= 0 && index < this.commandes.length) {
      this.commandes.splice(index, 1);
      console.log(`Commande ${index + 1} supprimée`);
    } else {
      console.log("Index invalide.");
    }
  }
}
