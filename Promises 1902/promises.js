
/**Syntax
 * -------
 * datatype identifier = new promises(callback)
 */
//                           these parameters are just a name we can take another names also
// let promise = new Promise((resolve, reject) => {
// resolve("success")
// // reject("fail")
// })
// console.log(promise)

//output
// ---------
// we get promise object

//                         success,  failure
// let promise = new Promise((resolve, reject) => {
// resolve("success")
// reject("fail")
// })
// promise.then((res)=>{    //to handle success we use .then
//     console.log(res); 
// })


// let promise = new Promise((resolve, reject) => {
// reject("failure")
// resolve("success")
// })
// promise.then((res)=>{console.log(res)}).catch((res)=>{console.log(res);  //to handle failure we have to take both .then and .catch
// })



//                      1st always success,  2nd always failure
// let promise = new Promise((hello,hi) => {
// hello("failure")
// hi("success")
// })
// promise.then((res)=>{console.log(res)}).catch((res)=>{console.log(res); 
// })

// function x(){
//     return new Promise((resolve,reject)=>{
//         resolve("success")
//     })
// }
// console.log(x);   // we get function definition
// console.log(x());  // we get promise object which is success(resolve)
// console.log();
// x().then((res)=>console.log(res)).catch((res)=>console.log(res))  //get output



// function priority(){
//     console.log(" Synchronous");
//     setTimeout(()=>{console.log("Asynchronous")
//     },3000)
//     let promise = new Promise((resolve,reject)=>{
//         resolve("promises");
//     })
//     promise.then((res)=>console.log(res)).catch((res)=>console.log(res))
// }
// priority()

/** output
 * ---------
 * Synchronous
 * Promises
 * Asynchronous
 * 
 * always 1st priority goes to synchronous then next priority goes to promises
 *  and las priority goes to Asynchronous
 * 
 * promise and srtTimeout both are Asynchronous 
 * but promises (also fetch) are go through micro and 
 * setTimeout (also setTimeinterval) are go through macro
 */


//we can also write like this but it is not muc readability 
// beacause when we mention like this bothe success and failure will get but should get eithewr one output
// so it is not right way 

// Promise.resolve("sucess").then((res)=>console.log(res))
// Promise.reject("failure").catch((res)=>console.log(res))



// function sum(val){
//     return new Promise((reslove,reject)=>{
//         reslove(val+20);
//     })
// }
// function sub(val){
//     return new Promise((reslove,reject)=>{
//         reslove(val-5);
//     })
// }
// function mul(val){
//     return new Promise((reslove,reject)=>{
//         reslove(val*20);
//     })
// }
// function div(val){
//     return new Promise((reslove,reject)=>{
//         reslove(val/2);
//     })
// }
// sum(50).then((res)=>console.log(res))
// sub(50).then((res)=>console.log(res))
// mul(50).then((res)=>console.log(res))
// div(50).then((res)=>console.log(res))


/** Promise chaining
 * -------------------
 */
// sum(50).then((sumres)=>{
//     console.log(sumres);
//     sub(sumres).then((subres)=>{
//         console.log(subres);
//         mul(subres).then((mulres)=>{
//             console.log(mulres);
//             div(mulres).then((divres)=>{
//                 console.log(divres);  
//             })
//         })
//     })
// })


let promise1 = new Promise((reslove, reject) => {
    console.log("promise 1");
    setTimeout(() => {
        reslove("successc 1")
    }, 5000)
})

let promise2 = new Promise((reslove, reject) => {
    console.log("promise 2");
    setTimeout(() => {
        reslove("success 2")
    }, 2000)
})

let promise3 = new Promise((reslove, reject) => {
    console.log("promise 3");
    setTimeout(() => {
        reslove("success 3 ")
    }, 3000)
})
promise1.then((res) => console.log(res))
promise2.then((res) => console.log(res))
promise3.then((res) => console.log(res))

/** output
 * ---------
 *  promise 1
    promise 2
    promise 3
    success 2
    success 3
    successc 1
 */

// promise1.then((res1)=>{
//     console.log(res1);
//     promise2.then((res2)=>{
//         console.log(res2);
//         promise3.then((res3)=>{
//             console.log(res3);
//         })
//     })
// })

