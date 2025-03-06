// Create constructr for Book that takes title, author, pages, and read or not
function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        // Determine if the user has read a book and return an informative str

        readStr = this.read ? "has read" : "has not read";

        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "has read" : "has not read"}`;
    }
}

x = new Book("Foo", "James Williams", 300, true)

console.log(x.info())

// The following excercises are taken from: https://javascript.info/prototype-inheritance
// in some instances I updated some syntax to use more mordern techniques

// Task 1: 
const animal = { jumps: null };

const rabbit = Object.create(animal, {
  jumps: true
});

alert( rabbit.jumps ); // ? (1) ANSWER: true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) ANSWER: null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) ANSWER: undefined

// Task 2: 

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };
  
  let bed = {
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    money: 2000
  };

  
  Object.setPrototypeOf(table, head)
  Object.setPrototypeOf(bed, table)
  Object.setPrototypeOf(pockets, bed)

  console.log(pockets.pen) // good!

  console.log(Object.getPrototypeOf(pockets) == Object.getPrototypeOf(head))

  //Answer the question:faster to get glasses as pockets.glasses or head.glasses
  // head so we don't have to go through the chain of inheritence 
  // wrong - I guess it doesn't matter due to modern engines 

  //Task 3

  const animal2 = {
    eat() {
      this.full = true;
    }
  };
  
  const rabbit2 = Object.create(animal2, {})
  
  console.log(rabbit2.eat())

  //f we call rabbit.eat(), which object receives the full property: animal or rabbit?
  // rabbit bc of use of this

  // Task 4
//   let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
  let speedy = Object.create(hamster, {})

  let lazy = Object.create(hamster, {})
  
  // This one found the food
speedy.eat("apple");
console.log(speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
 console.log(lazy.stomach ); // apple

 //Solution - leverage assignment and this operator to handle this:
 // rather than having all hamster "point"
 // to single stomach, an invocation on a given hamster
 // causes stomach to be created and updated for that hamster: 
 let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach = [food];
    }
  };



