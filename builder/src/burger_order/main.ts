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

import { BurgerDirector } from "./BurgerDirector";

console.log("\nPedidos com diretor:");
const builder = new BurgerOrderBuilder();
const director = new BurgerDirector(builder);

director.makeNoTomato();
console.log(builder.build().description());

director.makeClassic();
console.log(builder.build().description());

director.makeVegetarian();
console.log(builder.build().description());

