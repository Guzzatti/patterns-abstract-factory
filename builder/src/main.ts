import GeradorPDF from "./GeradorPDF";

console.log("## Criação objeto A4");
const pdfA4 = new GeradorPDF(
  "portrait",
  "mm",
  210,
  297,
  30,
  20,
  30,
  20,
  true,
  15,
  true,
  15,
  "#ffffff",
  "UTF-8"
);

console.log(pdfA4.toString());

console.log("## Criação objeto A3");
const pdfA3 = new GeradorPDF(
  "portrait",
  "mm",
  297,
  420,
  60,
  40,
  60,
  40,
  false,
  0,
  false,
  0,
  "#ffffff",
  "UTF-8"
);

console.log(pdfA3.toString());