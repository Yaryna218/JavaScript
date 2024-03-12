var driver = {
    name: "Yaryna Tokarchuk", 
    category: "C",
    personalLimitations: "No driving at night"
  };
  
var car1 = new Object();
car1.color = "Red"; 
car1.maxSpeed = 150; 
car1.driver = driver; 
car1.tuning = true;
car1.numberOfAccidents = 0;
console.log(car1);
car1.drive = function() {
    console.log("I am not driving at night");
  };
  car1.drive();








////////////////////////////////////////////////////////
var driverCar2 = {
    name: "Yaryna Tokarchuk",
    category: "B",
    personalLimitations: null
  };
  var car2 = {
    color: "Black", 
    maxSpeed: 180, 
    driver: driverCar2, 
    tuning: false,
    numberOfAccidents: 2
  };
  
  
  console.log(car2);

  car2.drive = function() {
    console.log("I can drive anytime");
  };
  car2.drive();
  /////////////////////////////////////////////////////////////

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;    
    this.weight = weight;  
    this.avgSpeed = avgSpeed;  
    this.brand = brand;  
    this.model = model;  
  }
  Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
      name: name,
      nightDriving: nightDriving,
      experience: experience
    };
  };
  Truck.prototype.trip = function() {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      console.log("Driver " + this.driver.name + " " +
             (this.driver.nightDriving ? "drives at night" : "does not drive at night") +
                  " and has " + this.driver.experience + " years of experience");
    }
  };
  var truck1 = new Truck("Blue", 6000, 55.2, "BMW", "X-5");
  var truck2 = new Truck("Red", 7000, 50.8, "Mercedes", "Actros");
  truck1.AssignDriver("Yaryna Tokarchuk", true, 5);
truck2.AssignDriver("Yaryna Tokarchuk", false, 2) 
  truck1.trip();
  truck2.trip();
  
  /////////////////////////////////////////////////////////
  class Square {
    constructor(a) {
      this.a = a; 
    }
    static help() {
        console.log("Квадрат — це геометрична фігура з чотирма рівними сторонами і чотирма рівними кутами».");
        console.log("Властивості:");
        console.log("- Всі сторони квадрата рівні");
        console.log("- Кожен із кутів квадрата дорівнює 90 °");
        console.log("Формули:");
        console.log("- Периметр: 4 * a");
        console.log("- Площа: a^2");
      }
      length() {
        const perimeter = 4 * this.a;
        console.log("Периметр:", perimeter);
      }
      square() {
        const area = Math.pow(this.a, 2);
        console.log("Площа:", area);
      }
      info() {
        console.log("Характеристика квадрата:");
        console.log("- Довжина всіх 4 сторін:", this.a);
        console.log("- Величини всіх 4 кутів =90");
        this.length();
        this.square();
      }



    }
    class Rectangle extends Square {
        constructor(a, b) {
          super(a); 
          this.b=b;
    }
    static help() {
        console.log("Прямокутник — це геометрична фігура з чотирма сторонами і чотирма прямими кутами.");
        console.log("Властивості:");
        console.log("- Довжина прямокутника (a).");
        console.log("- Ширина прямокутника (b).");
        console.log("Формули:");
        console.log("- Периметр: 2 * (a + b)");
        console.log("- Площа: a * b");
      }
      length() {
        const perimeter = 2 * (this.a + this.b);
        console.log("Периметр:", perimeter);
      }
      square() {
        const area = this.a * this.b;
        console.log("Площа:", area);
      }
      info() {
        console.log("Характеристика прямокутинка:");
        console.log("- Довжина прямокутника (a):", this.a);
        console.log("- Ширина прямокутника (b):", this.b);
        console.log("- Кути: 90 градусів кожен");
        this.length();
        this.square();
      }

}
class Rhombus extends Square {
    constructor(a, alpha, beta) {
      super(a);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Ромб — це геометрична фігура з чотирма рівними сторонами.");
      console.log("Властивості:");
      console.log("- Сторона ромба (a).");
      console.log("- Турий кут ромба (alpha).");
      console.log("- Гострий кут ромба (beta).");
      console.log("Формули:");
      console.log("-Периметр: 4 * a");
      console.log("- Площа: (a^2 * sin(alpha * PI / 180))");
    }
  
    length() {
      const perimeter = 4 * this.a;
      console.log("Периметр:", perimeter);
    }
  
    square() {
      const area = (Math.pow(this.a, 2) * Math.sin(this.alpha * Math.PI / 180)).toFixed(2);
      console.log("Площа:", area);
    }
  
