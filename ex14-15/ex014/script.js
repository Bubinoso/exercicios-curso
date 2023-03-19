function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12)
    {
        //Bom dia
        img.src = 'manhã.png'
        document.body.style.background = '#02cd9f'
    }
    else if (hora >= 12 && hora <= 18)
    {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.backbround = '#b9846f'
    }
    else 
    {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}