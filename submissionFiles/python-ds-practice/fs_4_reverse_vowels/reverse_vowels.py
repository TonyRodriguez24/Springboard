def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which are not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """


    #USING A LEFT AND RIGHT PINTER APPROACH

    vowels = set("aeiouAEIOU")

    s_list = list(s)

    left, right = 0, len(s_list) - 1  # this initializes two pointers

    while left < right:
        #we are moving the pinter until it finds a vowel

        if s_list[left] not in vowels:
            left += 1
            continue

        #move the right right pointer backwards until it finds a vowel

        if s_list[right] not in vowels:
            right -= 1
            continue

        #swap the bowels at left and right pointers

        s_list[left], s_list[right] = s_list[right], s_list[left]

        # move both pointers inward

        left += 1
        right -= 1

    return "".join(s_list)