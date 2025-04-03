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
