#docstrings and doctests

def bounded_avg(nums):
    """
    returns average of list of nums (must be 1-100)
    

    >>> bounded_avg([2,4,6])
    4.0
    """

    for n in nums:
        if n< 1 or n > 100:
            raise ValueError("Out of bounds")
    return sum(nums)/ len(nums)

#docstring explain how the functions work

