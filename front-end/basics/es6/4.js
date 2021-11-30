// function add(x,y){
//     return x + y;
// }

// const add = function(x,y){
//     return x + y;
// }

// const add = (x,y)=> x+y;



const add = (...values) => {
    let total = 0;
    values.forEach((value)=> total += value)
    return total;
}

console.log(add(2,3))