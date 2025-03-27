export interface Creature {
    attack(): void;
  }
  
  export interface CreatureFactory {
    createStrongCreature(): Creature;
    createFastCreature(): Creature;
  }
  