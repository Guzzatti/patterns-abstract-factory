export class DoBrasil {
    private valor: number = 0;
    private numParcelas: number = 0;
    private numCartao: string = "";
    private numCvv: string = "";
  
    setValor(valor: number) {
      this.valor = valor;
    }
  
    setParcelas(numParcelas: number) {
      this.numParcelas = numParcelas;
    }
  
    setNumeroCartao(numCartao: string) {
      this.numCartao = numCartao;
    }
  
    setCVV(numCvv: string) {
      this.numCvv = numCvv;
    }
  
    validarCartao(): boolean {
      if (
        this.numCartao !== "" &&
        this.numCvv !== "" &&
        this.numCvv.length === 3
      ) {
        return true;
      }
  
      return false;
    }
  
    realizarPagamento(): boolean {
      console.log("Pagamento realizado via Banco do Brasil");
      return true;
    }
  }