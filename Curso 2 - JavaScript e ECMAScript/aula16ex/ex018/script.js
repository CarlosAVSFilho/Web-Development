var number_txt = window.document.getElementById('numbertxt')
var lista = document.getElementById('lista')
var msgs = window.document.getElementById('answer')
var usados = []

function adicionar(){
    if (number_txt.value.length == 0 || Number(number_txt.value) > 100 || Number(number_txt.value) <= 0){
        window.alert('Entre com um numero válido!')
    }else{
        var number = Number(number_txt.value)
        if (usados.indexOf(number) == -1){
            var item = document.createElement('option')
            item.text += `Adicionado o valor ${number}`
            lista.appendChild(item)
            
            usados.push(number)

        }else{
            window.alert('Este numero já foi adicionado! Escolha um número novo')
        }
    }
    msgs.innerHTML = ''
    number_txt.value = ''
    number_txt.focus()
}

function finalizar(){
    if (usados.length == 0){
        window.alert('Adicione algum número antes de finalizar!')
    }else{
        usados.sort(function(a,b){return a-b}) //Ordena em ordem crescente

        var qtd_num = usados.length
        var maior_num = usados[usados.length-1]
        var menor_num = usados[0]

        var soma_num = 0
        for (let pos = 0; pos < usados.length; pos++) {
            soma_num += usados[pos]
        }

        var media = soma_num/qtd_num

        msgs.innerHTML = `<br>Ao todo, temos ${qtd_num} número(s) cadastrados.<br>`
        msgs.innerHTML += `<br>O maior valor informado foi ${maior_num}.<br>`
        msgs.innerHTML += `<br>O menor valor informado foi ${menor_num}.<br>`
        msgs.innerHTML += `<br>Somando todos os valores, temos: ${soma_num}.<br>`
        msgs.innerHTML += `<br>A média dos valores inseridos é: ${media}.<br>`
    }
}