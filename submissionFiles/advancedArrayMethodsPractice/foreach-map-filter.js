/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    const newArr = [];
    arr.forEach(function (element) {
        newArr.push(element * 2);
    });
    return newArr;
}

console.log(doubleValues([1, 2, 3]));

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    const newArr = [];
    arr.forEach(function (element) {
        if (element % 2 === 0) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(onlyEvenValues([1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach(function (element) {
        newArr.push(element[0] + element[element.length - 1]);
    });
    return newArr;
}

console.log(showFirstAndLast(["colt", "matt", "tim", "test"]));

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArr = [];
    arr.forEach(function(element){
        element[key] = value;
        newArr.push(element);
    })
    return newArr;
}

// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))
/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    //create vowels
    const vowels = "aeiou";
    //split the string into an array
    const chars = str.toLowerCase().split("");
    //create an empty object that we update
    const vowelAppearances = {};

    //for each letter of chars we run a function taking char (a letter) as a paramer
    chars.forEach(function (char) {
        //if that letter is a vowl this will be true or false
        if (vowels.includes(char)) {
            //that letter is in vowel appearences already then we add 1 to it
            if (vowelAppearances[char]) {
                vowelAppearances[char]++;
            }
            //if its not then we set it to one
            else {
                vowelAppearances[char] = 1;
            }
        }
    });
    return vowelAppearances;
}

console.log(vowelCount("does this code work"));

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function (element) {
        return element * 2;
    });
}

console.log(doubleValuesWithMap([1, 2, 3, 4, 5]));

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    return arr.map(function (element, index) {
        return element * index;
    });
}

console.log(valTimesIndex([1, 2, 3, 4, 5, 6]));

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([
    {name: 'Elie'},
    {name: 'Tim'}, 
    {name: 'Matt'}, 
    {name: 'Colt'}],    'name') 
    
    // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    return arr.map(function (element) {
        return element[key];
    });
}

console.log(
    extractKey(
        [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
        "name"
    )
);

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, 
    {first: 'Tim', last:"Garcia"}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele"}])
     // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function (element) {
        return element.first + " " + element.last;
    });
}

console.log(
    extractFullName([
        { first: "Elie", last: "Schoppik" },
        { first: "Tim", last: "Garcia" },
        { first: "Matt", last: "Lane" },
        { first: "Colt", last: "Steele" },
    ])
);
// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function (element) {
        return element[key];
    });
}

// console.log(filterByValue(
//     [{first: 'Elie', last:"Schoppik"},
//         {first: 'Tim', last:"Garcia", isCatOwner: true},
//         {first: 'Matt', last:"Lane"},
//         {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'))
//         // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]))

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const result = arr.filter(function (element) {
        return element === searchValue;
    });
    return result[0];
}

console.log(find([1, 2, 3, 4, 5], 10));

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, 
    {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, 
    {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 

    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const result = arr.filter(function (element) {
        return element[key] === searchValue;
    });
    return result[0];
}

console.log(
    findInObj(
        [
            { first: "Elie", last: "Schoppik" },
            { first: "Tim", last: "Garcia", isCatOwner: true },
            { first: "Matt", last: "Lane" },
            { first: "Colt", last: "Steele", isCatOwner: true },
        ],
        "isCatOwner",
        true
    )
);

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const strArray = str.toLowerCase().split("");
    const vowels = "aeiou";

    const result = strArray.filter(function (element) {
        return !vowels.includes(element);
    });

    return result.join("");
}

console.log(removeVowels("Hello World"));

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/
function doubleOddNumbers(arr) {
    return arr
        .filter(function (num) {
            return num % 2 !== 0; // Filter odd numbers
        })
        .map(function (oddNum) {
            return oddNum * 2; // Double the odd numbers
        });
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
