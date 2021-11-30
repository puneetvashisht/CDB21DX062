console.log('starting... ');

// function sync(){
//     console.log('in the sync function');
//     return "success";
// }

// let result = sync();
// console.log(result);
// 1. async using callback functions
// function async(callback){
//     setTimeout(()=>{
//         console.log('in the async function');
//         // return "success";
//         callback("success")
//     }, 5000)  
// }
// async((res)=> console.log(res));


// 2. async using promises
function async(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('in the async function');
            reject("failure")
        }, 5000)  
    }) 
}
async()
.then(res=> console.log(res))
.catch(err=> console.log(err))


console.log('finishing...')