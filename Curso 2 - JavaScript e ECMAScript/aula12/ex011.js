var idade = 27

console.log(`Você tem ${idade} anos.`)

if (idade<16){
    console.log(`Você não pode votar com ${idade} anos.`)
}else if (idade < 18 || idade>65){
    console.log(`Com ${idade} anos, o seu voto é opcional.`)
}else {
    console.log(`Você é obrigado a votar com ${idade} anos de idade.`)
}