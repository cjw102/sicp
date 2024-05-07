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
    return sqrt_iter(1, x);
}

function sqrt_iter(guess, x)
{
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
}

function sqrt_iter2(guess, x)
{
    return conditional(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

function improve(guess, x)
{
    return avg(guess, x/guess);
}

function avg(x, y)
{
    return x/2 + y/2;
}

function is_good_enough(guess, x)
{
    return abs(square(guess) - x) < 0.0001;
}



//Exercise 1.8 -- cube root 
function cbrt(x)
{
    return cbrt_iter(1, x);
}

function cbrt_iter(guess, x)
{
    return is_good_enough_cb(guess, x) ? guess : cbrt_iter(improve_cb(guess, x), x);
}

function improve_cb(guess, x)
{
    return avg_cb(guess, x/square(guess));
}

function avg_cb(x,y)
{
    return 2/3*x + y/3;
}

function is_good_enough_cb(guess, x)
{
    return abs(pow(guess,3) - x) < 0.0001;
}



//nth root 
function nthrt(n, x)
{
    return nthrt_iter(n, x, 1);
}

function nthrt_iter(n, x, guess)
{
    return is_good_enough_n(n, x, guess) ? guess : nthrt_iter(n, x, improve_n(n, x, guess) );
}

function is_good_enough_n(n, x, guess)
{
    return abs(pow(guess, n) - x) < 0.000001;
}

function improve_n(n, x, guess)
{
    return avg_n(n, x/pow(guess, n-1), guess);
}

function avg_n(n, x, guess)
{
    return (n-1)*guess/n + x/n;
}