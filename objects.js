// Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older

const people=[
    person1={
        name:'Alice',
        age:17
    },
    person2={
        name:'Eunice',
        age:22
    },
    person3={
        name:'Charlie',
        age:14
    },
    person4={
        name:'Max',
        age:19
    }
];
let adults = people.filter(person => person.age >= 18);

console.log(adults);

// Write a function that takes an array of objects,
//  where each object represents a product with a name, price, and 
//  category property. The function should return an object that groups the products by their categories,
//   with the category names as keys and the arrays of products as values
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
    ];
    function groupProductsByCategory(products) {
        
            let groupByCategories = Object.group(products, product =>{
                return product.category;
            });
            console.log(groupByCategories)
    }
    groupProductsByCategory(products)


// Given an array of objects, where each object represents a student with a name and an
//array of scores, write a function that returns a new array containing the names of all 
//students whose average score is greater than or equal to 85.
      const students = [
        { name: 'John', scores: [90, 80, 85] },
        { name: 'Jane', scores: [95, 92, 88] },
        { name: 'Jim', scores: [70, 80, 75] },
        { name: 'Jill', scores: [85, 90, 84] },
      ];
      function getTopStudents(students) {
        return students.filter(student => {
            const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
            return averageScore >= 85;
        }).map(student => student.name);
    }
    const topStudents = getTopStudents(students);
    console.log(topStudents)
    



//   Given an object representing a car, with properties for the make, model, year, and a method to display the 
  // car's information, write a function that takes the car object and adds a new method to the object called age. 
  // The age method should return the current age of the car based on the current year and the car's year property. 
  const vehicle = {
      make: 'Toyota',
      model: 'Isuzu',
      year: 2016,
      display: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
      },
    };
    function add(){
      vehicle.age = function(){
          let currentYear = 2020
          return currentYear - vehicle.year 
      }
      console.log(car.age())
    }
    add()


