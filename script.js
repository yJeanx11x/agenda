const datas=new Date().getHours()
const compromisso = [];

function propriedades(id, titulo, data, horario) {
  return new Promise((resolve, reject) => {
    if (typeof compromisso != "object") reject("Erro");
    const add = { 
        id: id, 
        titulo: titulo, 
        data: data, 
        horario:datas};
    resolve(console.log(`Seu Compromisso for registrado`,add));

    cosmpromisso.push(add)
  });
}
propriedades(8,'Veloz',16,14)
console.log(compromisso)