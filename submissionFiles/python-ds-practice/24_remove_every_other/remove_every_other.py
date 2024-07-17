def remove_every_other(lst):
    """Return a new list of other item.

        >>> lst = [1, 2, 3, 4, 5]

        >>> remove_every_other(lst)
        [1, 3, 5]

    This should return a list, not mutate the original:

        >>> lst
        [1, 2, 3, 4, 5]
    """

    new_list = [item for index, item in enumerate(lst) if index % 2 == 0]
    return new_list


print(remove_every_other([1,10,23,43,52,44,34,42]))