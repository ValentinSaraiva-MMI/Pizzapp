export class CommandeManager {
    static instance;
    commandes = [];
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
    afficherCommandes() {
        console.log("Commandes en cours :");
        this.commandes.forEach((pizza, index) => {
            console.log(`Commande ${index + 1}:`);
            pizza.afficher();
        });
    }
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
