export class DataExterna {
    private isoDate: string; // formato YYYY-MM-DD
  
    constructor(isoDate: string) {
      this.isoDate = isoDate;
    }
  
    getIsoDate(): string {
      return this.isoDate;
    }
  }
  