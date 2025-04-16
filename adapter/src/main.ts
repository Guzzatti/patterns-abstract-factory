import { Cobranca } from "./Cobranca";
import { DoBrasil } from "./sdk/DoBrasil";

console.log("Hello world!");

const doBrasil = new DoBrasil();
const cobranca = new Cobranca(doBrasil);

cobranca.setValor(100);
cobranca.setParcelas(3);
cobranca.setNumeroCartao("1234123412341234");
cobranca.setCVV("123");

if (cobranca.realizarPagamento()) {
  console.log("- sucesso");
} else {
  console.log("- falha");
}