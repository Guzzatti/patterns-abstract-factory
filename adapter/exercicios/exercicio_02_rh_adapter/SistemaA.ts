export interface FuncionarioA {
    nomeCompleto: string;
    cargo: string;
    salario: number;
  }
  
  export class SistemaA {
    exibirFuncionario(func: FuncionarioA) {
      console.log(`Nome: ${func.nomeCompleto}`);
      console.log(`Cargo: ${func.cargo}`);
      console.log(`Salário: R$ ${func.salario.toFixed(2)}`);
    }
  }
  