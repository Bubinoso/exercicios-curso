const numeros = [];
const selectNumeros = document.getElementById('lista')
let res = document.querySelector('div#res')



function adicionar()
{
    const inputNumero = document.getElementById('caixa')
    const numero = Number(inputNumero.value)

    if (numero >= 1 && numero <= 100)
    {
      if (numeros.includes(numero))
      {
        alert('Esse número já foi adicionado à lista.')
      }
      else
      {
        numeros.push(numero);
        atualizarLista();
        inputNumero.value = '';
      }
    } else
    {
      alert('Digite um número de 0 a 100.')
    }
    inputNumero.value = ''
    inputNumero.focus()
    res.innerHTML = ''
}

function atualizarLista()
{
    selectNumeros.innerHTML = '';

    for (const numero of numeros)
    {
      const item = document.createElement('option')
      item.textContent = `Valor ${numero} adicionado`
      selectNumeros.appendChild(item);
    }
}

function finalizar()
{
  if (numeros.length === 0)
  {
    window.alert(`Adicione valores antes de finalizar`)
  }

  let maior = numeros[0]
  let menor = numeros[0]
  let somaElementos = 0
  for (const numero of numeros)
  {
    if (numero > maior)
    {
      maior = numero
    }
    if (numero < menor)
    {
      menor = numero
    }
    somaElementos += numero
  }
  let media = somaElementos / numeros.length

  res.innerHTML = ''
  res.innerHTML += `Foram adicionados ${numeros.length} elementos à lista<br>`
  res.innerHTML += `A soma dos elementos é ${somaElementos}<br>`
  res.innerHTML += `O maior valor foi ${maior} e o menor foi ${menor}<br>`
  res.innerHTML += `A média dos elementos é ${media.toFixed(2)}`
}
