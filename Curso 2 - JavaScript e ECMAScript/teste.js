//console.log('Hello World')

/*
for (let c = 0; c <= 10; c+=2) {
    console.log(c);
}
*/

/*
let c = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(c)
console.log(c[2]*4)
num.push(9) //Cria mais um elemento na ultima posicao ou simplesmente num[8]=9 neste caso
num.length //Mostra o cumprimento do array
num.sort() //Ordena os valores do vetor
num.indexOf(6) //Mostra onde o número 6 está armazenado. Se não estiver, a posição mostrada será -1
*/

/*
let c = [1, 2, 3, 4, 5, 6, 7, 8]
for (let pos = 0; pos < c.length; pos++) {
    console.log(c[pos])
}

//Apenas para arrays e objetos:
for (let pos in c){
    console.log(c[pos])
}
*/


teste = [1, 4, 5, 6, 44, 33, 38]
console.log(teste.sort(function(a,b){return a-b}))