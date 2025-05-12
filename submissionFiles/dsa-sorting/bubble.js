function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let swapped = false;

        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return arr;
}
  

module.exports = bubbleSort;