export class Caixa {
    private valorTotal: number = 0;
    private quantidadeParcelas: number = 0;
    private numCartao: string = "";
    private numCvv: string = "";
  
    setValorTotal(valor: number) {
      this.valorTotal = valor;
    }
  
    setQuantidadeParcelas(numParcelas: number) {
      this.quantidadeParcelas = numParcelas;
    }
  
    setCartao(numCartao: string, numCvv: string) {
      this.numCartao = numCartao;
      this.numCvv = numCvv;
    }
  
    realizarPagamento(): boolean {
      console.log("Pagamento realizado via Caixa Economica");
      return true;
    }
  }