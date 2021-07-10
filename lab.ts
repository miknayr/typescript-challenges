console.clear()
/* TS Algorithms Lab */

/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32

let numberString: string = '42'
let realNumber: number = 7

// todo: swap the values in the varaibles and log the results
let number: string = String(realNumber)
realNumber = Number(numberString)
numberString = number

console.log('this is number to string type: ' + numberString, typeof numberString)
console.log('this is string to number type: ' + realNumber, typeof realNumber)


/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]

// Todo write the mixed array of strings and numbers
let arr: Array<number | string> = [1,'2',3 ,4 ,5, '6']


// Todo write a function to convert the mixed array to an array of only numbers

const stringToNum = (arr: Array<number | string>): number[] => {
  let newArr: number[] = []
  arr.forEach(item => {
    if(typeof(item) === 'string') {
      newArr.push(parseInt(item))
    } else {
      newArr.push(item)
    }
  })

  return newArr
}

console.log('this is string to number: '+ stringToNum(arr))

/* --- Problem #3 - Tuple Type --- */
// 1. Create a tuple type named 'cityCoordinate' that has three elements: city name, latitute, and longitude
// 2. Create some cities with lat/lon data and pass them into printCityData;
// uncomment the function to test your solution

// Todo - create the type definition, and some cities
type cityCoordinate = [string, number, number];

let miki: cityCoordinate = ['Pasta Town', 723.6, 232.3];
let maki: cityCoordinate = ['Salad City', 123.3, 455.7];



// 🚨 uncomment this function to test your solution 🚨
function printCityData(city: cityCoordinate): void {
  console.log(`${city[0]} is at Lat: ${city[1]}, Long: ${city[2]}`);
}

printCityData(maki);
printCityData(miki);

/* --- Problem #4 - Interfaces and Union Types --- */
// Given the following interfaces and type declarations...
// 1. Create a union type that is the union of the Square, Rectangle, and Circle interfaces
// 2. Write the area function that: 1. Only takes in your union type as an input 2. Returns the area of the shape
// oh no! math!
// the area of a square is found by multipling the width by the width
// the area of a rectangle is found by multipling the width by the height
// the area of a circle is found by multiplying pi by the radius squared

interface Square {
    kind: 'square',
    width: number,
}
interface Rectangle {
    kind: 'rectangle',
    width: number,
    height: number,
}
interface Circle {
    kind: 'circle',
    radius: number,
}

// Todo - Create union type here
type Shape = Square | Rectangle | Circle;

// Todo - write area function here

function area(pasta: Shape): number {
  if (pasta.kind === 'square') {
    return pasta.width * pasta.width;
  }
  else if (pasta.kind === 'rectangle') {
    return pasta.width * pasta.height;
  }
  else if (pasta.kind === "circle") {
    return Math.PI * (pasta.radius **2)
  } else {
    return -1;
  }
}
let square: Square = {
  kind: 'square',
  width: 20
}
let rectangle: Rectangle = {
  kind: 'rectangle',
  width: 23,
  height: 121
}
let circle: Circle = {
  kind: 'circle',
  radius: 30
}


console.log(area(square))
console.log(area(rectangle))
console.log(area(circle))
