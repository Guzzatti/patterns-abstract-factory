import { DataExterna } from "./DataExterna";
import { DataAdapter } from "./DataAdapter";

const externa = new DataExterna("2025-04-16");
const adaptada = new DataAdapter(externa);

console.log(adaptada.getData()); // Saída: 16/04/2025
