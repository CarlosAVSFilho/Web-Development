function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    var minutos = date.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}h.`

    if (hora>=0 && hora<12){
        msg.innerHTML += ' Tenha um bom dia!'
        img.src = 'photo-morning.png'
        document.body.style.background = '#FFCDA4'
    }else if (hora>=12 && hora<=18){
        msg.innerHTML += ' Tenha uma boa tarde!'
        img.src = 'photo-afternoon.png'
        document.body.style.background = '#E3B697'
    }else{
        msg.innerHTML += ' Tenha uma boa noite!'
        img.src = 'photo-night.png'
        document.body.style.background = '#1B3B4A'
    }
}

