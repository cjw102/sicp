function list()
{
    const args = Array.from(arguments);
    return args.length === 0 ? null : pair(args[0], list(...args.slice(1)));
}


function ls_size(lst)
{
    function counter(lst, n)
    {
        return lst === null ? n : counter(tail(lst), ++n);
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

function print_ls(lst)
{
    var curr = head(lst);
    var str = ""+curr;

    function str_app()
    {
        curr = head(tail(lst))
        str += ""+curr;
    }

    return tail(curr) === null ? str : str_app();
}