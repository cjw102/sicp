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

function splice(lst, n)
{
    return n===0 ? lst : splice(tail(lst), n - 1);
}

function splice_end(lst, n)
{
    var r_lst = list();

    function helper(lst, r_lst, n)
    {
        return n===0 ? r_lst : helper(lst, append(), n - 1);
    }
    //return n===0 ? r_lst : splice_end
    return helper(lst, list(), n);
}

function append(lst1, lst2)
{
    return lst1 === null ? lst2 : pair(head(lst1), append(tail(lst1), lst2));
}

function remove(lst, elem)
{

}

//Exercise 2.17
function last_elem(lst)
{
    return tail(lst) === null ? lst : last_elem(tail(lst));
}

//Exercise 2.18
function reverse(lst)
{
    //return tail(lst) === null ? lst : pair( head( last_elem(lst) ), reverse(tail(lst)) );

    //return tail(lst) === null ? lst : pair(reverse(tail(lst)), head(lst));

    function itr(lst, acc)
    {
        return lst === null ? acc : itr(tail(lst), pair(head(lst), acc));
    }

    return itr(lst, null);    
}



function print_ls(lst)
{
    function str_app(lst, str)
    {
        return lst === null ? str+')' : str_app(tail(lst), str = str +head(lst)+',');
    }

    return str_app(lst, '(');
}


function map(f, lst)
{
    return is_ls_empty(lst) ? null : pair(f(head(lst)), map(f, tail(lst)));

}