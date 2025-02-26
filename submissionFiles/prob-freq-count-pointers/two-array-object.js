// add whatever parameters you deem necessary

let sampleKeysArr = 'tonyfasf'.split('');
let sampleValuesArr = '3242'.split('');

// console.log(sampleKeysArr, sampleValuesArr)


// function twoArrayObject(keysArr, valuesArr) {

//     //accepts two arrays of varying lengths
//     //first array consists of keys
//     //second consists of values

//     let result = {}

//     for (let key of keysArr) {
//         for (let value of valuesArr) {
//             result[key] = value || null

//         }
//     }





//     console.log(result)
//     //if there aren't enough values for keys then values are null
//     return result
// }

//     //if there aren't enough values for keys then values are null

function twoArrayObject(keysArr, valuesArr) {
    let result = {}

    for (let i = 0; i < keysArr.length; i++){
        //result at each key array index checks length if it is less than values arr.length then we set it to valuesArr[i] if not then its set to null
        result[keysArr[i]] = i < valuesArr.length ? valuesArr[i] : null;
    }
    return result;
}


console.log(twoArrayObject(sampleKeysArr, sampleValuesArr))