function verificar(){
    var nasc_txt = window.document.getElementById('txtyear')
    var nasc = Number(window.document.getElementById('txtyear').value)
    var idade = new Date().getFullYear() - nasc
    var msg = window.document.getElementById('msgdetec')

    if (nasc_txt.value.length == 0 || idade < 0){
        window.alert('Entre com um ano de nascimento válido!')
    }else{
        var sexo_m = window.document.getElementById('masc')

        var img = document.createElement('img') //Criando a tag dinamicamente
        img.setAttribute('id','foto')


        if (sexo_m.checked == true){
            var genero = 'Homem'
            if (idade <= 12){
                //img.src = 'child-boy.png'
                img.setAttribute('src','child-boy.png')
            }else if (idade >12 && idade <21){
                if (idade == 14){
                    //foto pretinho
                    var genero = 'um Pretinho'
                    img.setAttribute('src','pretinho.png')
                }else{
                    //foto adolescente
                    img.setAttribute('src','teenager-boy.png')
                }    
            }else if (idade >21 && idade <65){
                if (idade == 28){
                    //foto minha
                    var genero = 'O Lindo das Galáxias'
                    img.setAttribute('src','eu.png')
                }else if (idade==32){
                    //foto josé
                    var genero = 'o Zé'
                    img.setAttribute('src','ze.png')
                }else if (idade==56){
                    //foto pai
                    var genero = 'Papai'
                    img.setAttribute('src','pai2.png')
                }else{
                    //foto adulto
                    img.setAttribute('src','adult-boy.png')
                }
            }else if (idade >=65){
                //foto avô
                img.setAttribute('src','grandfather.png')
            }
        }else{
            var genero = 'Mulher'
            if (idade <= 12){
                //foto criança
                img.setAttribute('src','child-girl.png')
            }else if (idade >12 && idade <21){
                //foto adolescente
                img.setAttribute('src','teenager-girl.png')
            }else if (idade >21 && idade <65){
                if (idade==32){
                    //foto lorraine
                    var genero = 'a Totó'
                    img.setAttribute('src','lorraine.png')
                }else if (idade==55){
                    //foto mãe
                    var genero = 'Mamãe'
                    img.setAttribute('src','mae.png')
                }else{
                    //foto adulto
                    img.setAttribute('src','adult-girl.png')
                }
            }else if (idade >=65){
                //foto avô
                img.setAttribute('src','grandmother.png')
            }
        }

        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.appendChild(img)
    }
}