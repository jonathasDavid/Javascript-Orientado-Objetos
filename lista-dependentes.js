const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "04433333322",
  email: "andre@email.com",
  fones: ["62991576587", "98669698547"],
  dependentes : [{
    nome: "Sara", 
    parentesco: "filha",
    dataNasc: "20/03/2011"
  }]
}

cliente.dependentes.push({
  nome: "Sheila", 
    parentesco: "filha",
    dataNasc: "22/04/2015"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="22/04/2015" )

console.log(filhaMaisNova[0].nome)
