function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

function createInstructor2(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}

console.log(createInstructor2("tony", "rodriguez"));

// var favoriteNumber = 42;
// var instructor = {
// firstName: "Colt",
// };

// instructor[favoriteNumber] = "That is my favorite!";

let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite",
};

console.log(instructor);

var instructor2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    },
};

const instructor3 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye";
    },
};

console.log(instructor3);
console.log(instructor3.sayBye());
console.log(instructor3.sayHi());

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

// function createAnimal(species, verb, noise){
//     return {
//         species,
//         [verb](){
//             return noise;
//         }
//     }
// }

function createAnimal(species, verb, noise) {
    return {
        species,
        //if verb is bark then it will create a method named bark which then returns a noise
        [verb]() {
            // [] used to dynamically define propery names for objects
            return noise;
        },
    };
}
