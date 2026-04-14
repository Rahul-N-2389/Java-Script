
// function x() {
//     console.log(1);
//     console.log(2);

//     setTimeout(
//         () => console.log(3), 5000
//     )
//     for (i = 0; i <= 1000; i++) {
//         console.log(i);

//     }
//     console.log(4);
// }
// x()
/**output
 * ------
 * 1       (synchronous)
 * 2       (synchronous)
 * 0-1000  (synchronous)
 * 4       (synchronous)
 * 3       (settimeout= Asyncronous)
 * 
 * always 1st preference to syn then only async will executed
 * all asyn are moved into webAPI while executing sync after execution of sync then async are executed
 */


// function print (sum){
//     console.log("Surya...");
//     console.log("Karthi...");
//     setTimeout(()=>console.log(sum+20),5000
//     )
//     console.log("dev..."); 
// }
// print(13);


// function print (sum){
//     console.log("Surya...");
//     console.log("Karthi...");
//     setTimeout(()=>{
//         return (sum+20)       //undefined because function will be removed in callstack
//     },5000
//     )
//     console.log("dev..."); 
// }
// console.log(print(13));

// function print (val,callback){
//     console.log("hello");

//     setTimeout(()=>{
//         callback(val+20)
//     },3000);
//     console.log("there");

// }
// print(10,(a)=>console.log(a)
// )
/** output
 * --------
 * hello
 * there
 * 30
 */


// function sum(val,callback){
//     console.log(val+10);  
// }
// function sub(val,callback){
//     console.log(val-5);  
// }
// function div(val,callback){
//     console.log(val/2);  
// }
// function mul(val,callback){
//     console.log(val*7);  
// }
// sum(10)
// sub(20)
// div(30)
// mul(40)



// function sum(val, callback) {
//     callback(val + 10)
// }
// sum(10,(a)=>{console.log(a)}
// )

// function sub(val, callback) {
//     callback(val - 5)
// }
// sub(20,(a)=>{console.log(a)}
// )

// function div(val, callback) {
//     callback(val / 2)
// }
// div(30,(a)=>{console.log(a)}
// )

// function mul(val, callback) {
//     callback(val * 7)
// }
// mul(40,(a)=>{console.log(a)}
// )



/** callback hell 
 * ---------------
 * execute one by one 
 */
// sum(10,(sumres)=>{
//     console.log(sumres);
//     sub(sumres,(subres)=>{
//         console.log(subres);
//         mul(subres,(mulres)=>{
//             console.log(mulres);
//             div(mulres,(divres)=>{
//                 console.log(divres);

//             })

//         })
//     })
// })

/** depends one on onother */

// function sum(val, callback) {
//     if(false){
//         callback(val + 10)                     
//     }else{
//         console.log("something went wrong");

//     }
// }
// function sub(val, callback) {
//     callback(val - 5)
// }
// function mul(val, callback) {               //  sub,mul,div these all are depends on sum fun
//     callback(val * 7)
// }
// function div(val, callback) {
//     callback(val / 2)
// }


// console.log("Start");               //synchronous
// setTimeout(() => {
//     console.log("First call");     //Asynchronous 
// }, 5000)
// for (i = 0; i <= 50000; i++) {     //synchronous
//     console.log(i);
// }
// setTimeout(()=>{
//     console.log("second call");     //Asynchronous
// },3000)

// Always first priority goes to synchronous then Asynchronous
/** output
 * ---------
 * Start
 * 1-50000
 * first call
 * second call
 * 
 * it depend upon system callstack not about time output will like that
 * 
 * because while completing i value 50000 iterations 5 sec and 3 sec waiting time completed
 * here iteration time greater than setTimeout
 *  then first call will come first second call will come second 
 * instead of 50000 we take 5000 then itewration time is less than setTimeout so now, second call will come first then
 * first call will come second 
 */
// console.log("Start");             //synchronous
// setTimeout(() => {
//     console.log("First call");   //Asynchronous
// }, 5000)
// for (i = 0; i <= 5000; i++) {    //synchronous
//     console.log(i);
// }
// setTimeout(()=>{
//     console.log("second call");  //Asynchronous
// },3000)

/**output
 * -------
 * Start
 * 1-5000
 * second call
 * first call
 */




// function sum(val, callback) {
//     setTimeout(()=>{
//         callback(val + 10)              //we have given dependency so all are executed after sum executed       
//     },3000)   
// }
// function sub(val, callback) {
//     setTimeout(()=>{
//         callback(val - 5)
//     },1000)
// }
// function mul(val, callback) { 
//     callback(val * 7)
// }
// function div(val, callback) {
//     callback(val / 2)
// }

// sum(10,(sumres)=>{
//     console.log(sumres);
//     sub(sumres,(subres)=>{
//         console.log(subres);
//         mul(subres,(mulres)=>{
//             console.log(mulres);
//             div(mulres,(divres)=>{
//                 console.log(divres);

//             })

//         })
//     })
// })



/** callback hell ex2 */
function orderplace(callback) {
callback("orderplaced")

    // if(false){
    //     callback("orderplaced")
    // }else{
    //     console.log("order delayed");
    // }
}
function dispatched(callback) {
    callback("dispatched success")
}
function shipping(callback) {
    callback("shipping success")
}
function deliver(callback) {
    callback("deliver success")
}

orderplace((ordres) => {
    console.log(ordres);
    dispatched((disres) => {
        console.log(disres);
        shipping((shires) => {
            console.log(shires);
            deliver((delres) => {
                console.log(delres);
            })
        })
    })
})

