// Working with list of data

// Ways in JavaScript to work with immutable updates
// 1. array.map (returns array [])
// 2. array.filter (returns array [])
// 3. array.find (returns single item)

// All of which are used for immutable updates.
// [] array, {} object

// React only allows a "new copy" for updated data (doesn't allow directly modifying the data === immutable)

const breeders = [
    {
        name: 'breeder-1', gender: "female" // index = 0
    },
    {
        name: 'breeder-2', gender: "male" // index = 1
    },
    {
        name: 'breeder-3', gender: "male" // index = 1
    }
];



// from the word itself -> "map something to a different value"
const breedersGender = breeders.map(
    // why is it called "callback"? passed function which is going to get called by the function you just call
    // another reasons why callback?
    // 1. you get EACH ITEM easily + their index
    // 2. you get to map whatever, filter whatever, and find whatever 
    (breeder) => {
        return breeder.gender
    }
)

// console.log(breedersGender)

// Another use case, editing a specific item from the list (e.g. Edit the gender of 2nd item)
const newBreeders = breeders.map(
    // why is it called "callback"? passed function which is going to get called by the function you just call
    // another reasons why callback?
    // 1. you get EACH ITEM easily + their index
    // 2. you get to map whatever, filter whatever, and find whatever 
    (breeder, index) => {
        // 1. Must have a way to IDENTIFY THE 2ND ITEM
        if (index === 1) {
            // 2. ALWAYS return the original fields of the item you want to edit
            return {
                ...breeder,
                // 3. THEN, SPECIFICALLY EDIT the field you wnat to edit (gender)  
                gender: "whatever" // new value
            }
        } else {
            // 4. RETURN the original items
            return breeder
        }
    }
)

// console.log(newBreeders)


// 1. we call map()
// 2. we pass a function to map()
// 3. map() calls the function we passed

// ================

// use case 1: of filter is to delete an item
const breedersExceptFromFirstItem = breeders.filter(
    (breeder, index) => {
        // 1. Identify the item you want to delete
        if (index !== 0) {  // 2. Only return the items YOU DONT WANT TO DELETE
            return breeder
        }
    }
)

// console.log(breedersExceptFromFirstItem)


// ==============
const firstBreeder = breeders.find(
    (breeder, index) => {
        if (breeder.gender === "male") {
            return breeder
        }
    }
)


console.log(firstBreeder)

// =============

// !!ASSIGNMENT: Implementing your own function that accepts callback
const findFromNumber = (callback: (value: number, index: number) => any): number[]  => {
  // TODO: Implementation
  // Get the return from callback
  const returnedValueFromCallback = callback()
  
  return [returnedValueFromCallback !== undefined ?  returnedValueFromCallback : undefined ]
  
}

const foundNumber = findFromNumber(
  (number, index) => {
  }
)

// ASSIGNMENT: Implement calculator using callbacks (Use AI)
const two = calculator(
    (add, subtract) => {
        add(1, 1)
    }
)