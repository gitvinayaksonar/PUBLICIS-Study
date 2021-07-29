// 1. Write a JavaScript program to display the current day and time in the following format. 

// const getTimeIn12HourFormat = (t) => {
//     return t < 12 ? `${t} AM` : `${t % 12} PM`
// } 

// const foo = () => {
//     const dt = new Date();
//     const daysArr = ['Mon', 'Tues', 'Wedn', 'Thurs', 'Fri', 'Sat', 'Sun'];
//     console.log(`Today is : ${daysArr[dt.getDay()]}-day`);

//     const timeInHrs = dt.getHours();
//     let result = 'Current time is : ';

//     switch (timeInHrs){
//         case 0:
//             result += timeInHrs + 'AM';
//             break;
//         case 24:
//             result += timeInHrs + 'AM';
//             break;
//         default:
//             let time = getTimeIn12HourFormat(timeInHrs)
//             result += `${time} : ${dt.getMinutes()} : ${dt.getSeconds()}`
//             break;        
//     }

//     console.log(`${result}`);
// }

// foo()


// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// const foo = (...arr) => {
//     console.log(arr);
// }

// const x = [5, 6, 7]
// foo(1, 2)
// foo(['a', 'b', 'c'])


// const calcArea = (a, b, c) => {
//     let s = (a+b+c)/2;
//     let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     console.log("area >>", area, area.toFixed(2));
// }

// calcArea(5, 6, 7)


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 

// let text = 'W3SCHOOLS';

// const foo = (str) => {
//     // let strArr = str.split('');
//     // let lastElem = strArr.pop();
//     // let lastElemArray = [lastElem]
//     // let res =  lastElemArray.concat(strArr).join('');
//     // console.log("res >>>", res);

//     // text = res;

//     let res = str.substring(str.length-1) + str.substring(0, str.length-1);
//     console.log("res >>>", res);
//     text = res;
// }


// setInterval(() => {
//     foo(text);
// }, 1000);



// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

// const isLeapYear = (year) => {
//     let res = year % 4 === 0 ? (year % 100 !== 0 ? true :( year % 400 === 0 ? true : false)) : false;
//     console.log(res);
// }

// isLeapYear(100)


// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

// let years = [];
// const foo = (year) => {
//     const dt = new Date(year, 0, 1);
//     let isSunday = dt.getDay() === 0 ? true : false;
//     isSunday ? years.push(year) : null;
// }

// for(let i = 2014; i <= 2050; i++){
//     foo(i);
// }

// console.log(" years >>>", years);


// 13. Write a JavaScript exercise to create a variable using a user-defined name. like x = 5

// let name = "x";
// let value = 15;

// this[name] = value;

// console.log(this[name]);


// 14. Write a JavaScript exercise to get the extension of a filename.
// const foo = (fn) => {
//     console.log(fn.split('.')[1]); 
// }

// foo("vinayak.jpg")
// foo("vinayak.pdf")


// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

// const check = (n) => {
//     let res = (Math.abs(100 - n) <= 20) || (Math.abs(400 - n) <= 20)
//     console.log("res >>>", res);
// }

// check(420)


// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.

// const foo = (a, b) => {
//     let res = (a > 0 && b < 0) || (a < 0 && b > 0);
//     console.log(res);
// }

// foo(5, -5)
// foo(-8, 9)
// foo(6, 7)

// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// const foo = (s) => {
//     let res = s.startsWith('Py') ? s : 'Py'+ s;
//     console.log(res);
// }

// foo("thon")
// foo("Python")



// 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.  

// const foo = (s, i) => {
//     let res =  s.slice(0, i) + s.slice(i+1);
//     console.log(res);
// }
// foo("Vinayak", 3)



// 23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// let x = "vinayak";
// console.log(x.slice(2, 5));
// console.log(x);

// let name = "vinayak";
// let y = name.split('');
// console.log(y.splice(4, 2));
// console.log(y);




// 48. Write a JavaScript program to reverse a given string.

// let x = 'hi-hello';
// let res = x.split('').reverse().join('');
// console.log("Res >>>", res);



// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// let s = "abcdef";

// const foo = (str) => {   
//     let resArr = [];
//     for (let index = 0; index < str.length; index++) {
//         let charCode = str.charCodeAt(index);
//         let nextChar = String.fromCharCode(charCode+1);
//         resArr.push(nextChar)
//     }

//     let result = resArr.join('');
//     console.log("result >>", result);
// }

// foo(s)


// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.
// let sent = "i am very efficient in development and coding";

// const foo = (str) => {
//     let wordsArr = str.split(' ');
//     let resArr = [];
//     for(let word of wordsArr){
//         let newWord = word[0].toUpperCase() + word.slice(1);
//         // console.log(newWord);
//         resArr.push(newWord);
//     }
//     let output = resArr.join(' ');
//     console.log("output >>", output);
// }

// foo(sent)


// 51. Write a JavaScript program to convert a given number to hours and minutes. 

// const foo = (n) => {
//     let hrs = Math.floor(n / 60);
//     let mins = (n % 60);
//     console.log(`Time is ${hrs} hours : ${mins} mins`);
// }
// foo(479)


// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
// let s = "vinadffbeewaeafrfbrebsdda";

// const foo = (str) => {
//     let arr = str.split('');
//     let aIndices = [];
//     let bIndices = [];

//     for(let [i, elem] of arr.entries()){
//         if(elem === 'a') aIndices.push(i);
//         if(elem === 'b') bIndices.push(i);
//     }

//     console.log(aIndices, bIndices);
//     checkDiff(aIndices, bIndices)
// }


// const checkDiff = (arr1, arr2) => {
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(Math.abs(arr1[i] - arr2[j]) === 4) console.log(arr1[i], arr2[j]);            
//         }
//     }
// }

// foo(s)


// 69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3

// const arr = [3, 5, 7];

// const calcSum = (arr) => arr.reduce((acc, elem) => {
//     console.log(acc, elem);
//     return acc + elem
// }, 0)

// calcSum(arr)

// 81. Write a JavaScript program to add two digits of a given positive integer of length two.
// const foo = (n) => {
//     let res = Math.floor(n / 10) + (n % 10 )
//     console.log(res);
// }

// foo(15)
// foo(26)

// 91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

// const a = [4, 6, 10, 40, 2, 1];

// const foo = (arr) => {
//     let maxSum = 0;
//     for(let i = 0; i < arr.length; i++){
//         let sum = arr[i] + arr[i+1] + arr[i+2];
//         maxSum = sum > maxSum ? sum : maxSum;
//     }
//     console.log(maxSum);
// }

// foo(a)


// 93. Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers

// let a = [10, 20, 50, 5, 15, 70];

// const foo = (arr) => {
//     let maxDiff = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j != i && j < arr.length; j++){
//             console.log(arr[i], arr[j]);
//             let diff = Math.abs(arr[i]- arr[j]);
//             maxDiff = diff > maxDiff ? diff : maxDiff;
//         }
//     }
    
//     // let maxValue = Math.max(...arr)
//     // let minValue = Math.min(...arr)
//     // maxDiff = Math.abs(maxValue - minValue)

//     console.log(" maxDiff >>", maxDiff);
// }
// foo(a)


// 94. Write a JavaScript program to find the number which appears most in a given array of integers.
// const a = [4, 5, 5, 6, 7, 1, 7, 7]

// const foo = (arr) => {
//     let obj = {}
//     for(let i = 0; i < arr.length; i++){
//         if(!obj.hasOwnProperty(arr[i])){
//             obj[arr[i]] = 1;
//         }else{            
//             obj[arr[i]] = parseInt(obj[arr[i]]) + 1;
//         }
//     }
//     console.log(" obj >>>", obj);

//     let maxOccurance = 0;
//     for(let key in obj){
//         maxOccurance = obj[key] > maxOccurance ? obj[key] : maxOccurance;
//     }
//     console.log("maxOccurance >>>", maxOccurance);
// }

// foo(a)


// 105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.


// const sumOfAnArray = (n) => {
//     let stringNum =  n.toString();
//     let arr = stringNum.split('');

//     let sumOfArray = arr.reduce((acc, elem) => {
//         return acc + parseInt(elem);
//     }, 0)
    
//     console.log("sumOfArray  >>>", sumOfArray);
//     return sumOfArray;

// }

// const foo = () => {    
//     const num = 192333;
//     let counter = 1;
    
//     if(sumOfAnArray(num) < 9){
//         // console.log(sumOfAnArray(num), '------', counter);
//         console.log("hi...");
//     }else{
//         console.log();
//     }
// }

// foo()



// 106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result

// const foo = (num, d) => {
//     if(d === 1) return num;
//     else {
//         while(num % d === 0){
//             num = num / d;
//         }
//         return num;
//     }
// }

// console.log(foo(12, 4));
// console.log(foo(125, 5));




// 107. Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

// let a = [2, 4, 16, 48];

// const foo = (arr) => {
//     let resultArr = [];
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j != i && j < arr.length; j++){
//             console.log(arr[i], arr[j]);

//             if(arr[i] % arr[j] == 0){
//                 resultArr.push([arr[i], arr[j]])
//             }
//         }
//     }
//     console.log(resultArr, resultArr.length);
// }

// foo(a)


// 109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// const isPrime = (n) => {
//     const isDivisibleArr = [];

//     for(i = 2; i <= n/2; i++){
//         console.log(i);        
//         if(n % i === 0){
//             isDivisibleArr.push(true)
//         }else {
//             isDivisibleArr.push(false)
//         }
//     }

//     console.log("isDivisibleArr >>", isDivisibleArr);
//     isDivisibleArr.includes(true) ? console.log(`${n} is not a Prime`) : console.log(`${n} is a Prime`);
// }

// isPrime(10);
// isPrime(9);
// isPrime(7);




// 115. Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).


// const isDiagonal = (arr) => {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             console.log(i, j);
//             if(i !== j && arr[i][j] !== 0){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// const a = [ [1, 0, 0], [0, 2, 3], [0, 0, 3] ]
// console.log(isDiagonal(a));

// const b = [ [1, 0, 0], [0, 2, 0], [0, 0, 3] ]
// console.log(isDiagonal(b));















