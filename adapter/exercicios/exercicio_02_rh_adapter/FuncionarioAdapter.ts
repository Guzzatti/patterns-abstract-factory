import { FuncionarioB } from "./FuncionarioB";
import { FuncionarioA } from "./SistemaA";

export class FuncionarioAdapter implements FuncionarioA {
  nomeCompleto: string;
  cargo: string;
  salario: number;

  constructor(funcionarioB: FuncionarioB) {
    this.nomeCompleto = `${funcionarioB.primeiroNome} ${funcionarioB.sobrenome}`;
    this.cargo = funcionarioB.posicao;
    this.salario = funcionarioB.rendaMensal;
  }
}
