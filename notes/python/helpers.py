from random import randint, choice

def get_rand_year():
    return randint(1900,2024)

def get_rand_month():
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return choice(months)

print(get_rand_year())
print(get_rand_month())