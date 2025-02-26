// add whatever parameters you deem necessary
function frequencyCounter(arr) {
    let result = {};
    for (let val of arr) {
        if (!result[val]) {
            result[val] = 1
        } else {
            result[val] += 1
        }
    }
    return result;
}

frequencyCounter('fasdfasdf'.split(''))


function sameFrequency(int1, int2) {
    //given two positive integers find out if the two numbers have the same frequency of digits

    //what I'm thinking is make an object with a frequency counter

    let int1Arr = int1.toString().split('')
    let int2Arr = int2.toString().split('')


    let int1Obj = frequencyCounter(int1Arr);
    let int2Obj = frequencyCounter(int2Arr);

    //work around for js objects not having a length attr and we return false if they are not same length
    if (Object.keys(int1Obj).length !== Object.keys(int2Obj).length) return false;

    for (let [key, val] of Object.entries(int1Obj)) {
        if (int2Obj[key] !== val) {
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false