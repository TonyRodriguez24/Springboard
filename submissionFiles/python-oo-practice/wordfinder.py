import random

class WordFinder:
    """Word Finder: finds random words from a dictionary."""

    def __init__(self, file_path):
        """Initialize the WordFinder by reading words from the given file."""
        self.words = self.read_words(file_path)
        print(f"{len(self.words)} words read")

    def read_words(self, file_path):
        """Read words from the file and return a list of words."""
        with open(file_path, "r") as file:
            return [line.strip() for line in file if line.strip()]

    def random(self):
        """Return a random word from the list of words."""
        return random.choice(self.words)


# Example usage:
x = WordFinder('words.txt')

print("Random word:", x.random())
print("List of words read:", x.words)
