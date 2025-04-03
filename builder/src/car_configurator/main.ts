import { CarBuilder } from "./CarBuilder";

try {
  const customCar = new CarBuilder()
    .setModel("Sedan X")
    .setEngineType("Híbrido")
    .setColor("Preto")
    .setTransmission("automático")
    .addSunroof()
    .addLeatherSeats()
    .build();

  console.log("Carro configurado com sucesso:");
  console.log(customCar.description());
} catch (error: any) {
  console.error("Erro ao montar carro:", error.message);
}

try {
  const invalidCar = new CarBuilder()
    .setModel("Hatch Y")
    .setEngineType("Elétrico")
    .setColor("Branco")
    .setTransmission("manual")
    .addSunroof() // Apenas 1 opcional
    .build();
} catch (error: any) {
  console.error("\nErro ao montar carro inválido:", error.message);
}

import { CarDirector } from "./CarDirector";

console.log("\nCarros com diretor:");
const carBuilder = new CarBuilder();
const carDirector = new CarDirector(carBuilder);

carDirector.economicManual();
console.log(carBuilder.build().description());

carDirector.sportAutomatic();
console.log(carBuilder.build().description());

carDirector.luxuryElectric();
console.log(carBuilder.build().description());
