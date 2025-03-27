import { CreatureFactory } from './creatures/interfaces';
import { FireKingdomFactory } from './creatures/fireCreatures';
import { WaterKingdomFactory } from './creatures/waterCreatures';

function testKingdom(factory: CreatureFactory): void {
  const strongCreature = factory.createStrongCreature();
  const fastCreature = factory.createFastCreature();

  strongCreature.attack();
  fastCreature.attack();
}

console.log("🔴 Reino do Fogo:");
testKingdom(new FireKingdomFactory());

console.log("\n🔵 Reino da Água:");
testKingdom(new WaterKingdomFactory());
