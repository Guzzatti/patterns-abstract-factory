import { HotelReservation } from "./HotelReservation";

export class HotelReservationBuilder {
  private reservation: HotelReservation;

  constructor() {
    this.reservation = new HotelReservation();
  }

  setRoomType(type: string): HotelReservationBuilder {
    this.reservation.roomType = type;
    return this;
  }

  setNights(nights: number): HotelReservationBuilder {
    this.reservation.nights = nights;
    return this;
  }

  addBreakfast(): HotelReservationBuilder {
    this.reservation.breakfast = true;
    return this;
  }

  addSeaView(): HotelReservationBuilder {
    this.reservation.seaView = true;
    return this;
  }

  addPremiumWifi(): HotelReservationBuilder {
    this.reservation.premiumWifi = true;
    return this;
  }

  addLateCheckout(): HotelReservationBuilder {
    this.reservation.lateCheckout = true;
    return this;
  }

  build(): HotelReservation {
    if (!this.reservation.roomType || !this.reservation.nights) {
      throw new Error("Room type and number of nights are required.");
    }
    return this.reservation;
  }
}
