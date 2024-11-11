function sortedFrequency(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    let firstOccurrence = leftIndex;

    if (arr[firstOccurrence] !== target) return -1;

    rightIndex = arr.length - 1; 

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] <= target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    let lastOccurrence = rightIndex;

    return lastOccurrence - firstOccurrence + 1;
}

export default sortedFrequency