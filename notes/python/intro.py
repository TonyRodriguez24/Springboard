# creating variables

# lower snake case
my_variable = 10  

chickens = 13;

print(chickens)

number_of_chickens = 13

#constants
LIKE_THIS = 10

#numbers

#integers
apples = 5

#floats
banana = 3.5

# f string
print(f"apples: {apples} and bananas: {banana}")

#indentations
if apples > banana:
    print("apples are greater")
else:
    print("bananas are greater")

#if:
#elif:
#else:

age = 19

if age >= 21:
    print("You can drink")
elif age >= 18:
    print("You can vote")
else:
    print("You can't do anything")

#ternary operator

color = "teal"

print("Good Choice") if color == "teal" else print("Bad Choice")

# do_if_true if CONDITION else do_if_false

# and or not
# instead of && || !

#loops in python

num = 0
while num < 100:
    if num == 50:
        print(num)
        break
    print(num)
    num = num +10

print("done")



# target = 35
# guess = None

# while guess != target:
#     # guess = input("Please enter a guess")
#     guess = int(guess)

# print("All done")

#for loop
#technically a for in loop

for snack in ["apple", "banana", "chocolate"]:
    print(snack)


colors = ["red", "green", "blue"]
for color in colors:
    print(color)

for char in "hello":
    print(char)

for n in range(10):
    print(n)


#ranges
# range(start, stop, step)

range(9)

for num in range(10):
    print(num)

print(list(range(5,10)))

#functions

def add_numbers(a, b):
    sum = a+ b
    print (sum)

add_numbers(5, 10)

def greet(person):
    return f"Hello {person}"

print(greet("Tony"))

#functions return none if no return statement

def divide(a, b):
    if b == 0:
        return "You can't divide by 0"
    return a/b

print(divide(10, 2))

print(type(divide(10, 2)) is float)

def send_email(to_email, from_email, subject, body):
    email = f"""
    To: {to_email}
    From: {from_email}
    Subject: {subject}
    body: {body}
    """
    print(email)

send_email(subject = "Hello", to_email = " ", from_email = " ", body = " ")

help(send_email)

def power( num, power = 2):
    return num ** power

#getting help

print(dir(3)    )   
help(3)

#doc strings

def power( num, power = 2):
    """
    Returns the power of a number
    """
    return num ** power

help(power)