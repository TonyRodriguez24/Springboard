#set operations

# #union - all elements in either set
#intersection - what the sets have in common

#union ex
lemon = {"yellow", "sour", "citrus"}
banana = {"yellow", "sweet", "soft"}

print(lemon | banana)

#intersection
print(lemon & banana)
banana.intersection(lemon)

#difference - elements in the first set but not the second

lemon - banana #what they don't have in common
lemon.difference(banana)

#symmetric difference - elements in either set but not both
# only in one set
lemon ^ banana
print(lemon.symmetric_difference(banana))

#shortcuts only work between two sets
#.union and .intersection work with iterables

lemon = {"yellow", "sour", "citrus"}
banana = {"yellow", "sweet", "soft"}
orange = ["orange", "sweet", "citrus"]


print(lemon.union(banana, orange))

#sets are iterables

for item in lemon:
    print(item)

for item in lemon | banana:
    print(item)
