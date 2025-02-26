//creating pointers on the left and right and meet towards the middle

// function sumZero(nums) {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === 0) {
//                 return [nums[i], nums[j]]
//             }
//         }
//     }
// }
// this is bad because its On^2 avoid nested loops. Go by worst case scenario

//this is for sorted number arrays


let numbers = [-30,-10,-4,0,2,3,4,5,10,20]


//we have to move the pointers depending on the result of the sum that we get back

function sumZeroMultiplePointers(nums) {
    let left = 0;
    let right = nums.length - 1 ;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === 0) {
            return ([nums[left], nums[right]])
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }

    return false;
}

console.log(sumZeroMultiplePointers(numbers))