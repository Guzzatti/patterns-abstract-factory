export class DataLocal {
    private data: string; // formato DD/MM/YYYY
  
    constructor(data: string) {
      this.data = data;
    }
  
    getData(): string {
      return this.data;
    }
  }
  