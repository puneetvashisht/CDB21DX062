// es6
const ELIGIBILITY_AGE = 18
// ELIGIBILITY_AGE = 21
console.log(ELIGIBILITY_AGE)


// Default arguments


// function add(x, y=0, z=0){
//     return x + y + z;
// }

// rest operator
function add(...values){
    // console.log(values.length)
    let total = 0;
    values.forEach(function(value){
        total += value;
    })
    return total;

}

console.log(add(1,2,3))
console.log(add(1,2))
console.log(add(2))

console.log(add(1,2,3,5))
console.log(add(1,2,3,5,4,6,7))
// Rest Operator