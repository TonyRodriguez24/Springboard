function binarySearch(arr, target) {
    arr.sort((a, b) => a - b)
    
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let middle = Math.floor((low + high / 2))

        if (arr[middle] === target) {
            return middle
        }
        else if (arr[middle] < target) {
            low = middle + 1
        }
        else {
            high = middle + 1
        }

        return -1
    }
    
    // if (middle === target) {
    //     return arr[middle]
    // }
    // else if (middle > target) {
    //     let newMiddle = (arr.splice(0, arr[middle]) / 2)
    //     return newMiddle
    // }
    // return -1;
    // else if (middle < target) {
    //     let newMiddle = arr.splice(middle, arr.length - 1) / 2
    //     return newMiddle

    // }

    // else {
    //     return -1;
    // }

    
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 2))

function binSearch(arr, val) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        let middleVal = arr[middleIndex]
        if (middleVal < val) {
            leftIndex = middleIndex + 1
        }
        else if (middleVal > val) {
            rightIndex = middleIndex - 1
        }
        else {
            return middleIndex;
        }
    }

    return -1;

}

console.log(binSearch([2,3,4,5,6,7,8], 6))