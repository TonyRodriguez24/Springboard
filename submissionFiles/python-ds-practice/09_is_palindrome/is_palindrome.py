def is_palindrome(phrase):
    if phrase.lower()[::-1] == phrase.lower():
        return True
    else:
        return False
    
print(is_palindrome("tony"))