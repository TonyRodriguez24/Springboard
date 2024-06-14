


new Set([1, 1, 2, 2, 3, 4])
//{1,2,3,4}


// [...new Set("referee")].join("");
//ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

function hasDuplicate(arr) {
    const newSet = new Set(arr);
    if (newSet.size !== arr.length) {
        return true;
    }
    return false;
}

//const hasDuplicate = arr => new Set(arr).size !== arr.length;


hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false




vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }




//write a small function that checks if a letter is a vowel then do vowel Count


function vowelCount(string) {
    const vowelMap = new Map();
    const vowels = new Set(["a","e", "i", "o", "u"])

    for(let letter of string){
        let lowerCaseLetter = letter.toLowerCase();

        if(vowels.has(lowerCaseLetter)){
            if(vowelMap.has(lowerCaseLetter)){
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
            }
            else{
                vowelMap.set(lowerCaseLetter, 1);
            }
        }
    }
    return vowelMap;
}
