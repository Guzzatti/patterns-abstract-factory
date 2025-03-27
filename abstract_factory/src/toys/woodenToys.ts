import { Toy, ToyFactory } from './interfaces';

export class WoodenCar implements Toy {
  play(): void {
    console.log("Brincando com um carrinho de madeira artesanal que desliza suavemente!");
  }
}

export class WoodenDoll implements Toy {
  play(): void {
    console.log("Brincando com uma boneca de madeira bem detalhada!");
  }
}

export class WoodenToyFactory implements ToyFactory {
  createCar(): Toy {
    return new WoodenCar();
  }

  createDoll(): Toy {
    return new WoodenDoll();
  }
}
