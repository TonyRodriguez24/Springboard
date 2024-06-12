function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0;
    });
}

const filterOddsOut = (...arr) => {
    return arr.filter((num) => {
        return num % 2 === 0;
    });
};

console.log(
    filterOddsOut(1, 3, 4, 5, 6, 3, 5, 3, 4, 2, 4, 324, 324, 32454, 564, 456, 3)
);

//find Min
findMin(1, 4, 12, -3); // -3
findMin(1, -1); // -1
findMin(3, 1); // 1

function findMin(...args) {
    return args.reduce((accumulator, currValue) => {
        return Math.min(accumulator, currValue);
    });
}

console.log(findMin(2323, 4343, 2323, 32, 443, 65, 546));

//merge objects

const testObject = {
    name: "Tony",
    age: 26,
};

const testObject2 = {
    location: "NY",
    height: 6,
};

function mergeObjects(obj1, obj2) {
    const newObj = { ...obj1, ...obj2 };
    return newObj;
}

console.log(mergeObjects(testObject, testObject2));

//double and return args

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];

// function doubleAndReturnArgs(arr, ...args){
//     return [...arr, ...args.map((e) => e * 2)]
// }

//slice and dice

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const randomNum = Math.floor(Math.random() * items.length);
    console.log(randomNum);

    return [...items.slice(0, randomNum), ...items.slice(randomNum + 1)];
}

console.log(removeRandom([1, 2, 3, 4, 5, 6]));

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

console.log(extend([1, 2, 3, 4, 5, 5], [1, 2, 32, 24, 124]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}

/** Return a new object with a key removed. */
// _[key] used to remove key from the object

    function removeKey(obj, key) {
        const newObj = { ...obj };
        delete newObj[key];
   
        return newObj;
    }

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) 
{
    const newObj = {...obj, [key]: val}
    return newObj;
}
