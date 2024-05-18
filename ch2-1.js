//originally from the website https://dev.to/acsreedharreddy/represent-pair-data-structure-using-functions-4ecp
//but then later I actually found this method in the book
function pair(m, n)
{
    return (val) => (val === 0 ? m : val === 1 ? n : error(val, "arg not 0 or 1") );
}

function head(p)
{
    return p(0);
}

function tail(p)
{
    return p(1);
}

//from Exercise 2.4 -- an alternate representation of pair()
function pair2(x, y)
{
    return val => val(x, y)
}

function head2(p)
{
    return p((x, y) => x);
}

function tail2(p)
{
    return p((x, y) => y);
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

function print_frac(r)
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

//Exercise 2.6
const zero = f => x => x;
function add_1(n)
{
    return f => x => f(n(f)(x));
}

//Lambda Calculus!!!
const True  = a=>b=>a;
const False = a=>b=>b;
const If    = cond=>a=>b=>cond(a)(b);
const Not   = a=>a(False)(True);
const And   = a=>b=>(If(a)(If(b)(True)(False))(False));
const Nand  = a=>b=>Not(And(a)(b)); // W00o0W - now we can make computers!!
const Or    = a=>b=>(If(a)(True)(If(b)(True)(False)));
const Nor   = a=>b=>Not(Or(a)(b));
const Xor   = a=>b=>( If(a)(If(b)(False)(True))(If(b)(True)(False)) );
const Xnor  = a=>b=>Not(Xor(a)(b));