import { SistemaA } from "./SistemaA";
import { FuncionarioB } from "./FuncionarioB";
import { FuncionarioAdapter } from "./FuncionarioAdapter";

// Instancia um funcionário do Sistema B
const funcionarioB = new FuncionarioB("Gabriel", "Guzzatti", "CTO", 12000);

// Adapta para a interface do Sistema A
const funcionarioAdaptado = new FuncionarioAdapter(funcionarioB);

// Usa o sistema A normalmente
const sistemaA = new SistemaA();
sistemaA.exibirFuncionario(funcionarioAdaptado);
