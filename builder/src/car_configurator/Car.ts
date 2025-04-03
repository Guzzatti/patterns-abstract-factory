export class Car {
    model!: string;
    engineType!: string;
    color?: string;
    transmission?: string;
    sunroof?: boolean;
    premiumSound?: boolean;
    leatherSeats?: boolean;
  
    description(): string {
      let desc = `Carro modelo ${this.model}, motor ${this.engineType}`;
      if (this.color) desc += `, cor ${this.color}`;
      if (this.transmission) desc += `, câmbio ${this.transmission}`;
  
      const extras: string[] = [];
      if (this.sunroof) extras.push("teto solar");
      if (this.premiumSound) extras.push("som premium");
      if (this.leatherSeats) extras.push("bancos de couro");
  
      if (extras.length > 0) {
        desc += `, com ${extras.join(", ")}`;
      }
  
      return desc;
    }
  }
  