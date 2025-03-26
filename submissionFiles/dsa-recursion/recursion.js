/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 0;

  return nums[0] + product(nums.slice(1))

  //normal case

}

console.log(product([1,2,3,4,5]))

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case
  if (words.length === 0) return 0;

  return Math.max(words[0].length, longest(words.slice(1)))
  //normal case


}

console.log(longest(['tony', 'rodriguez', 'anthony', 'toe', 'knee']))

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if (str.length === 0) return str;

  //normal case

  return str[0] + everyOther(str.slice(2))

}

console.log(everyOther('anthony rodriguez'))

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if (str.length === 0) return str;

  //normal case

  isPalindrome()
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // base case: if we reach the end of the array, return -1
  if (i >= arr.length) return -1;

  // if we found the value, return the current index
  if (arr[i] === val) return i;

  // otherwise, check the rest of the array
  return findIndex(arr, val, i + 1);
}

console.log(findIndex('asdfasdfasxdfads', 'x'))

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case: if string is empty or one char, return it
  if (str.length <= 1) return str;

  // reverse by taking last character + reverse the rest
  return revString(str.slice(1)) + str[0];
}




/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(gatherStrings(obj[key]));
    }
  }

  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // base case: if left index is greater than right, value isn't found
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  // if the middle value is the target, return index
  if (arr[mid] === val) return mid;

  // if val is smaller, search left half
  if (val < arr[mid]) return binarySearch(arr, val, left, mid - 1);

  // if val is larger, search right half
  return binarySearch(arr, val, mid + 1, right);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
