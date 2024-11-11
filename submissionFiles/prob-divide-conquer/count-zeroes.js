function countZeroes(arr) {
    let leftIndex = 0
    let rightIndex = arr.length - 1


    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[middleIndex] === 0) {
            rightIndex = middleIndex - 1
        }
        else if (arr[middleIndex] === 1) {
            leftIndex = middleIndex + 1
        }
    }
    
    let result = arr.length - leftIndex
    return result
}
export default countZeroes

