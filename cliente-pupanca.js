function cliente(nome, cpf,email,saldo)
{
  this.nome =nome
  this.cpf =cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor)
  {
    this.saldo += valor
  }

}

function clientePoupaca (nome, cpf, email, saldo, saldoPoup)
{
    cliente.call(this, nome, cpf, email, saldo) //vai em cliente e adiciona as prop do obj cliente à clientePOUP
                                                                    // dentro dos parenteses passa os parametros que dejesa
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupaca("Ju", "36666696996", "Ju@gmail.com", 100, 200 )

console.log(ju)

//acessa o obj poupança, entra dentro da propriedade prototype e adiciona um novo método 
// a essa propriedade que é uma função (depositaPoup) msm função de "obj.prop= 'novo valor' "
clientePoupaca.prototype.depositarPoup = function(valor)
{
  this.saldoPoup += valor 
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)

