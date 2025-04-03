import { BurgerOrderBuilder } from "./BurgerOrderBuilder";

export class BurgerDirector {
  constructor(private builder: BurgerOrderBuilder) {}

  makeClassic(): void {
    this.builder
      .setBreadType("Brioche")
      .setProtein("Carne")
      .addCheese()
      .addLettuce()
      .addTomato()
      .addSpecialSauce();
  }

  makeVegetarian(): void {
    this.builder
      .setBreadType("Integral")
      .setProtein("Vegetariano")
      .addLettuce()
      .addOnion()
      .addSpecialSauce();
  }

  makeNoTomato(): void {
    this.builder
      .setBreadType("Frances")
      .setProtein("Frango")
      .addCheese()
      .addLettuce()
      .addOnion();
  }
}
