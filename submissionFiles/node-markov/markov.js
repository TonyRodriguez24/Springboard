/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // Initialize chains as an empty Map
    this.chains = new Map();

    // Loop through words and create chain mappings
    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      const nextWord = this.words[i + 1] || null;

      if (!this.chains.has(word)) {
        this.chains.set(word, []);
      }

      this.chains.get(word).push(nextWord);
    }
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // If chains is empty, return empty string
    if (this.chains.size === 0) return "";

    // Get random key to start with
    let keys = Array.from(this.chains.keys());
    let currentWord = keys[Math.floor(Math.random() * keys.length)];
    let result = [currentWord];

    // Generate words until we hit numWords or get null
    for (let i = 1; i < numWords; i++) {
      const possibleNextWords = this.chains.get(currentWord);

      // Choose a random next word from the possibilities
      const nextWord = possibleNextWords[Math.floor(Math.random() * possibleNextWords.length)];

      // If we get null, we've reached the end of the chain
      if (nextWord === null) break;

      result.push(nextWord);
      currentWord = nextWord;
    }

    return result.join(" ");
  }
}

module.exports = { MarkovMachine };