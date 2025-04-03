// CarDirector.ts
import { CarBuilder } from "./CarBuilder";

export class CarDirector {
  constructor(private builder: CarBuilder) {}

  economicManual(): void {
    this.builder
      .setModel("Hatch Z")
      .setEngineType("Gasolina")
      .setColor("Prata")
      .setTransmission("manual")
      .addPremiumSound()
      .addSunroof();
  }

  sportAutomatic(): void {
    this.builder
      .setModel("Coupe GT")
      .setEngineType("Híbrido")
      .setColor("Vermelho")
      .setTransmission("automático")
      .addLeatherSeats()
      .addPremiumSound();
  }

  luxuryElectric(): void {
    this.builder
      .setModel("SUV Lux")
      .setEngineType("Elétrico")
      .setColor("Azul")
      .setTransmission("automático")
      .addSunroof()
      .addLeatherSeats();
  }
}
