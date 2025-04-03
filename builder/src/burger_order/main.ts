import { BurgerOrderBuilder } from "./BurgerOrderBuilder";

const burgerOrder = new BurgerOrderBuilder()
  .setBreadType("Brioche")
  .setProtein("Carne")
  .addCheese()
  .addLettuce()
  .addTomato()
  .addSpecialSauce()
  .setDrink("Coca-Cola")
  .build();

console.log("Pedido realizado:");
console.log(burgerOrder.description());

const simpleBurger = new BurgerOrderBuilder()
  .setBreadType("Integral")
  .setProtein("Vegetariano")
  .addLettuce()
  .addTomato()
  .build();

console.log("\nPedido simples realizado:");
console.log(simpleBurger.description());
