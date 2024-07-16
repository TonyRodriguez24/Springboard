#comprehensions
# List comprehensions

nums = [1, 2, 3, 4, 5,6, 7, 8, 9, 10]

evens = []
for num in nums:
    if num % 2 == 0:
        evens.append(num)

print(evens)

#list comprehension
[num * 2 for num in nums]

#[what we want to add for thing in list]

rl = [2,4,6,8,10,12,14,16,18,20]

squared= [num ** 2 for num in rl]
print(squared)

[char.upper() for char in "lmfao"]

#creating a new list based off an iterable

print([num/2 for num in range(10,20)])

#nested list comprehension

def gen_board(size, initial_value = None):
    return [[initial_value for x in range(size)] for y in range(size)]

print(gen_board(3, "X"))

print(gen_board(3))
print(gen_board(10, "O"))

#adding in logic to list comprehension

[x for x in range(10) if x % 2 == 0]

chickens = [
    {"name": "Daisy", "age": 3},
    {"name": "May", "age": 4},
    {"name": "June", "age": 2},
    {"name": "April", "age": 1}
]

hens = [bird["name"] for bird in chickens if bird["age"] > 2]

print(hens)


#this is like using filter in js

scores = [90, 85, 77, 65, 97, 88, 82, 88, 100]

grades = ["PASS" for score in scores if score > 70]

#[do this if something else do this for thing in things]

grades = ["PASS" if score > 70 else "FAIL" for score in scores]
print(grades)

morse_lookup = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}

def get_letter(letter):
    return morse_lookup.get(letter.upper(), "Invalid character")

print(get_letter("A"))


[get_letter(char) for char in "SOS"]

def get_morse_code(phrase):
    return " ".join([get_letter(char) for char in phrase])

print(get_morse_code("SOS"))

#list comprehensions are similar to map and filter in js where we can do a lot of things in one line



#comprehensions are super flexible and very commonly used in python

#dictionary and set comprehensions

#dictionary comprehensions

days = {day:0 for day in "MTWRFSU"}

print(days)

print({num: num * num for num in range(1,10) if num % 2 == 0})

#set comprehensions

#only adding in a single value not a key value pair

print({char for char in "abracadbra"})

print({char for char in "hello darkness my old friend" if char not in "aeiou"})