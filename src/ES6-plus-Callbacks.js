// Working with list of data
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Ways in JavaScript to work with immutable updates
// 1. array.map (returns array [])
// 2. array.filter (returns array [])
// 3. array.find (returns single item)
// All of which are used for immutable updates.
// [] array, {} object
// React only allows a "new copy" for updated data (doesn't allow directly modifying the data === immutable)
var breeders = [
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
var breedersGender = breeders.map(
// why is it called "callback"? passed function which is going to get called by the function you just call
// another reasons why callback?
// 1. you get EACH ITEM easily + their index
// 2. you get to map whatever, filter whatever, and find whatever 
function (breeder) {
    return breeder.gender;
});
// console.log(breedersGender)
// Another use case, editing a specific item from the list (e.g. Edit the gender of 2nd item)
var newBreeders = breeders.map(
// why is it called "callback"? passed function which is going to get called by the function you just call
// another reasons why callback?
// 1. you get EACH ITEM easily + their index
// 2. you get to map whatever, filter whatever, and find whatever 
function (breeder, index) {
    // 1. Must have a way to IDENTIFY THE 2ND ITEM
    if (index === 1) {
        // 2. ALWAYS return the original fields of the item you want to edit
        return __assign(__assign({}, breeder), { 
            // 3. THEN, SPECIFICALLY EDIT the field you wnat to edit (gender)  
            gender: "whatever" // new value
         });
    }
    else {
        // 4. RETURN the original items
        return breeder;
    }
});
// console.log(newBreeders)
// 1. we call map()
// 2. we pass a function to map()
// 3. map() calls the function we passed
// ================
// use case 1: of filter is to delete an item
var breedersExceptFromFirstItem = breeders.filter(function (breeder, index) {
    // 1. Identify the item you want to delete
    if (index !== 0) { // 2. Only return the items YOU DONT WANT TO DELETE
        return breeder;
    }
});
// console.log(breedersExceptFromFirstItem)
// ==============
var firstBreeder = breeders.find(function (breeder, index) {
    if (breeder.gender === "male") {
        return breeder;
    }
});
console.log(firstBreeder);
