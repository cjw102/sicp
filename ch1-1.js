function sqrt_prc(x)
{
    var g = 1; // guess

    for(var i = 0; i < 100; i++)
    {
        g = (x/g + g)/2;
    }

    return g;
}


function abs(x)
{
    return x >= 0 ? x : x * -1;
}

function square(x)
{
    return x * x;
}

//note -- only works for POSITIVE powers
function pow(x,y)
{
    return y===1 ? x : x * pow(x, y - 1);
}

function conditional(predicate, then, els)
{
    return predicate ? then : els;
}


//square root
function sqrt(x)
{
    function sqrt_iter(guess, x)
    {
        return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
    }

    function is_good_enough(guess, x)
    {
        return abs(square(guess) - x) < 0.0001;
    }

    function improve(guess, x)
    {
        return avg(guess, x/guess);
    }

    function avg(x, y)
    {
        return x/2 + y/2;
    }

    return sqrt_iter(1, x);
}



//Exercise 1.8 -- cube root 
function cbrt(x)
{
    function cbrt_iter(guess, x)
    {
        return is_good_enough(guess, x) ? guess : cbrt_iter(improve(guess, x), x);
    }

    function improve(guess, x)
    {
        return avg(guess, x/square(guess));
    }

    function avg(x,y)
    {
        return 2/3*x + y/3;
    }

    function is_good_enough(guess, x)
    {
        return abs(pow(guess,3) - x) < 0.0001;
    }

    return cbrt_iter(1, x);
}


//nth root 
function nrt(n, x)
{
    function nthrt_iter(n, x, guess)
    {
        return is_good_enough(n, x, guess) ? guess : nthrt_iter(n, x, improve(n, x, guess) );
    }

    function is_good_enough(n, x, guess)
    {
        return abs(pow(guess, n) - x) < 0.000001;
    }

    function improve(n, x, guess)
    {
        return avg(n, x/pow(guess, n-1), guess);
    }

    function avg(n, x, guess)
    {
        return (n-1)*guess/n + x/n;
    }

    return nthrt_iter(n, x, 1);
}
