
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



function sum(val,callback){
    callback(val+10)
}
sum(10,(a)=>{console.log(a)}
)

function sub(val,callback){
    callback(val-5)  
}
sub(20,(a)=>{console.log(a)}
)

function div(val,callback){
    callback(val/2)  
}
div(30,(a)=>{console.log(a)}
)

function mul(val,callback){
    callback(val*7)
}
mul(40,(a)=>{console.log(a)}
)



