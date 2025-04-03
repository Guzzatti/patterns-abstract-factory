import { Burger } from "./Burger";

export class BurgerOrderBuilder {
  private burger: Burger;

  constructor() {
    this.burger = new Burger();
  }

  setBreadType(bread: string): BurgerOrderBuilder {
    this.burger.breadType = bread;
    return this;
  }

  setProtein(protein: string): BurgerOrderBuilder {
    this.burger.protein = protein;
    return this;
  }

  addCheese(): BurgerOrderBuilder {
    this.burger.cheese = true;
    return this;
  }

  addLettuce(): BurgerOrderBuilder {
    this.burger.lettuce = true;
    return this;
  }

  addTomato(): BurgerOrderBuilder {
    this.burger.tomato = true;
    return this;
  }

  addOnion(): BurgerOrderBuilder {
    this.burger.onion = true;
    return this;
  }

  addSpecialSauce(): BurgerOrderBuilder {
    this.burger.specialSauce = true;
    return this;
  }

  setDrink(drink: string): BurgerOrderBuilder {
    this.burger.drink = drink;
    return this;
  }

  build(): Burger {
    return this.burger;
  }
}
