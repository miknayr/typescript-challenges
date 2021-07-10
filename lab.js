console.clear();
/* TS Algorithms Lab */
/* --- Problem #1 - variable types --- */
// swap the values of these two variables and console.log() the result
// example outputs:
// console.log(numberString) => '7'
// console.log(realNumber) => 32
var numberString = '42';
var realNumber = 7;
// todo: swap the values in the varaibles and log the results
var number = String(realNumber);
realNumber = Number(numberString);
numberString = number;
console.log('this is number to string type: ' + numberString, typeof numberString);
console.log('this is string to number type: ' + realNumber, typeof realNumber);
/* --- Problem #2 - function and mixed array type --- */
// 1. create an array type that is a mix of strings of numbers and actual numbers
// ex: [10, '34', 3, '17']
// 2. write a function that accepts an array as a parameter, loops over it and converts all the 
// strings to numbers. the function should return a new array of only numbers
// ex: stringToNum([10, '34', 3, '17']) => [10, 34, 3, 17]
// Todo write the mixed array of strings and numbers
var arr = [1, '2', 3, 4, 5, '6'];
// Todo write a function to convert the mixed array to an array of only numbers
var stringToNum = function (arr) {
    var newArr = [];
    arr.forEach(function (item) {
        if (typeof (item) === 'string') {
            newArr.push(parseInt(item));
        }
        else {
            newArr.push(item);
        }
    });
    return newArr;
};
console.log('this is string to number: ' + stringToNum(arr));
var miki = ['Pasta Town', 723.6, 232.3];
var maki = ['Salad City', 123.3, 455.7];
// 🚨 uncomment this function to test your solution 🚨
function printCityData(city) {
    console.log(city[0] + " is at Lat: " + city[1] + ", Long: " + city[2]);
}
printCityData(maki);
printCityData(miki);
// Todo - write area function here
function area(pasta) {
    if (pasta.kind === 'square') {
        return pasta.width * pasta.width;
    }
    else if (pasta.kind === 'rectangle') {
        return pasta.width * pasta.height;
    }
    else if (pasta.kind === "circle") {
        return Math.PI * (Math.pow(pasta.radius, 2));
    }
    else {
        return -1;
    }
}
var square = {
    kind: 'square',
    width: 20
};
var rectangle = {
    kind: 'rectangle',
    width: 23,
    height: 121
};
var circle = {
    kind: 'circle',
    radius: 30
};
console.log(area(square));
console.log(area(rectangle));
console.log(area(circle));
