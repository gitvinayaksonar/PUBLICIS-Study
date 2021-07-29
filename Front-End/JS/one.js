//console.log("hi");

// const x = { name : 'vinu'}
// x.name = 'sonar';
// console.log(x);

//////////////////////////////////////////////////////////////////////////////

// const foo = () => {
//     let x = 20;
//     console.log("x inside>>", x);

//     const hoo = () => {
//         x = 30;
//         console.log("x inside inside>>", x);
//     }
//     hoo();
// }
// foo()
// // console.log("x outside the {} >>", x);

 //////////////////////////////////////////////////////////////////////////////


// const foo = () => {
//     var x = 100;
//     {
//         let x = 200;
//         console.log("x >>", x);
//     }

//     console.log("x outside {} >>", x);    
// }

// foo();

//////////////////////////////////////////////////////////////////////////////


// let x = [1, 2, 3]
// console.log(...x);

// const foo = (k, ...arr) => {
//     console.log(k);
//     console.log(arr);
// }
// foo(4,5,6)

// let y = ["hi", "hello", "vinu"]
// const joo = (a, b, c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// joo(...y)

//////////////////////////////////////////////////////////////////////////////
// let x = 6;
// let y = x;
// x = 10;

// console.log("x, y", x, y);

//////////////////////////////////////////////////////////////////////////////


// const arr1 = ["hi", "hello", "vinu"];
// const arr2 = [...arr1, "sonar", "jamkhandi"]
// console.log(arr2);

//////////////////////////////////////////////////////////////////////////////

// const obj1 = { name : "vinu" }

// // I am storing the obj1 itself into obj2
// const obj2 = obj1;
// console.log(obj2);

// obj2.id = 105;

// console.log("obj2 >>>", obj2);
// console.log("obj1 >>>", obj1);

//////////////////////////////////////////////////////////////////////////////


// const obj1 = { name : "vinu" }

// // I am storing the COPY OF obj1 itself into obj2
// const obj2 = {...obj1};
// console.log(obj2);

// obj2.id = 105;

// const obj3 = {...obj1, place : 'jkd'}

// console.log("obj2 >>>", obj2);
// console.log("obj1 >>>", obj1);
// console.log("obj3 >>>", obj3);

//////////////////////////////////////////////////////////////////////////////

// for(let i = 0; i <=1; i++){
//     console.log(i);
// }

// const arr = [1, 2, 3];
// for(let elem of arr){
//     console.log(elem);
// }

// const obj = { name : 'vin'}
// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]);
// }


//////////////////////////////////////////////////////////////////////////////
// let i = 0;
// while(i<=10) {
//     console.log(i);
//     i++;
// }

/////////////////////////  RECURSIVE /////////////////////////////////////////////////////

// const fact = (n) => {
//     if(n <= 1) return 1;
//     else return n * fact(n-1)
// }

// console.log(fact(3));



//////////////////////////////////////////////////////////////////////////////
// foo stores nothing now
// const foo = ((n) => {
//     console.log("n >>", n);
// })(3)

// // x stores returned value
// const x = ((n) => {
//     return n * 2;
// })(3)
// console.log("x >>", x);

// closures
// const x_salary = (() => {
//     let salary = 50000;
//     return (n) => {
//         return n * salary;
//     }
// })();

// console.log("x_salary(2) >>", x_salary(2));
// console.log("x_salary(5) >>", x_salary(5));

//////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3]

// const newArr = arr.map((elem, i) => {
//     return elem * 2;
// })

// console.log(newArr);

/////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3]

// arr.forEach((elem, i) => {
//     arr[i] = elem * 2;
// })

// console.log(arr);


/////////////////////////////////////////////////////////////////////////////

// const arr = [4, 5, 6, 8, 10, 12]

// const filteredArr = arr.filter((elem, i) => {
//     return elem % 2 === 0;
// })

// console.log(filteredArr);


/////////////////////////////////////////////////////////////////////////////

// const arr = [4, 5, 6, 8, 10, 12]

// const filteredArr = arr.every((elem, i) => {
//     return Number(elem);
// })

// console.log(filteredArr);

/////////////////////////////////////////////////////////////////////////////

// const obj = {
//     name : 'vinu',
//     // getName :  function(){
//     //    // return 'my name is : ' + this.name;
//     //    return `my name is ${this.name.toUpperCase()}`
//     // }

//     getName(){
//         // return 'my name is : ' + this.name;
//         return `my name is ${this.name.toUpperCase()}`
//     }
// }
// console.log(" obj.getName()  >>", obj.getName());


/////////////////////////////////////////////////////////////////////////////

// var val1 = {name: "Tom"}; 
// var val2 = {name: "Tom"}; 

// // Locations of the same data, are different
// console.log(val1 == val2)  // return false
// console.log(val1 === val2) // return false


// // Location is stored in another variable. so must be same
// var val3 = val1; 

// console.log(val1 == val3) // return true 
// console.log(val1 === val3) // return true


/////////////////////////////////////////////////////////////////////////////


// let name = 'vin', age = 15;
// let obj = {
//     name, 
//     age
// }
// console.log(obj);


// let obj = { score : 15, yes : true}
// let { score, yes } = obj;
// console.log(score, yes);


/////////////////////////////////////////////////////////////////////////////
// Computed Properties

// let suffix = 'Name';
// let person = {
//     [ 'first' + suffix] : 'Vinayak',
//     [ 'last' + suffix] : 'Sonar'
// }

// console.log(person);
// console.log(person.firstName);

/////////////////////////////////////////////////////////////////////////////
