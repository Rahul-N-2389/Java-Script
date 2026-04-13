

// var x = ()=>{
//     console.log("arrow function");
// }
// x()

// function print(callback){
//     console.log("java is awsome");
//     callback();
// }
// print(function (){
//     console.log("anonymous function ");
// })

/**arrow function is short hand property of anonymous function 
 * then we can write like this
*/

// function print(callback){
//     console.log("java is awsome");
//     console.log(callback()); 
// }

// print(()=>{
//     console.log("anonymous function ");
// })

/**In an arrow function there is a single statement no need of { } */
// print(
    // ()=> console.log("arrow fun")
    // ()=>return "hello world"        // undefined
    // ()=>"hello world"               // hello world
    // ()=>{"hello world"}             //undefined
    // ()=>{return "Rastin Rajputin"}  //Rastin Rajputin
    // ()=>return "Rastin Rajputin"    // error(uncatch)
// )

// function print(callback){
//     callback(10,30)
// }
// print((a,b)=>console.log(a+b)
// )


// function print(callback){
//     callback(10)
// }
// print(a=>console.log(a)   // if we take single parameter no nedd of ()
// )


function print(callback){
    console.log(callback(10,15));
    
}
print((a,b)=>a+b   // if we take single parameter no nedd of ()
)