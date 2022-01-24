function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML += ' Bom dia!'
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#f3ceb7'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        msg.innerHTML += ' Boa tarde!'
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fea671'
    } else {
        // BOA NOITE!
        msg.innerHTML += ' Boa noite!'
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#2b1e2f'
    }
}
