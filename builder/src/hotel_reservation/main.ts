import { HotelReservationBuilder } from "./HotelReservationBuilder";

const deluxeReservation = new HotelReservationBuilder()
  .setRoomType("Luxo")
  .setNights(3)
  .addBreakfast()
  .addSeaView()
  .addPremiumWifi()
  .build();

console.log("Reserva 1:");
console.log(deluxeReservation.description());

const budgetReservation = new HotelReservationBuilder()
  .setRoomType("Standard")
  .setNights(1)
  .addLateCheckout()
  .build();

console.log("\nReserva 2:");
console.log(budgetReservation.description());
