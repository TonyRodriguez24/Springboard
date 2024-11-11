function findRotationCount(arr) {

    let leftIndex = 0
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        
        // If the array is already sorted, no rotation
        if (arr[leftIndex] <= arr[rightIndex]) {
            return leftIndex;
        }

        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        // Check if middleIndex is the pivot (smallest element)
        if (middleIndex < rightIndex && arr[middleIndex] > arr[middleIndex + 1]) {
            return middleIndex + 1; // Pivot found at middleIndex + 1
        }

        if (middleIndex > leftIndex && arr[middleIndex - 1] > arr[middleIndex]) {
            return middleIndex; // Pivot found at middleIndex
        }

        // Decide which half to search next
        if (arr[middleIndex] >= arr[leftIndex]) {
            leftIndex = middleIndex + 1; // Search right half
        } else {
            rightIndex = middleIndex - 1; // Search left half
        }
    }

    return 0; // Shouldn't reach here for valid input


}

export default findRotationCount