
// //while loop
// function count() {
//     let n = 1;

//     while (n <= 3) {
//         console.log(n)
//         n += 1;
//     }
// }

// count();

// //recursive solution

// function count(n = 1) {
//     if (n > 3) return;
//     console.log(n);
//     count(n + 1);
// }

// count();

//need to call the function inside of itself
//have a base case - a brick wall that ends the function

//returning data from a recursive function

// sum([4,3,5])
// [1, 2, 3, 4, 5]

// sum([1,2,3,4,5])
//     1 + [2,3,4,5]

// function sum(nums) {
//     //base case
//     if (nums.length === 0) return 0;
//     //normal case

//     return nums[0] + sum(nums.slice(1))

// }

//list doubler using recursion

// nums = [1,2,3,4,[4,3,[4,2]]] flattened array of doubled values

//function
//for item in list
//is item a list
//if no then print

function doubler(nums) {
    for (let n of nums) {
        if (Array.isArray(n)) {
            doubler(n)
        } else {
            console.log(n * 2)
        }
    }
}


// Array.isArray() best way to check if something is an array

doubler([2,3,4,5,[6,6]])