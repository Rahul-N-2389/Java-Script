// console.log("hi");
// console.log(" hello there where are others");


// let i = 0;
// if (i==0){
//     console.log(" given data is false");
// }else{
//     console.log(" given data is true");
    
// }


/**
 * function func_name (){  function...
 * // statements 
 * }
 * 
 * 
 * fun_name();      //function calling
 *
 *  **/

// function getApple(){

//     console.log(" where is apple");
//     console.log(" apple is the store");
// }

// function putApple(){
//     console.log(" we have take apple from the store");
//     console.log(" then we can eat apple");
    
// }
// console.log(getApple);  // here we get out put as code
// console.log(putApple);// function...
// getApple(); // here we get output as we given print statements
// putApple(); // function calling....

// function sum(num1, num2){
//     return num1+num2;
// }

// console.log("sum of numbers : "+sum(10,20));


function getString(name){

    console.log(name.toUpperCase());
}
getString("neha");


function demo(name){
    console.log(name);
}

demo(undefined);


function checkArray(array) {
    if (array.length === 0) {
        console.log("Array is empty");
    } else {
        console.log("Array is not empty");
    }
}
checkArray([]);
checkArray([1],[2],[3]);

function diff(num1, num2){
    return num1-num2;
}

let result = diff(20, 10);
console.log(" difference : "+result);


function data(name, age){
    return  `Hello, ${name}! You are ${age} years old.`;
}

console.log(data("neha",21));

function oddeven(num){

    
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(oddeven(13));

