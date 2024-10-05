#class methods
from random import randint
from math import sqrt

class Triangle:
    "Right triangle"

    #adding a constructor
    #first parameter is always self
    #Dunder init method has to be there

    def __init__(self, a , b):
        self.a = a
        self.b = b

    #this is called a decorator, makes it a class method
    @classmethod
    def random(cls):
        return cls(randint(1,20), randint(1,20))

    def __repr__(self):
        return f"Triangle(a = {self.a}, b =  {self.b})"
    
    def __str__(self):
        return self.describe()

    def get_hypotenuse(self):
        return sqrt(self.a**2 + self.b**2)
    
    def get_area(self):
        return self.a * self.b / 2
    
    def describe(self):
        return f"Triangle with sides {self.a} and {self.b}"

t = Triangle.random()
print(t.get_area())
print(t.get_hypotenuse())


print(str(t))