function list()
{
    const args = Array.from(arguments);
    return args.length === 0 ? null : pair(args[0], list(...args.slice(1)));
}

function ls_size(lst)
{
    function counter(lst, n)
    {
        return lst === null ? n : counter(tail(lst), n + 1);
    }

    return counter(lst, 0);
}

function is_ls_empty(lst)
{
    return ls_size(lst) === 0;
}

function ls_get(items, n)
{
    return n===0 ? head(items) : ls_get(tail(items), n - 1);
}

function append(lst1, lst2)
{
    return lst1 === null ? lst2 : pair(head(lst1), append(tail(lst1), lst2));
}

//Exercise 2.18
function reverse(lst)
{

}

function print_ls(lst)
{
    function str_app(lst, str)
    {
        return lst === null ? str+')' : str_app(tail(lst), str = str +head(lst)+',');
    }

    return str_app(lst, '(');
}