def is_odd_string(word):
    """Is the sum of the character-positions odd?
    Word is a simple word of uppercase/lowercase letters without punctuation.
    For each character, find it's "character position" ("a"=1, "b"=2, etc).
    Return True/False, depending on whether sum of those numbers is odd.

    For example, these sum to 1, which is odd:
    
        >>> is_odd_string('a')
        True
        >>> is_odd_string('A')
        True

    These sum to 4, which is not odd:
    
        >>> is_odd_string('aaaa')
        False
        >>> is_odd_string('AAaa')
        False

    Longer example:
        >>> is_odd_string('amazing')
        True
    """


    #ord uses unicode values of a through z
    #a is 95 and then the rest so then we subtract from a and then return total and check that

    total = sum((ord(char.lower()) - ord("a") + 1) for char in word)

    return total % 2 ==1

print(is_odd_string("amazing"))
