import { Propulsion, ControlSystem, FuturisticVehicleFactory } from './interfaces';

class JetEngine implements Propulsion {
  activate(): void {
    console.log("Motor a jato ativado, veículo terrestre pronto para voar!");
  }
}

class AutonomousAI implements ControlSystem {
  engage(): void {
    console.log("Inteligência Artificial assumindo controle autônomo do veículo terrestre!");
  }
}

export class EarthVehicleFactory implements FuturisticVehicleFactory {
  createPropulsion(): Propulsion {
    return new JetEngine();
  }

  createControlSystem(): ControlSystem {
    return new AutonomousAI();
  }
}
