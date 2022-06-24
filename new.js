// const fichaGuerreiro = {
//   nome: "Aragorn",
//   classe: "guerreiro"
//  }
 
//  const equipoGuerreiro = {
//   espada: "Andúril",
//   capa: "capa élfica +2"
//  }

//  const guerreiro = { ...fichaGuerreiro,...equipoGuerreiro }
// console.log(guerreiro)

// const numerosPares = [ 2, 4, 6, 8, 10]

// const numerosImpares = [ 1, 3, 5, 7, 9]

// const numerosJuntos1 =  [...numerosImpares, ...numerosPares]
// console.log(numerosJuntos1)

// const numerosJuntos2 = numerosPares.concat(numerosImpares)

// console.log(numerosJuntos2)

const pessoa1 = {
  nome: "Ana",
  email: "a@email.com",
  imprimeInfo: imprimeNomeEmail
 }
 
 const pessoa2 = {
  nome: "Paula",
  email: "p@email.com",
  imprimeInfo: imprimeNomeEmail
 }

 function imprimeNomeEmail () {
    console.log(`nome: ${this.nome} email ${this.email}`)
 }

 pessoa1.imprimeInfo()
 pessoa2.imprimeInfo()