//from the website https://dev.to/acsreedharreddy/represent-pair-data-structure-using-functions-4ecp
function pair(m, n)
{
    return (val) => (val === 0 ? m : n);
}

function head(p)
{
    return p(0);
}

function tail(p)
{
    return p(1);
}

function Fraction(n,d)
{
    const g = gcd(n, d);
    return (n/d<0) ? pair(-1*abs(n)/g,abs(d)/g) : pair(abs(n)/g,abs(d)/g);
}

function numer(x)
{
    return head(x);
}

function denom(x)
{
    return tail(x);
}

function add_frac(x,y)
{
    return Fraction(numer(x) * denom(y) + numer(y) * denom(x) , denom(x) * denom(y));
}

function sub_frac(x,y)
{
    return Fraction(numer(x) * denom(y) - numer(y) * denom(x) , denom(x) * denom(y));
}

function mult_frac(x,y)
{
    return Fraction(numer(x) * numer(y), denom(x) * denom(y) );
}

function div_frac(x,y)
{
    return Fraction(numer(x) * denom(y), numer(y) * denom(x) );
}

function eq_rat(x,y)
{
    return numer(x) * denom(y) === numer(y) * denom(x);
}

function pfrac(r)
{
    return JSON.stringify(numer(r)) + '/' + JSON.stringify(denom(r));
}

function counter()
{
    var count = 0;
    return () => count++;
} 
//var x = counter(); 
//x()

function foo()
{
    var x = 0;
    var y = 1;
    return (n) => (n===0 ? x = x+1 : y = 2*y);
}


function um()
{
    return 2;
}