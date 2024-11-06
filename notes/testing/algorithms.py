def reverse_str(s):
    return s[::-1]

def is_palindrome(s):
    rev = reverse_str(s)
    return s.lower() == rev.lower()

def factorial(n):
    if not(isinstance(n,int) and n >= 0):
        raise ValueError("n must be a non negative integer")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result