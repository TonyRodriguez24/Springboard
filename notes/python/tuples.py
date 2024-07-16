#tuples
#ordered collections of values, tuples are immutable

colors = ("red", "green", "blue", "yellow", "orange", "purple")

print(type(colors))

#tuples can be used in a dictionary because they are hashable
#hashable means that the value of the tuple will not change
#tuples can be used as keys in a dictionary

board = {
    (0,0): "X",
    (0,1): "O",
    (0,2): "X",
    (1,0): "O",
    (1,1): "X",
    (1,2): "O",
    (2,0): "X",
    (2,1): "O",
    (2,2): "X"
}

print(board[(0,0)])

#count - returns the number of times a value appears in a tuple
