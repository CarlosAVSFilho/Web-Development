function tabuada(){
    let num_txt = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab')
    
    if (num_txt.value.length == 0){
        window.alert('Entre com algum número!')
    }else{
        let num = Number(num_txt.value)

        //Fazendo com while apenas para praticar. Eu faria com for casualmente

        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text += `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}