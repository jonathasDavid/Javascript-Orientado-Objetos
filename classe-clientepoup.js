class Cliente {
  constructor(nome,email,cpf,saldo){
    this.nome= nome
    this.email= email
    this.cpf= cpf
    this.saldo= saldo
  }

  depositar(valor){
    this.saldo += valor
  }

  exibirSaldo(){
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldopoupanca){
      super(nome, email, cpf, saldo)
      this.saldopoupanca = saldopoupanca
    }

    depositarSaldoPoupanca(valor){
      this.saldopoupanca += valor
    }

}

const Jonathas = new ClientePoupanca ("Jonathas", "jonathas@gmail.com", "98998895584",
100, 500)

console.log(Jonathas)