// add whatever parameters you deem necessary
function averagePair(arr, target) {
    //sorted array of integers and a target average determine if there is a pair of values in the array equals the target average

    //use pointers and sliding window

    let left = 0;
    let right = arr.length - 1;

    //make a while loop to check

    //while left is less than right 0 < end of array
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2

        //if arr[0] + arr[endval] / 2 === target then we return the index it happens at
        if (average === target) {
            return [left, right];
        }

        //if arr[0] + arr[endval] / 2 < target then we have to move the left pointer to the right
        if (average < target) {
            left++;
            //if arr[0] + arr[endval] / 2 > target then we have to move the right pointer to the left

        } else {
            right--;
        }

    }

    //if it makes it through the while loop with no matching then we return false
    return false;


}


//two mistakes I made in here was not declaring average inside of the loop and wrapping average in parentheses before dividing them

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
averagePair([], 4); // false
