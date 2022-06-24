const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "04433333322",
  email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(infos => console.log(cliente[infos]))



