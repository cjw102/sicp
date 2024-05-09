//Exercise 1.10 -- Ackermann's function
function A(x,y)
{
    return y === 0 ? 0 
    : x === 0 ? 2 * y 
    : y === 1 ? 2 
    : A(x - 1, A(x, y - 1));
}

//A(0, n) --> 2n
//A(1, n) --> 2^n
//A(2, n) --> 


function gcd(x, y)
{
    return y === 0 ? abs(x) : gcd(y, x % y) ;  
}


function is_prime(n)
{
    function iter(div)
    {
        return div === 1 ? true : n % div === 0 ? false : iter(div - 1);
    }

    return iter(floor(sqrt(n)));
}

function floor(n)
{
    return n - n%1;
}