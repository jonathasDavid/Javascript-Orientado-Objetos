const cliente = {
      nome: "Andre",
      idade: 36,
      cpf: "04433333322",
      email: "andre@email.com",
      fones: ["62991576587", "98669698547"],
      dependentes : [
    {
      nome: "Sara", 
      parentesco: "filha",
      dataNasc: "20/03/2011"},
    {
      nome: "sheila", 
      parentesco: "filha",
      dataNasc: "22/04/2015"
    }
  ],
      saldo: 100,
  depositar: function(valor)
  {
      this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

// const cliente2 = Object.create(cliente)
// cliente2.nome = "Andreff"
// console.log(cliente2.nome)
