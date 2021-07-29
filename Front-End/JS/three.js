// const mapObj = new Map([   ['name', 'vinu'], ['surname', 'sonar'], ['age', 15]  ]);
// mapObj.set()

// console.log(mapObj.values());

/////////////////////////////////////////////////////////////////////////////

// const names = new Set(['a', 'b', 'c', 'c'])
// console.log(names.values());
// console.log(names.entries());

/////////////////////////////////////////////////////////////////////////////

const foo = (a, b) => {
    let p = new Promise((res, rej) => {
        if(a + b === 9){
            res(`sum is ${a+b}`)
        }else{
            rej("error adding")
        }
    })
    return p;
}

const p = foo(6, 3);

const successHandler = (sum) => console.log("successHandler >>", sum);
const errorHandler = (err) => console.log("errorHandler >>", err);

p
    .then(successHandler)
    .catch(errorHandler)











