colors = ["red",  "orange", "yellow"]

colors[0:1] = ["dark red", "pink"]

print(colors) 

colors[3:] = ["green", "blue"]

print(colors)

colors[3:] = []

print(colors)

#list methods

#append - adds an element to the end of the list
colors.append("purple")
print(colors)

#copy - returns a shallow copy of the list - not a deep copy they both point to the same memory location
colors_copy = colors.copy()
print(colors_copy)

#count - returns the number of times an element appears in the list
print(colors.count("red"))

#extend - adds the elements of an iterable to the end of the list
colors.extend(["black", "white"])
print(colors)

#index - returns the index of the first occurrence of an element
print(colors.index("dark red"))
#only returns the first occurrence

#insert - inserts an element at a specific index
colors.insert(1, "brown")
print(colors)

#pop - removes the element at the specified index and returns it
print(colors.pop(1))
print(colors)

#reverse - reverses the order of the list
colors.reverse()
print(colors)

#sort - sorts the list in ascending order


#string methods and useful things to know
#strings are immutable

price = 9.99
quantity = 30

print(f"The total cost is ${price * quantity:.2f}")

#str() - converts a value to a string
print(str(12345))

price = "9.99"
"$" in price #false

#strings are immutable

msg = "hello"
msg[2] #l
len(msg) #5

msg[2:4] #ll

for letter in msg:
    print(letter)


    #built in string methods


#a lot more string methods than list methods

#count - returns the number of times a substring appears in a string
msg = "hello"
print(msg.count("l"))

#endswith - returns True if a string ends with a specified suffix
print(msg.endswith("o"))

#startswith - returns True if a string starts with a specified prefix
print(msg.startswith("h"))

#find - returns the index of the first occurrence of a substring
print(msg.find("l"))

#isdigit - returns True if all characters in a string are digits
print(msg.isdigit())

#join - makes a new string by joining an iterable with a separator
print(" ".join(["hello", "world"]))

#lower - returns a string in all lowercase
#upper - returns a string in all uppercase
#capitalize - returns a string with the first letter capitalized

#replace - replaces a substring with another substring
things = "apples, bananas, oranges"
things.replace(",", " ")
print(things.replace(",", " "))

#split - splits a string into a list
print(things.split(", "))

#strip - removes leading and trailing whitespace
msg = "   hello   "
print(msg.strip())
