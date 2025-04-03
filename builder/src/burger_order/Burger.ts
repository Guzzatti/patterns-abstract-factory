export class Burger {
    breadType!: string;
    protein!: string;
    cheese?: boolean;
    lettuce?: boolean;
    tomato?: boolean;
    onion?: boolean;
    specialSauce?: boolean;
    drink?: string;
  
    description(): string {
      let desc = `Hambúrguer com pão ${this.breadType}, proteína: ${this.protein}`;
  
      if (this.cheese) desc += ", queijo";
      if (this.lettuce) desc += ", alface";
      if (this.tomato) desc += ", tomate";
      if (this.onion) desc += ", cebola";
      if (this.specialSauce) desc += ", molho especial";
      if (this.drink) desc += `. Bebida: ${this.drink}`;
  
      return desc;
    }
  }
  