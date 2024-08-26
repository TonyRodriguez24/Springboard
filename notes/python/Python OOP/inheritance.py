#inherits functionality from a parent class

#most of the time single inheritance is used
from class_methods import Triangle
class ColoredTriangle(Triangle):
    """Triangle that has a color"""

    def __init__ (self, a, b, color):
        super().__init__(a,b)
        self.color = color

    def describe(self):
        msg = super().describe()
        return msg + f" and color {self.color}"

t = ColoredTriangle(2,3, "red")

print(t.get_area())
print(t.describe())