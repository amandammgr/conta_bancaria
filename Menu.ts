import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    //Novas instancias da classe conta (Objetos da classe Conta)

    const c1: Conta = new Conta(1, 1234, 1, 'Julia Castro', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);
    
    // visualizando os dados da conta c1
    c1.visualizar();
    // visualizando os dados da conta c2
     c2.visualizar();

    // mostra algo especifico (como só o saldo)
    console.log(`\nO saldo da conta 01 é: ${c1.saldo}`)  
    // Alterando o saldo da conta c2
    c2.saldo = 900000.00;
    // mostra a nova alteração da c2 na tela
    console.log(`\nO saldo da conta 01 é: ${c2.saldo}`)

    // Saque nas contas
    console.log(`\nSacar 100 reias da conta c2: ${c1.sacar(100)}`) // true
    c1.visualizar();

    console.log(`\nSacar 100000.00 reias da conta c2: ${c2.sacar(1000000)}`) // false
    c2.visualizar();

        // Depositar nas contas
    console.log(`\nDepositar 200000.00 reias da conta c2:`)
    c1.depositar(200000);
    c1.visualizar();

    console.log(`\nDepositar 300000.25 reias da conta c2:`)
    c2.depositar(300000.25);
    c2.visualizar();


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

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

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