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

import { HotelReservationDirector } from "./HotelReservationDirector";

console.log("\nReservas com diretor:");
const hotelBuilder = new HotelReservationBuilder();
const hotelDirector = new HotelReservationDirector(hotelBuilder);

hotelDirector.noBreakfast();
console.log(hotelBuilder.build().description());

hotelDirector.luxury();
console.log(hotelBuilder.build().description());

hotelDirector.standard();
console.log(hotelBuilder.build().description());
