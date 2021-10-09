let pessoa ={
  nome:'jose',
   sexo:'M',
   idade:18,
   peso:85,
   engordar(p = 0){
     this.peso += p
   }
}
pessoa.engordar(2)
console.log(`${pessoa.nome} pesa ${pessoa.peso}kg`);
