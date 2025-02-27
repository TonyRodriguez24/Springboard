// Write a function called separatePositive which accepts an array of non-zero integers.
// Separate the positive integers to the left and the negative integers to the right.
// The positive numbers and negative numbers need not be in sorted order.
// The problem should be done in place (in other words, do not build a copy of the input array).


let num = [3, 4, 5, 10, 32, 32]
let removed = num.splice(2, 1)
let test = num.push(removed[0])
console.log(num)
console.log(test)





// function separatePositive(arr) {
//     let left = 0
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] < 0) {
//             let removed = arr.splice(left, 1);
//             arr.push(removed[0]);
//             right--; //have to reduce the size of the array
//         } else{
//             left++;

//         }
//     }
//     return arr;
// }


//swap them in place instead

function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < 0 && arr[right] > 0)
        //if value at start is negative and value at right is positve
        {
            //immediately swap them in place, this is array destructuring
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++; //move left to the right and right to the left, check the next two values
            right--;
        } else {
            if (arr[left] > 0) left++;
            if (arr[right] < 0) right--;
        }
    }
    return arr;

}




console.log(separatePositive([2, -1, -3, 6, -8, 10])) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]
