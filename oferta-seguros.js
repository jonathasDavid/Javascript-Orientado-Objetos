const cliente = 
{
      nome: "Andre",
      idade: 36,
      cpf: "04433333322",
      email: "andre@email.com",
      fones: ["62991576587", "98669698547"],
  dependentes :
  [
    {
      nome: "Sara", 
      parentesco: "filha",
      dataNasc: "20/03/2011"
    },
    {
      nome: "Seilá Algum", 
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
function oferecerSeguro(obj){
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes"))
  {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

oferecerSeguro(cliente)
//console.log(Object.values(cliente))
//console.log(Object.entries(cliente))