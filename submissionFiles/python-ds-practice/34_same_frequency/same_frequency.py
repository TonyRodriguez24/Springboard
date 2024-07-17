def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    from collections import Counter

    #then we convert these numbers to strings to count digit frequencies
    
    num1_str = str(num1)
    num2_str = str(num2)

    #use counter to count the requency fo each digit
    num1_counter = Counter(num1_str)
    num2_counter = Counter(num2_str)

    return num1_counter == num2_counter

print(same_frequency(551122, 221515))  