function verificar() {

    const data = new Date()
    const ano = data.getFullYear()
    const fano = window.document.getElementById('txtano')
    const res = window.document.querySelector('div#res')
    
        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {

            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            var descrição = ''
            
            img.setAttribute('id', 'foto')

            if (idade === 1 )
                descrição = 'ano'
            else
                descrição = 'anos'

            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 10) {
                    // Criança
                    img.src = 'bbh.png'
                } else if (idade < 21) {
                    //Jovem
                    img.src = 'jovemh.png'
                } else if (idade < 50) {
                    //Adulto
                    img.src = 'adultoh.png'
                } else {
                    // Idoso
                    img.src = 'idosoh.png'
                }

            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 10) {
                    // Criança
                    img.src = 'bbm.png'
                } else if (idade < 21) {
                    //Jovem
                    img.src = 'jovemm.png'
                } else if (idade < 50) {
                    //Adulto
                    img.src = 'adultam.png'
                } else {
                    // Idoso
                    img.src ='idosam.png'
                }
            }
            
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} ${descrição}.`
            res.appendChild(img)


        }
}