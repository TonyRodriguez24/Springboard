// add whatever parameters you deem necessary

// Write a function called pivotIndex which accepts an array of integers, 
// and returns the pivot index where the sum of the items to the left equal 
// to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.



function pivotIndex(arr) {
    // Calculate the total sum of the array
    const totalSum = arr.reduce((sum, num) => sum + num, 0);

    let leftSum = 0;

    // Iterate through each position to find a pivot
    for (let i = 0; i < arr.length; i++) {
        // Right sum is total sum minus left sum minus current element
        const rightSum = totalSum - leftSum - arr[i];

        // Check if this is a pivot point
        if (leftSum === rightSum) {
            return i;
        }

        // Update left sum for next iteration
        leftSum += arr[i];
    }

    // No pivot found
    return -1;
}

pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) // -1  no valid pivot index
pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2