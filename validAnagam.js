// given two string write a function called validAnagram which determines if the second string is an anagram of the first
// an anagram is word, phrase or name formed by rearranging the letters of another such as cinema


let sampleword = 'tony'
let otherword = 'tony2'



function validAnagram(string1, string2) {
    //take 2 strings, compare if they are anagrams of each other meaning each letter has the same frequency
    //have to be the same length
    if (string1.length !== string2.length) return false;
    //make an empty object so that we can track frequency of each letter
    let result = {};
    let result2 = {};

    for (let char of string1) {
        if (!result[char]) {
            result[char] = 1;

        }
        else {
            result[char] += 1
        }
    }

    for (let char of string2) {
        if (!result2[char]) {
            result2[char] = 1;

        }
        else {
            result2[char] += 1
        }
    }


    //return false after everything
    return false;
}

validAnagram('tonyrodriguez', 'fafafdasdfads')

//use map instead because it has a length

function createFrequencyCounter(str) {
    let frequencies = new Map(); //map is key, value pairs that has a size

    for (let char of str) {
        let count = frequencies.get(char) || 0 // if it is undefined then that will be a falsy value so it defaults to 0
        frequencies.set(char, count + 1)
    }
    return frequencies;
}

function isValidAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;

    const characterMap1 = createFrequencyCounter(string1);
    const characterMap2 = createFrequencyCounter(string2);
    console.log(characterMap1, characterMap2)

    if (characterMap1.size !== characterMap2.size) return false;
    for (let letter of characterMap1.keys()) {
        if (characterMap2.get(letter) !== characterMap1.get(letter)) return false;
    }

    console.log('true')
    return true;
}

isValidAnagram('asddasdf', 'asdfasdf')

//use maps because they have a size property
//don't use sort because they don't have good O'n notation