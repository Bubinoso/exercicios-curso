function contar()
{
    let start = document.getElementById('txti')
    let end = document.getElementById('txtf')
    let step = document.getElementById('txtp')
    let res = document.getElementById('res')

    // se deixar todas as caixas sem nada vai dar erro, se não ele vai tentar contar

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0)
    {
        alert('Faltam passos')
    }
    else
    {
        res.innerHTML = `Contando:`
        let i = Number(start.value)
        let e = Number(end.value)
        let s = Number(step.value)
        if (s <= 0)
        {
            alert('[Passo Invalido]Considerando passo = 1')
            s = 1
        }

    if (i < e)
    {
        // contagem crescente
        for (let c = i; c <= e; c += s) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{F3C1}`
        }
        else
        {
        // contagem decrescente
            for (let c = i; c >= e; c -= s)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{F3C1}`
    }
}