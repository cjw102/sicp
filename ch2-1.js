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