// CarBuilder.ts
import { Car } from "./Car";

export class CarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setModel(model: string): CarBuilder {
    this.car.model = model;
    return this;
  }

  setEngineType(engine: string): CarBuilder {
    this.car.engineType = engine;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.car.color = color;
    return this;
  }

  setTransmission(type: "manual" | "automático"): CarBuilder {
    this.car.transmission = type;
    return this;
  }

  addSunroof(): CarBuilder {
    this.car.sunroof = true;
    return this;
  }

  addPremiumSound(): CarBuilder {
    this.car.premiumSound = true;
    return this;
  }

  addLeatherSeats(): CarBuilder {
    this.car.leatherSeats = true;
    return this;
  }

  build(): Car {
    if (!this.car.model || !this.car.engineType) {
      throw new Error("Modelo e tipo de motor são obrigatórios.");
    }

    const selectedExtras = [
      this.car.sunroof,
      this.car.premiumSound,
      this.car.leatherSeats,
    ].filter(Boolean);

    if (selectedExtras.length < 2) {
      throw new Error("É necessário selecionar pelo menos dois opcionais.");
    }

    return this.car;
  }
}
