const guests = ["ANTHONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS");
// console.log(guests);

guests.push("AUGUSTUS", "LUCIA");
// console.log(guests);

guests.splice(3, 1);
console.log(guests);

const specialGuests = guests.slice(0, 3);
console.log(specialGuests);

const regularGuests = guests.slice(3);
regularGuests.sort();
console.log(regularGuests);

const allGuests = specialGuests.concat(regularGuests);
console.log(allGuests);
