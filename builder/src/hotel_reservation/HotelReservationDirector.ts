import { HotelReservationBuilder } from "./HotelReservationBuilder";

export class HotelReservationDirector {
  constructor(private builder: HotelReservationBuilder) {}

  standard(): void {
    this.builder.setRoomType("Standard").setNights(1).addLateCheckout();
  }

  luxury(): void {
    this.builder
      .setRoomType("Luxo")
      .setNights(3)
      .addBreakfast()
      .addSeaView()
      .addPremiumWifi();
  }

  noBreakfast(): void {
    this.builder
      .setRoomType("Presidencial")
      .setNights(2)
      .addSeaView()
      .addPremiumWifi()
      .addLateCheckout();
  }
}
