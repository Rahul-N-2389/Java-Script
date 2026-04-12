/**
 * example of anonymous function
 */

// function print(callback){
//     console.log("named function");
//     callback() 
// }


/**To store in a variable to ovcercome the syntax */


// var x = function (){
//     console.log("anonymous function"); 
// }
// print(x);                                 // 1 st process

/** or we can pass as a callback */


// print( function (){                      //2 nd process we can give fun def  directly as parameter
//     console.log("anonymous function");
    
// })


// function x (callback){
//     callback()
//     console.log("this is named function");
// }

// x(function(a,b){
//     console.log("this anonymous function");
//     console.log(a+b);
// })


function sum (callback1,callback2){
    console.log("this is named function");
    return callback1(10,20)+callback2(30,40)
}
var output = sum(
    function (a,b){
        return a+b
    },
    function (a,b){
        return a+b
    }
)
console.log(output);



/** A function which is stored in variable is called "First class Function" */

// var code = function print(){
//     console.log("Welcome back");
// }
// code();

// without function name (anonymous function)


// var code = function (){
//     console.log("Welcome back");
// }
// code();



/**   A function which is passing a parameter as callback is known as "Higher order function" */

/**   A function which not passing callback to the parameter is known as "lower order function" */