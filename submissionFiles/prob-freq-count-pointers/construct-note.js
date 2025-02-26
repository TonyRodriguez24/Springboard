// add whatever parameters you deem necessary
function createMapObject(str) {
    let result = {}

    for (let char of str) {
        let lowerChar = char.toLowerCase();

        if (!result[lowerChar]) {
            result[lowerChar] = 1
        } else {
            result[lowerChar] += 1
        }
    }

    return result;
}



function constructNote(str1, str2) {
    const one = createMapObject(str1);
    const two = createMapObject(str2);
    //use map to check size
    //if one is bigger then automatically is false

    for (let [key, value] of Object.entries(one))
    {
        console.log(`${key} : ${value}`)
        //if the letter is missing !two[key] or there are not enough then we return false
        if (!two[key] || two[key] < value) {
            console.log(false)
            return false;
        }
    }

    console.log(true)
    return true;
}



//returns true if you find whats in left string in the right string
constructNote('ton', 'ANTHONY rodriguez') //true
console.log(constructNote("aab", "abc")); // false
console.log(constructNote("hello", "heollhleo")); // true
console.log(constructNote("test", "ttess")); // true