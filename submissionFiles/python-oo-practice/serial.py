"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start = 100):
        self.value = start
        self.start = start

    def generate(self):
        current_value = self.value
        self.value += 1
        return f'new value is {current_value}'
    
    def reset(self):
        self.value = self.start;
    
    def __str__(self):
        return f"Serial generator with starting value of {self.value}"

x = SerialGenerator()
print(x)
print(x.generate())
print(x.generate())
x.generate()
x.generate()
print(x.reset())