// add whatever parameters you deem necessary
// Write a function called longestFall, which accepts an array of integers,
// and returns the length of the longest consecutive decrease of integers.



//for longest fall use a current length and max length

function longestFall(arr) {
    //track longest length we have
    let maxLength = 1;
    //tracking current length
    let currentLength = 1;


    //set i = 1 to compare it to previous
    //if arr[1] is less than arr[0] we move on
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            //add to the current length
            currentLength++;
            //set max length to a comparison of which one is longer
            maxLength = Math.max(maxLength, currentLength)
        }


        else if (arr[i] === arr[i - 1]) {
            continue;
        }

        else {
            currentLength = 1
        }

    }


    return maxLength;
}

console.log(longestFall([5, 3, 1, 3, 0])) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0