// comment 
// comment
/*
multi
line
comment
*/

// Datatypes
// Hashes 
// Arrays 
// Integers 
// string
// boolean true false 
// float 1.212
// null
// NAN
// undefined

// + - * / % ()
// > < == === != <= >=
//   3 == '3'
//   3 === '3'
  // => - Thad arrow
// || &&
// console.log("hello " + "world")
// ++
// --
// +=
//  -=

// Variable, old way var, new way let const 
  // - store data for ref later
  // multiple word camelCase
  // can have letter, number, _ $
  // have to start with a letter, _, $
  // stay away from reserve words , class, var, String
  // descriptive 
  // case sensitive 
// var balance = 1000
// console.log(Balance)
// balance = 900
// console.log(balance)
// don't use var because of the scope

// if (...) {
//   var balance = 4000
// } else {
   
// }

// scope this is going to be where it is defined
// const is used for other things in js
// let - change items that you are assigning

// const - shouldn't change items that you are assigning

// let name = "bob"
// name = "jim"
// console.log(name)
            
// const name = "bob"
// name = "jim"
// console.log(name)

// if (...) {
//   let balance = 4000 
// } else {
   
// }

// var planet = "Earth";
// var greeting = "Hello";
// console.log(greeting);
// // => "Hello"

// // concatenation
// var planetGreeting = "Hello " + planet;
// console.log(planetGreeting);
// // => "Hello Earth"

// var meaning = "The meaing of life is " + 42;
// console.log(meaning);
// // => "The meaning of life is 42"

// var value = "The value is " + 3/4;
// console.log(value);
// // => "The value is 0.75" (What happened here?)

// var tabbedName = "Name:\tDave";
// console.log(tabbedName);
// // => "Name: Dave"

// var nixon = "I \"am not a crook\" - Nixon";
// console.log(nixon);
// // => "I "am not a crook" - Nixon"


// var escapeBackSlash = "You can do it put your \\ into it";
// console.log(escapeBackSlash);
// // => "You can do it put your \ into it"

// var newLine = "Roses are red\nViolets are blue";
// console.log(newLine);
// // => "Roses are red
// // Violets are blue"

// let colors = ["Pink", "Yellow", "Blue"]
// console.log(colors[1])
// console.log(colors.indexOf("Blue"))
// console.log(colors.indexOf("Green"))
// console.log(colors.join(", "))
// console.log(colors.includes("Purple"))
// add into the array
// colors.push("Purple") // add to the end
// colors.unshift("Green") // add to the front
// remove a item
// colors.pop() // remove from the end
// console.log(colors.slice(1))
// console.log(colors)
// console.log(colors.length)
// console.log(colors.reverse())

let colors = ["Pink", "Yellow", "Blue"]
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// colors.forEach( color => {
//   console.log(color)
// })

// for (let color of colors) {
//   console.log(color)
// }

// prefered way
// colors.map( color => {
//   console.log(color)
// })

// var numbers = [1,2,3,4,5,6,7,8]

// var even = numbers.filter( function(num) {
//   return num % 2 === 0
// })

// console.log(even)

// var numbers = [1,2,3,4,5,6,7,8]

// // total = accumulator && num = currentValue
// var sum = numbers.reduce( function(total, num) {
//   return total + num
// }, 0 )

// console.log(sum)

// hashes 
// object - Noun, item and tools
// hashes, 
// JSON
// class
// let person = { name: "judy", age: 24 }
// console.log(person['name'])
// console.log(person.name)
// console.log(person.age)
// person.age = 26
// person.hair = "brown"
// console.log(person.age)
// console.log(person)

// let ppl = [
//   { name: 'bob', age: 2 },
//   { name: 'jill', age: 56 },
//   { name: 'judy', age: 21 },
// ]

// ppl.map( person => {
//   console.log(person.name)
//    console.log(person.age + 1)
// })