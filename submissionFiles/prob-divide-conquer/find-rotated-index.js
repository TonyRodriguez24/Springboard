function findRotatedIndex(arr, target) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === target) {
            return middleIndex;
        }

        else if (arr[leftIndex] <= arr[middleIndex]) {
            if (target >= arr[leftIndex] && target < arr[middleIndex]) {
                rightIndex = middleIndex -1
            }

            else{
                leftIndex = middleIndex + 1
            }
        }

        else if (arr[middleIndex] <= arr[rightIndex]) {
            if (target > arr[middleIndex] && target <= arr[rightIndex]) {
                leftIndex = middleIndex + 1;
            }
            else {
                rightIndex = middleIndex - 1
            }
        }


       
    }

    return -1;

}

export default findRotatedIndex

//the array is sorte