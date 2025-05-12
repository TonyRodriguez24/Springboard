function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let max = 0;
    for (let n of nums) {
        max = Math.max(max, digitCount(n));
    }
    return max;
}

function radixSort(arr) {
    const maxDigitCount = mostDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}
  

module.exports = radixSort;