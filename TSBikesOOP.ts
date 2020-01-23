class Bike{
    price!: number;
    max_speed!: string;
    miles!: number;
 
    constructor(price: number, max_speed: string) {
       this.price = price;
       this.max_speed = max_speed;
       this.miles = 0;
    }
 
    displayInfo() {
       console.log("price ", this.price, "Max Speed ", this.max_speed, "Total miles ", this.miles)
    }
 
    ride() {
       console.log("Riding ");
       this.miles += 10;
       console.log(this.miles);
       return this
    }
 
    reverse() {
       console.log("Reversing");
       if (this.miles <= 5) {
          this.miles = 0;
          console.log(this.miles);
          return this
       }
       else {
          this.miles -= 5;
          console.log(this.miles);
          return this;
       }
    }
 
 }
 
 
 const test1 = new Bike(1000, "10mph");
 const test2 = new Bike(2000, "20mph");
 const test3 = new Bike(3000, "30mph");
 
 test1.ride().ride().reverse()
 