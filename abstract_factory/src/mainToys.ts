import { ToyFactory } from './toys/interfaces';
import { PlasticToyFactory } from './toys/plasticToys';
import { WoodenToyFactory } from './toys/woodenToys';

function testToyFactory(factory: ToyFactory): void {
  const car = factory.createCar();
  const doll = factory.createDoll();

  car.play();
  doll.play();
}

console.log("Fábrica de Plástico:");
testToyFactory(new PlasticToyFactory());

console.log("\nFábrica de Madeira:");
testToyFactory(new WoodenToyFactory());
