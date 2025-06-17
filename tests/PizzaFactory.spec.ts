import { describe, it, expect } from "vitest";
import { PizzaFactory } from "../factoryPattern/PizzaFactory.js";
import { Pizza } from "../models/Pizza.js";

describe("Factory Pattern - PizzaFactory", () => {
  it("Test 1.1: doit créer une pizza de type fromage", () => {
    const pizza = PizzaFactory.createPizza("fromage");
    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.type).toBe("fromage");
  });

  it("Test 1.2: doit lever une erreur pour un type inconnu", () => {
    expect(() => {
      PizzaFactory.createPizza("hawaiienne");
    }).toThrowError(
      `Type de pizza inconnu: hawaiienne, les pizzas que nous fabriquons sont : "fromage","vegetarienne" et "pepperoni"`
    );
  });
});
