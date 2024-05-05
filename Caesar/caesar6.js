const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  },
};

guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"],
};

// console.log(guests);

// guests.CICERO.pastGifts.push("Golden Lyre");
// console.log(guests.CICERO.pastGifts);

// console.log(guests.ANTONY.region);

// delete guests.CICERO;
// console.log(guests);

generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";
console.log(generalProfile);

console.log(guests);
