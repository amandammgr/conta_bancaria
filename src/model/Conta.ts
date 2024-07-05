export abstract class Conta{

    // definir os atributos da classe (caracteristicas)
    private _numero: number; 
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

// definimos o método construtor, responsável por criar os objetos da classe
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}

    // definidos os métodos get e set de cada atributo
   
	 public get numero(): number {
		return this._numero;
	}

    
     
	public get agencia(): number {
		return this._agencia;
	}

   
	public get tipo(): number {
		return this._tipo;
	}

  
	public get titular(): string {
		return this._titular;
	}

    
	public get saldo(): number {
		return this._saldo;
	}

    
	public set numero(value: number) {
		this._numero = value;
	}

   
	public set agencia(value: number) {
		this._agencia = value;
	}

  
	public set tipo(value: number) {
		this._tipo = value;
	}

   
	public set titular(value: string) {
		this._titular = value;
	}

    
	public set saldo(value: number) {
		this._saldo = value;
	}

    // metodo sacar dinheiro da conta

    public sacar(valor: number): boolean{

        if (this._saldo < valor){
            console.log("Saldo é insuficiente!")
            return false;
        }
            this._saldo =  this._saldo - valor;
            return true;
    }

    // Método Depositar
    public depositar(valor: number): void{

        this._saldo =  this._saldo + valor;

    }



    // Método para visualizar todos os dados da conta

    public visualizar(): void{
        let tipo: string = "";
 
        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
            break;
            case 2:
                tipo = "Conta Poupança";
            break
        }
        console.log('\n*******');
        console.log('Dados da Conta');
        console.log(`\nNumero da Conta: ${this._numero}`);
        console.log(`\nNumero da agencia: ${this._agencia}`);
        console.log(`\nTipo da conta: ${tipo}`);
        console.log(`\nTitular da conta: ${this._titular}`);
        console.log(`\nSaldo da conta: ${this._saldo.toFixed(2)}`);
        
    }

    //Exemplo de um método abstrato
    // public abstract teste(): void;

    // exemplo do método abstrato q estava na conta corrente
    // public teste(): void {
    //     throw new Error("Method not imprlemented.");
    // }

}