function verificar()
{

  var data = new Date();
  var anoAtual = data.getFullYear();
  var txtAno = document.getElementById('txtano');
  var res = document.getElementById('res');
  var img = document.getElementById('imagem')
  
  if (txtAno.value.length == 0 || txtAno.value > anoAtual)
  {
    window.alert('[ERRO] Verifique os dados e tente novamente');
  }
  else
  {
  var idade = anoAtual - Number(txtAno.value);
  var sex = document.getElementsByName('radsex')
  var genero = ''
  var imgSrc = ''
  
  if (sex[0].checked) //input radio option 1
  {
    genero = 'Homem'
    if (idade >= 0 && idade < 10)
    {
      imgSrc = 'homemcrianca.png'
    }
    else if (idade < 21)
    {
      imgSrc = 'homemjovem.png'
    }
    else if (idade < 50)
    {
      imgSrc = 'homemadulto.png'
    }
    else
    {
      imgSrc = 'homemidoso.png'
    }
  }
  else if (sex[1].checked) //input radio option 2
  {
    genero = 'Mulher'
    if (idade >= 0 && idade < 10)
    {
      imgSrc = 'mulhercrianca.png'
    }
    else if (idade < 21)
    {
      imgSrc = 'mulherjovem.png'
    }
    else if (idade < 50)
    {
      imgSrc = 'mulheradulta.png'
    }
    else
    {
      imgSrc = 'mulheridosa.png'
    }
    }
    res.innerHTML = `Você é ${genero} com ${idade} anos.`;
    document.getElementById('imagem').innerHTML = `<img src="${imgSrc}" alt="${genero}">`;
  }
}
  