    info() {
      console.log("Характеристика ромба:");
      console.log("- Сторона ромба (a):", this.a);
      console.log("- Тупий кут ромба (alpha):", this.alpha);
      console.log("- Гострий кут (beta):", this.beta);
      this.length();
      this.square();
    }
  }


  class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
      super(a, b);
      this.alpha = alpha;
      this.beta = beta;
    }
  
    static help() {
      console.log("Паралелограм — чотиригранна фігура, протилежні сторони якої паралельні.");
      console.log("Властивості:");
      console.log("- Довжина  (a).");
      console.log("- Ширина паралелограма (b).");
      console.log("- Тупий кут паралелограма (alpha).");
      console.log("- Гострй кут паралелограма (beta).");
      console.log("Формули:");
      console.log("- Периметр: 2 * (a + b)");
      console.log("- Площа: a * b * sin(alpha * PI / 180)");
    }
    length() {
        const perimeter = 2 * (this.a + this.b);
        console.log("Периметр:", perimeter);
      }
    
      square() {
        const area = this.a * this.b * Math.sin(this.alpha * Math.PI / 180);
        console.log("Площа:", area);
      }
    info() {
      console.log("Характеристика паралелограма:");
      console.log("- Довжина паралелограма (a):", this.a);
      console.log("- Ширина паралелограма (b):", this.b);
      console.log("- Тупий кут (alpha):", this.alpha);
      console.log("- Гострий кут (beta):", this.beta);
      this.length();
      this.square();
    }
  }
  class RectangleWithGettersAndSetters extends Rectangle {
    get length() {
      return this.a;
    }
  
    set length(value) {
      this.a = value;
    }
  
    get width() {
      return this.b;
    }
  
    set width(value) {
      this.b = value;
    }
  }
  class ParallelogramWithGettersAndSetters extends Parallelogram {
    get length() {
      return this.a;
    }
  
    set length(value) {
      this.a = value;
    }
  
    get width() {
      return this.b;
    }
  
    set width(value) {
      this.b = value;
    }
  
    get obtuseAngle() {
      return this.alpha;
    }
  
    set obtuseAngle(value) {
      this.alpha = value;
    }
  
    get acuteAngle() {
      return this.beta;
    }
  
    set acuteAngle(value) {
      this.beta = value;
    }
  }
  class RhombusWithGettersAndSetters extends Rhombus {
    get sideLength() {
      return this.a;
    }
  
    set sideLength(value) {
      this.a = value;
    }
  
    get obtuseAngle() {
      return this.alpha;
    }
  
    set obtuseAngle(value) {
      this.alpha = value;
    }
  
    get acuteAngle() {
      return this.beta;
    }
  
    set acuteAngle(value) {
      this.beta = value;
    }
  }
  
  const mySquare = new Square(5);
   mySquare.info();
  Square.help();
  
  const myRectangle = new Rectangle(4,6);
  myRectangle.info();
  Rectangle.help()
  const myRhombus = new Rhombus(7, 120, 60);
  myRhombus.info();
  Rhombus.help();
  const myParallelogram = new Parallelogram(5, 8, 120, 60);
myParallelogram.info();
Parallelogram.help();
///////////////////////////////////////

function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
  }


  
const myTriangle = Triangular();
const myTriangle2 = Triangular(7, 24, 25);
const myTriangle3 = Triangular(5, 12, 13);
console.log(myTriangle);
console.log(myTriangle2);
console.log(myTriangle3);

////////////////////////////////////
function PiMultiplier(number) {
    return function () {
      return Math.PI * number;
    };
  }
  const multiply = PiMultiplier(2);
  const multiply2 = PiMultiplier(2/3);
  const multiply3 = PiMultiplier(1/2);

  console.log("Result of multiplying pi by 2:",multiply());
  console.log("Result of multiplying pi by 2/3:",multiply2());
  console.log("Result of dividing pi by 2:",multiply3());
  ///////////////////
  function Painter(color) {
    return function(object) {
      const typeMessage = object.type ? `Type: ${object.type}` : "No 'type' property occurred!";
      console.log(`Color: ${color}, ${typeMessage}`);
    };
  }
  const PaintBlue = Painter("Blue");
  const PaintRed = Painter("Red");
  const PaintYellow = Painter("Yellow");
  const object1 = { maxSpeed: 280, type: "Sportar" ,color:"magenta"};
  const object2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
  const object3 = { maxSpeed: 180, color:"purple", isCar: true };
  PaintBlue(object1);
  PaintRed(object2);
  PaintYellow(object3); 