const clientes = [
  {
    nome: "Andre",
    cpf: "04433333322",
    dependentes : [{
      nome: "Sara", 
      parentesco: "filha",
      dataNasc: "20/03/2011"
    },
    {
      nome: "sheila", 
      parentesco: "filha",
      dataNasc: "22/04/2015"
      }],
  },
  {
    nome: "Juliana",
    cpf: "56988997785",
    dependentes : [{
      nome: "Mikio", 
      parentesco: "filho",
      dataNasc: "24/04/2014"
    },
    {
      nome: "Augusto", 
      parentesco: "filho",
      dataNasc: "23/02/2013"
      }],
  }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes)
