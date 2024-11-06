// Define the CarCl class
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed; // speed in km/h
    }
  
    // Accelerate method - increases speed by 10 km/h
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Brake method - decreases speed by 5 km/h
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // Getter to convert speed to mi/h
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // Setter to set speed in mi/h, converting it to km/h
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  // Create a new CarCl object with the test data
  const car1 = new CarCl('Ford', 120);
  
  // Testing accelerate and brake methods
  car1.accelerate();
  car1.accelerate();
  car1.brake();
  
  // Testing the getter for speed in mi/h
  console.log(`${car1.make} speed in mi/h: ${car1.speedUS}`);
  
  // Testing the setter to update speed in mi/h
  car1.speedUS = 75;
  console.log(`${car1.make} is now going at ${car1.speed} km/h (${car1.speedUS} mi/h)`);
  