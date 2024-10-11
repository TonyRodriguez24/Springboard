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
        """creates a starting value for generator and sets the value equal to the starting value"""
        self.start = start
        self.value = start

    def generate(self):
        """Generate serial number which adds one to previous number"""
        self.value += 1
        return self.value

    def reset(self):
        """Resets the value to the starting value"""
        self.value = self.start
        return self.value

serial = SerialGenerator(start = 100)

print(serial.value)
print(serial.generate())
print(serial.generate())
print(serial.reset())