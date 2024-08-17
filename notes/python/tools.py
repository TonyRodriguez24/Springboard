#packing and unpacking

names = ['Alice', 'Bob']

name1, name2 = names

print(name1)

point = (100, 200)

x,y = point

print(x)
print(y)

#collecting the rest like in javascript
# using *

letters = ['a', 'b', 'c', 'd', 'e']

first, *rest = letters

print(first)
print(rest)


sorted_scores = [99, 88, 77, 66, 55, 44, 33, 22, 11]

top_score, *scores = sorted_scores

print(top_score)
print(scores)


#extracting values

first_name = "Tony"

initial, *rest = first_name

print(initial)

point = (40,50,30)

x,y,z = point


color_pairs = [["red", "green"], ["purple", "orange"]]

pair1, pair2 = color_pairs

print(pair1)
print(pair2)

((primary1, secondary1), (primary2, secondary2)) = color_pairs

print(primary1)

#most common use case for unpacking is for unpacking key value pairs


grades = {
    "A": 90,
    "B": 80,
    "C": 70,
}

for (k,v) in grades.items():
    print(k,v)

