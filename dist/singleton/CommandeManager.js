/**
 * Gestionnaire de commandes utilisant le pattern Singleton.
 * Permet d'ajouter, d'afficher et de supprimer des commandes de pizzas.
 */
export class CommandeManager {
    static instance;
    // Liste des commandes (chaque commande est une Pizza)
    commandes = [];
    // Constructeur privé pour empêcher l'instanciation directe
    constructor() { }
    static getInstance() {
        if (!CommandeManager.instance) {
            CommandeManager.instance = new CommandeManager();
        }
        return CommandeManager.instance;
    }
    ajouterCommande(pizza) {
        this.commandes.push(pizza);
        console.log(`Commande ajoutée : Pizza ${pizza.type}`);
    }
    /**
     * Affiche toutes les commandes en cours.
     */
    afficherCommandes() {
        console.log("Commandes en cours :");
        this.commandes.forEach((pizza, index) => {
            console.log(`Commande ${index + 1}:`);
            pizza.afficher();
        });
    }
    /**
     * Supprime une commande selon son index dans la liste.
     */
    supprimerCommande(index) {
        if (index >= 0 && index < this.commandes.length) {
            this.commandes.splice(index, 1);
            console.log(`Commande ${index + 1} supprimée`);
        }
        else {
            console.log("Index invalide.");
        }
    }
}
