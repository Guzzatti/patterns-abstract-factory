import { Creature, CreatureFactory } from './interfaces';

export class Dragon implements Creature {
  attack(): void {
    console.log("O Dragão lança uma poderosa chama de fogo!");
  }
}

export class Salamander implements Creature {
  attack(): void {
    console.log("A Salamandra dispara rapidamente labaredas ardentes!");
  }
}

export class FireKingdomFactory implements CreatureFactory {
  createStrongCreature(): Creature {
    return new Dragon();
  }

  createFastCreature(): Creature {
    return new Salamander();
  }
}
