function cube(x)
{
    return x*x*x;
}

function inc(n)
{
    return n + 1;
}

function sigma(term, a, b, next)
{
    return a > b ? 0 : term(a) + sigma(term, next(a), b, next);
}

function sum(a, b)
{
    return sigma(identity, a, b, inc);
}

function sum_cubes(a, b)
{
    return sigma(cube, a, b, inc);
}

function identity(x)
{
    return x;
}

function my_sigma(func, a, b)
{
    return a > b ? 0 : func(a) + my_sigma(func, a + 1, b);
}

function my_sum(a, b)
{
    return a > b ? 0 : a + my_sum(a + 1, b);
}

function my_cube_sum(a, b)
{
    return a > b ? 0 : (x => x*x*x)(a) + my_cube_sum(a + 1, b);
}

function deriv(g)
{
    const dx = .00001;
    return x=>(g(x + dx) - g(x)) / dx;
}
//deriv( x=>f(x) )(x')