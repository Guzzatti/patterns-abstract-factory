import { Toy, ToyFactory } from './interfaces';

export class PlasticCar implements Toy {
  play(): void {
    console.log("Brincando com um carrinho de plástico que corre bem rápido!");
  }
}

export class PlasticDoll implements Toy {
  play(): void {
    console.log("Brincando com uma boneca de plástico bem bonita!");
  }
}

export class PlasticToyFactory implements ToyFactory {
  createCar(): Toy {
    return new PlasticCar();
  }

  createDoll(): Toy {
    return new PlasticDoll();
  }
}
