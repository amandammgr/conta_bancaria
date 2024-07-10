import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    const contas: ContaController = new ContaController();

    //Novas instancias da classe conta (Objetos da classe Conta)

    // const c1: Conta = new Conta(1, 1234, 1, 'Julia Castro', 800000.00);
    // const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);

    // // visualizando os dados da conta c1
    // c1.visualizar();
    // // visualizando os dados da conta c2
    //  c2.visualizar();

    // // mostra algo especifico (como só o saldo)
    // console.log(`\nO saldo da conta 01 é: ${c1.saldo}`)  
    // // Alterando o saldo da conta c2
    // c2.saldo = 900000.00;
    // // mostra a nova alteração da c2 na tela
    // console.log(`\nO saldo da conta 01 é: ${c2.saldo}`)

    // // Saque nas contas
    // console.log(`\nSacar 100 reias da conta c2: ${c1.sacar(100)}`) // true
    // c1.visualizar();

    // console.log(`\nSacar 100000.00 reias da conta c2: ${c2.sacar(1000000)}`) // false
    // c2.visualizar();

    //     // Depositar nas contas
    // console.log(`\nDepositar 200000.00 reias da conta c2:`)
    // c1.depositar(200000);
    // c1.visualizar();

    // console.log(`\nDepositar 300000.25 reias da conta c2:`)
    // c2.depositar(300000.25);
    // c2.visualizar();



    //Novas instancias da classe conta (Objetos da classe Conta)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 2, 'Joao da Silva', 600000.00, 100.00));

    // console.log(`\nSaque de R$ 25.000,00 na Conta cc1: ${cc1.sacar(25000)}`)
    // console.log(`\nSaque de R$ 1.500,00 na Conta cc2: ${cc2.sacar(15000)}`)

    // console.log(`\nDepositar R$ 3.000,99 da Conta cc2: `)
    // cc2.depositar(3000.99)
    // cc2.visualizar();

    // cc1.visualizar();
    // cc2.visualizar();    

    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 1, 'Geana Almeida', 1000000.00, 4));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 1, 'Jean da Silva', 1000000.00, 4));
    // cp1.visualizar();
    // cp1.sacar(200);
    // cp1.visualizar();
    // cp1.depositar(1000);
    // cp1.visualizar();


    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                console.log('Digite o numero da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o nome do Titular da Conta: ');
                titular = readlinesync.question("");


                console.log('Digite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break;
                    case 2:
                        console.log('Digite a Data de Aniversario da Conta ');
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                console.log("Digite o numero da conta: ")
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {

                    console.log('Digite o numero da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Digite o nome do Titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('Digite o Saldo da Conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;
                    switch (tipo) {
                        case 1:
                            console.log('Digite o Limite da Conta: ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log('Digite a Data de Aniversario da Conta ');
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }
                } else {
                    console.log("\nConta nao encontrada!");
                }




                keyPress()
                break;

            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log("\n\nSaque\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do deposito: ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                console.log("Digite o numero da conta de origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o numero da conta de destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Amanda Machado Magro");
    console.log("Amanda Machado Magro - amandamachadomgr@gmail.com");
    console.log("github.com/amandammgr/conta_bancaria");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();