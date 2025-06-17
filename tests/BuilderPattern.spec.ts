import { describe, it, expect } from "vitest";
import { PizzaBuilder } from "../builderPattern/PizzaBuilder.js";
import { Pizza } from "../models/Pizza.js";

describe("Builder Pattern - PizzaBuilder", () => {
  it("Test 3.1: doit construire une pizza correctement", () => {
    const pizza = new PizzaBuilder()
      .setPate("fine")
      .setSauce("tomate")
      .setTaille("moyenne")
      .addGarniture("fromage")
      .addGarniture("champignons")
      .build();

    expect(pizza).toBeInstanceOf(Pizza);
    expect(pizza.pate).toBe("fine");
    expect(pizza.sauce).toBe("tomate");
    expect(pizza.taille).toBe("moyenne");
    expect(pizza.garnitures).toEqual(["fromage", "champignons"]);
    expect(pizza.type).toBe("personnalisée");
  });

  it("Test 3.2: doit permettre le chaînage des méthodes (fluent interface)", () => {
    const builder = new PizzaBuilder()
      .setPate("épaisse")
      .setSauce("crème")
      .setTaille("grande")
      .addGarniture("jambon")
      .addGarniture("champignons");

    const pizza = builder.build();

    expect(pizza.garnitures.length).toBe(2);
  });

  it("Test 3.3: doit lever une erreur si les champs obligatoires sont manquants", () => {
    const builder = new PizzaBuilder().setPate("fine").setSauce("tomate");
    // Taille oublié volontairement

    expect(() => builder.build()).toThrowError(
      "Pâte,sauce et taille doivent être définies."
    );
  });
});
