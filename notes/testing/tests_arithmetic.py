import arithmetic 
from unittest import TestCase

class AdditionTestCase(TestCase):
    """Examples of unit tests"""

    #must start with test the methods
    def test_adder(self):
        assert arithmetic.adder(2,3) == 5
        
        #unit testing
    def test_adder_2(self):
        self.assertEqual(arithmetic.adder(2,2), 4)
        self.assertEqual(arithmetic.adder(40,50), 90)
        self.assertEqual(arithmetic.adder(-2,-4), -6)
        

        
        #this one is better because it gives better feedback
        #self.assertEqual
        #self.assert(method)