// add whatever parameters you deem necessary
// Takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// Function should check whether the characters in the first string appear somewhere in the second string, without their order changing.


// function frequencyObjMaker(arr) {
//     let result = {};
//     for (let char of arr) {
//         if (!result[char]) {
//             result[char] = 1;
//         } else {
//             result[char] += 1;
//         }
//     }

//     return result;
// }

// frequencyObjMaker('tony rodriguez')



// function isSubsequence(str1, str2) {
//     if (str2.includes(str1)) return true;
//     let arr = str1.split('')
//     let arr2 = str2.split('')


//     let frequencyObj = frequencyObjMaker(str1);
//     let frequencyObj2 = frequencyObjMaker(str2);

//     let arr1left = 0;
//     let arr2left = 0
//     let arr2right = arr.length - 1;


//     while (arr2left < arr2right) {
//         if (arr[arr1left] !== arr2[arr2left]) {
//             arr2left++;
//         }
//         if (arr[arr1left] === arr2[arr2left]) {
//             arr1left++;
//             arr2left++;
//             return true;
//         }
//     }

//     for (let [key, val] of Object.entries(frequencyObj)) {
//         if (frequencyObj2[key] === val) {
//             return true;
//         }
//     }


//     return false;
// }

//if anyone ever looks at this please ignore loll

function isSubsequence(str1, str2) {
    let i = 0; //pointer for str1
    let j = 0; //pointer for str2

    //going to check each character in strin2
    while (j < str2.length) {
        //if the characters match, move to the next character in string 1
        if (str1[i] === str2[j]) {
            i++;
        }
        //put this outside the loop because we always want this to happen
        j++;

        //if we make it through str1 entirely then everything in str1 is in str2
        if (i === str1.length) {
            return true;
        }


    }
    return false;


}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acb')); // false (order matters)



isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)