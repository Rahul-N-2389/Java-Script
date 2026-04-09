



// function one(callback){
//     console.log("hello there ");
//     callback()
// }
// function two(){
//     console.log("how are you");
// }
// one(two)  // here passing with fun def




// function one(callback){
//     console.log("hello there ");
//     callback()
// }

// one(function two(){                 // here directly passing code as def instead of fun def
//     console.log("how are you");
// })
// two()


// function x(callback1, callback2){
//     console.log("x function");
//     callback1()
//     callback2()
// }
// function y (){
//     console.log("y function");
// }
// function z (){
//     console.log("z function");
// }
// x(y,z)





// function x(callback1, callback2){
//     console.log("x function");
//     console.log(callback1(10,20));
    
//     callback2()
// }
// function y (a,b){
//     console.log("y function");
//     return a+b
// }
// function z (){
//     console.log("z function");
// }
// x(y,z)