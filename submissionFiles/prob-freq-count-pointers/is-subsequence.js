// add whatever parameters you deem necessary
// Takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// Function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

let str1 = 'fasdfasd'


function isSubsequence(str1, str2) {
    if (str2.includes(str1)) return true;

    let arr = str1.split('');
    let arr2 = str2.split('');

    let left = 0;
    let right = arr.length - 1;


    while (left < right) {
        
    }


    return false;
}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting') );


isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)