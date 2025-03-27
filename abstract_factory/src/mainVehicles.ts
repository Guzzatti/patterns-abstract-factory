import { FuturisticVehicleFactory } from './vehicles/interfaces';
import { EarthVehicleFactory } from './vehicles/earthVehicles';
import { SpaceVehicleFactory } from './vehicles/spaceVehicles';

function configureVehicle(factory: FuturisticVehicleFactory): void {
  const propulsion = factory.createPropulsion();
  const control = factory.createControlSystem();

  propulsion.activate();
  control.engage();
}

console.log("🌍 Veículo Futurista Terrestre:");
configureVehicle(new EarthVehicleFactory());

console.log("\n🚀 Veículo Futurista Espacial:");
configureVehicle(new SpaceVehicleFactory());
