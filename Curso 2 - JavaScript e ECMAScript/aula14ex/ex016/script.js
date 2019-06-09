function contar(){
    var inicio_txt = window.document.getElementById('txt_ini_num')
    var fim_txt = window.document.getElementById('txt_end_num')
    var passo_txt = window.document.getElementById('txt_pace')
    var msg = window.document.getElementById('msg')

    if (inicio_txt.value.length == 0 || fim_txt.value.length == 0 || passo_txt.value.length == 0){
        msg.innerHTML = '<br>Entre com dados válidos.'
        window.alert('ERRO! Faltam dados!')
    }else{
        var inicio = Number(inicio_txt.value)
        var fim = Number(fim_txt.value)
        var passo = Number(passo_txt.value)
        msg.innerHTML = '<br>Contando: <br>'
        if (passo<=0){
            window.alert('Passo invalido. Considerando "Passo: 1"')
            passo = 1
        }
        
        //Contagem crescente
        if (inicio < fim){
            for(var c=inicio; c <= fim; c += passo){
                msg.innerHTML += `${c} \u{1F449} `
            }
        //Contagem regressiva
        }else if (inicio >= fim){
            for(var c=inicio; c >= fim; c -= passo){
                msg.innerHTML += `${c} \u{1F449} `
            }
        }  
        msg.innerHTML += '\u{1F6D1}FIM'
        //U+1F449 - mãozinha
        //U+1F6D1 - sinal de parada
    }
}
