export class HotelReservation {
    roomType!: string;
    nights!: number;
    breakfast?: boolean;
    seaView?: boolean;
    premiumWifi?: boolean;
    lateCheckout?: boolean;
  
    description(): string {
      let desc = `Reserva de ${this.nights} noite(s) no quarto ${this.roomType}`;
  
      const extras: string[] = [];
      if (this.breakfast) extras.push("café da manhã");
      if (this.seaView) extras.push("vista para o mar");
      if (this.premiumWifi) extras.push("wifi premium");
      if (this.lateCheckout) extras.push("late checkout");
  
      if (extras.length > 0) {
        desc += ` com ${extras.join(", ")}`;
      }
  
      return desc;
    }
  }
  