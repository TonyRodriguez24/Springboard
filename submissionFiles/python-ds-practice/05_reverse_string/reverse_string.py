def reverse_string(phrase):
    """Reverse string,
    
        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """

    return phrase[::-1]

print(reverse_string('awesome')) # 'emosewa'

#explain why this works
# The slice notation [::-1] means start at the end of the string and end at position 0, move with the step -1, which means one step backwards.