export interface Propulsion {
    activate(): void;
  }
  
  export interface ControlSystem {
    engage(): void;
  }
  
  export interface FuturisticVehicleFactory {
    createPropulsion(): Propulsion;
    createControlSystem(): ControlSystem;
  }
  