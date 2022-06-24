const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "04433333322",
  email: "andre@email.com",
  fones: ["62991576587", "98669698547"]
}

cliente.dependentes = {
  nome: "Sara", 
  parentesco: "filha",
  dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara David"

console.log(cliente)