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

function rational(m,n)
{
    return pair(m,n);
}

function numer(x)
{
    return head(x);
}

function denom(x)
{
    return tail(x);
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