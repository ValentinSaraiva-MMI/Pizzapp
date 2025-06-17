import { describe, it, expect } from "vitest";
import { CommandeManager } from "../singleton/CommandeManager.js";
import { Pizza } from "../models/Pizza.js";

const testPizza = new Pizza("test", "fine", "tomate", "moyenne", ["fromage"]);

describe("Singleton Pattern - CommandeManager", () => {
  it("Test 2.1: doit toujours retourner la même instance", () => {
    const instance1 = CommandeManager.getInstance();
    const instance2 = CommandeManager.getInstance();
    expect(instance1).toBe(instance2); // Vérifie que c’est la même référence
  });

  it("Test 2.2: simulation multithreading simple (promise.all)", async () => {
    const instances = await Promise.all([
      Promise.resolve(CommandeManager.getInstance()),
      Promise.resolve(CommandeManager.getInstance()),
      Promise.resolve(CommandeManager.getInstance()),
    ]);
    expect(new Set(instances).size).toBe(1); // Une seule instance
  });

  it("Test 2.3: gestion des commandes", () => {
    const manager = CommandeManager.getInstance();

    // On vide d'abord les commandes pour être sûr
    manager["commandes"] = [];

    manager.ajouterCommande(testPizza);
    expect(manager["commandes"].length).toBe(1);
    expect(manager["commandes"][0]).toBe(testPizza);

    manager.supprimerCommande(0);
    expect(manager["commandes"].length).toBe(0);
  });
});
