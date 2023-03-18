function fatorial(n)
{
    if (n=1)
    {
        return '1'
    }
    else
    {
    for (var i = n-1; i >= 1; i--)
    {
    fat = n*=i
    }
    return fat
    }
}
console.log(fatorial(5)) //120