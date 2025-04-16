import { DoBrasil } from "./sdk/DoBrasil";

export class Cobranca {
  private doBrasil: DoBrasil;

  constructor(doBrasil: DoBrasil) {
    this.doBrasil = doBrasil;
  }

  setValor(valor: number) {
    this.doBrasil.setValor(valor);
  }

  setParcelas(numParcelas: number) {
    this.doBrasil.setParcelas(numParcelas);
  }

  setNumeroCartao(numCartao: string) {
    this.doBrasil.setNumeroCartao(numCartao);
  }

  setCVV(numCvv: string) {
    this.doBrasil.setCVV(numCvv);
  }

  validarCartao(): boolean {
    return this.doBrasil.validarCartao();
  }

  realizarPagamento(): boolean {
    return this.doBrasil.realizarPagamento();
  }
}