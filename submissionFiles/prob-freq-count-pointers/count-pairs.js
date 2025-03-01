// add whatever parameters you deem necessary
// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. 
// You can assume that there will be no duplicate values in the array.
Examples:




// function countPairs(arr, targetSum) {
//     let left = 0;
//     let right = arr.length - 1;
//     let count = 0;
//     let result = [];

//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === targetSum) {
//             result.push([left, right]);
//             count++;
//             left++;
//             right--;
//         }

//         else if
//     }

//     console.log(result)

//     return result;

//     //scrap this approach since array is not sorted


// }

//the complement of any number is what you need to add to reach the target.
// If current number is 6, its complement is 4(because 6 + 4 = 10)

function countPairs(arr, targetSum) {
    let seen = new Set(); //track the numbers that we have already seen using a set
    let pairs = []; //add pairs we've seen in here
    let count = 0;


    for (let num of arr) {
        //calculate the value needed to reach the targetSum
        let complement = targetSum - num;

        //if we've seen the complement before we found a pair
        if (seen.has(complement)) {
            pairs.push([complement, num])
            count++;
        }

        //add current number to our set of seen numbers
        seen.add(num)

    }

    console.log({count, pairs})
    return {count, pairs}
}




countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2