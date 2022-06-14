let names = ["Victor", "Ken", "Nairobi", "Dan"]

//destructuring arrays
let [name1, name2, name3, name4] = names

console.log(name1)
console.log(name4)





let cars = {
  name: "Mercedes",
  year: 2019,
  model: "kompressor"
}

let carsEdit = {...cars, price: "$51000", condition: "new", fourWheel: true}

console.log(carsEdit);

//destructuring objects
let {name, year, model} = cars

console.log(name);
console.log(year);
console.log(model);


//destructuring with split()

const dogNames = "Sir Woody BarksAlot"

const [title, firstName, lastName] = dogNames.split(" ")

console.log(title, lastName);

console.log(firstName, lastName)
