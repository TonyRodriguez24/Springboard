from math import sqrt

class Triangle:
    "Right triangle"

    #adding a constructor
    #first parameter is always self
    #Dunder init method has to be there

    def __init__(self, a , b):
        self.a = a
        self.b = b

    def get_hypotenuse(self):
        return sqrt(self.a**2 + self.b**2)
    
    def get_area(self):
        return self.a * self.b / 2


first_triangle = Triangle(4,5)

first_triangle.get_hypotenuse()

print(first_triangle.get_area())

t2 = Triangle( 10, 100)

print(t2.get_area())