import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    //Coleção array que vai armazenar os Objetos Conta
    private listaContas: Array<Conta> = new Array<Conta>();

    // Controlar os números das Contas (como um contador)
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if(buscarConta !== null)
            buscarConta.visualizar();
        else
            console.log("\nA Conta não foi encontrada!");
    }

    listarTodas(): void {
        for(let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }

    atualizar(conta: Conta): void {
        let buscarConta = this.buscarNoArray(conta.numero);

        if(buscarConta !== null){
            this.listaContas[this.listaContas.indexOf(buscarConta)] = conta;
            console.log("\nA Conta foi atualizada!")
        } else
            console.log("\nA Conta não foi encontrada!");
    }

    deletar(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if(buscarConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscarConta, 1));
            console.log("\nA Conta foi excluida!")
        } else
            console.log("\nA Conta não foi encontrada!");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    // Métodos Auxiliares
    public gerarNumero(): number{
        return ++ this.numero;
    }


    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listaContas){
            if (conta.numero === numero)
                return conta;

        }

        return null;
    }
}