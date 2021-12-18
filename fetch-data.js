/*
    Task 1: Call fetch() and filter() using a Database instance.
    You are required to implement fetch() and filter() so that "Code Block A" will work.
    The output looks something like this:
    fetch() returns [
        { name: 'Ivan', age: 30, gender: 'm' },
        { name: 'Christopher', age: 34, gender: 'm' },
        { name: 'Cheryl', age: 29, gender: 'f' },
        { name: 'Kelly', age: 27, gender: 'f' }
    ]
    filter() returns [
        { name: 'Cheryl', age: 29, gender: 'f' },
        { name: 'Kelly', age: 27, gender: 'f' }
    ]
    
    Task 2: Work on Code Block B. It should have the same output as Code Block A excepts it uses async/await syntax.
    Hint: 
    - Array.filter()
    - IIFE
*/


class Database {
  #data = [
    {
      name: "Ivan",
      age: 30,
      gender: "m",
    },
    {
      name: "Christopher",
      age: 34,
      gender: "m",
    },
    {
      name: "Cheryl",
      age: 29,
      gender: "f",
    },
    {
      name: "Kelly",
      age: 27,
      gender: "f",
    },
  ];
 
  fetch() {
    // Add code here
    return new Promise((resolve) => {
      resolve(this.#data);
    });
  }



filter(prop, value) {
    // Add code here
    return new Promise((resolve) => {
      resolve(this.#data.filter((element) => { return element[prop] === value}));
    });
  }
}


// Code Block A
const db = new Database();
db.fetch().then((r) => console.log("In then() catch(): fetch() returns", r)); // prints entire #data array
db.filter("gender", "f").then((r) => console.log("In then() catch(): filter() returns", r)); // prints an array contains the female
// End of Code Block A

// Code Block B

// Add code here - async/await syntax
const anotherDBInstance = new Database();
(async () => {
  let fetchData = await anotherDBInstance.fetch();
  console.log("In async/await: fetch() returns", fetchData)
  let filterData = await anotherDBInstance.filter("gender", "f");
  console.log("In async/await:  filter() returns", filterData)
})();
// End of Code Block B