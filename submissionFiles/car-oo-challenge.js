class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        //should be return "Beep";
        console.log("Beep.")
    }

    toString() {
        //should be return
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."







class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }

}
let myFirstCar = new Car("Toyota", "Corolla", 2005, 4);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
console.log(myFirstCar.numWheels);  // 4









class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        //should be return
        console.log("VROOM")
    }
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."
myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
console.log(myFirstMotorcycle.numWheels);  // 2






class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Sorry vehicles only";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Garage is full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}
let garage = new Garage(2);
console.log(garage.vehicles); // []
console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."