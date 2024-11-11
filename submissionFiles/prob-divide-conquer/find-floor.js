function findFloor(sortedArr, x) {
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;
    let floor = -1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (sortedArr[middleIndex] <= x) {
            floor = sortedArr[middleIndex];
            leftIndex = middleIndex + 1;
        }
        else {
            rightIndex = middleIndex - 1;
        }
            
    }

    return floor;

}

export default findFloor