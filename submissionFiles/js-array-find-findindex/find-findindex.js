/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 



findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

const users = [
    { username: "mlewis" },
    { username: "akagen" },
    { username: "msmith" },
];

function findUserByUsername(usersArray, username) {
    return usersArray.find(function (element) {
        return element["username"] === username;
    });
}

console.log(findUserByUsername(users, "mlewis"));

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 


removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

// const users = [
//     { username: "mlewis" },
//     { username: "akagen" },
//     { username: "msmith" },
// ];

function removeUser(usersArray, username) {
    const index = usersArray.findIndex(function (element) {
        return element.username === username;
    });
    if (index !== -1) {
        return usersArray.splice(index, 1)[0];
    }
    return undefined;
}
console.log(removeUser(users, "msmith"))
console.log(users);
