import { Creature, CreatureFactory } from './interfaces';

export class SeaSerpent implements Creature {
  attack(): void {
    console.log("A Serpente Marinha desencadeia uma grande onda esmagadora!");
  }
}

export class Triton implements Creature {
  attack(): void {
    console.log("O Tritão rapidamente lança um jato de água poderoso!");
  }
}

export class WaterKingdomFactory implements CreatureFactory {
  createStrongCreature(): Creature {
    return new SeaSerpent();
  }

  createFastCreature(): Creature {
    return new Triton();
  }
}
