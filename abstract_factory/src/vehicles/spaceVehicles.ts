import { Propulsion, ControlSystem, FuturisticVehicleFactory } from './interfaces';

class PlasmaEngine implements Propulsion {
  activate(): void {
    console.log("Motor de plasma ativado, veículo espacial pronto para viagem interestelar!");
  }
}

class ManualControl implements ControlSystem {
  engage(): void {
    console.log("Sistema de controle manual ativado, piloto assumindo o comando!");
  }
}

export class SpaceVehicleFactory implements FuturisticVehicleFactory {
  createPropulsion(): Propulsion {
    return new PlasmaEngine();
  }

  createControlSystem(): ControlSystem {
    return new ManualControl();
  }
}
