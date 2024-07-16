def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """

    swapped_phrase = ""

    for letter in phrase:
        if letter.lower() == to_swap.lower():
            if letter.islower():
                swapped_phrase += letter.upper()
            elif letter.isupper():
                swapped_phrase += letter.lower()
        else:
            swapped_phrase += letter
    return swapped_phrase

print(flip_case("Tony Romulo Rodriguez", "r"))