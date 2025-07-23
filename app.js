// ! Exercise 1:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = nums.map((num) => num * 2)
console.log(numsTimesTwo)

// ! Exercise 2:

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings
console.log(firstIngredient)
console.log(secondIngredient)

// ! Exercise 3:

const car = {
    make: 'Audi',
    model: 'Q5',
  };
  
  // Your code here:
  
const { make, model } = car;
console.log(make)
console.log(model)

// ! Exercise 4: 

const morePizzaToppings = ['Cheese', 'Sauce'];

// Your code here:

const uncontroversialPizzaToppings = [...morePizzaToppings]
console.log(uncontroversialPizzaToppings)

// ! Exercise 5:

const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
  };
  
  // Your code here:
  
  const myCar = { ...anotherCar }
  myCar.make = 'Mazda'
  myCar.model = 'Protege'
  console.log(anotherCar)
  console.log(myCar)

  // ! Exercise 6:

// Your code here:

const propertyName = 'username'

const userProfile = {
    [propertyName]: 'rmag24',
}
console.log(userProfile)