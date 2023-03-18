let pessoa1 =
{
    nome: 'Ramon Camolez',
    sexo: 'Masculino',
    idade: '17 anos',
    peso: 68.5,
    hipertrofia(p)
    {
        console.log(`Cresceu`)
        this.peso += p
    }
}

pessoa1.hipertrofia(5)

console.log(pessoa1)

if (pessoa1.peso >= 75)
{
    console.log(`Aberração`)
}
else
{
    console.log(`Frango`)
}