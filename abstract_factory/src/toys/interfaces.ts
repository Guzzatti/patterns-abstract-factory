export interface Toy {
  play(): void;
}

export interface ToyFactory {
  createCar(): Toy;
  createDoll(): Toy;
}
