
// function print(a,b){
//     try {
//         if(b==0){
//             console.log("Zero not allowed"); 
//         }
//         else{
//             console.log(a/b);
//         }
//     } 
//     catch (error) {
//         console.log(error);
//     }
//     console.log("fun stoped");  // in java it is not allowed only in js allowed to print
// }
// print(10,20)


// function print(a, b) {
//     try {
//         throw new Error("Some thing went wrong");

//     }
//     catch (error) {
//         // console.log(error);  // this is object so we have to print message we use .message
//         // console.log(error.message);  // but it showing like a message but we need it like error in red alert type so we use .error
//         console.error(error.message);
//     }
//     // console.log("fun stoped");
// }
// print(10, 20)


/**
 * Async and await
 * ------------------------
 * 
 * await is used inside an async function to pause the execution until a Promise is resolved.    
👉 It makes asynchronous code look like synchronous code (clean and readable).
 */

// function print(){
//     return new Promise((resolve,reject)=>{
//         resolve("success")
//         reject(" failure")
//     })
// }
// console.log(print())
// print().then(res=>console.log(res)).catch(res=>console.log(res))



// async function print(){   
//     return "Hello js world"
// }
// console.log(print().then(res=>console.log(res)))     //async always return promise object

// async function display() {
//     let res = await "welcome to js world"   //await is like a object so we need to store this in a variable
//     console.log(res)
// }
// console.log(display());

// const URL= "http://localhost:3000/objects"  
// let option = {"method":"GET"}                 // get data by using promises
// fetch(URL,option).then(res=>res.json())
// .then(res=>console.log(res))

// const URL= "http://localhost:3000/objects"
// async function display() {                       //get data by using async and await 
//     let res = await fetch(URL);
//     let data = await res.json();
//     console.log(data);
// }
// display()

const URL= "http://localhost:3000/objects"
async function display() {
    let res = await fetch("http://localhost:3000/objects")
    try {
        if(!res.ok){
            throw new Error("Some thing went wrong")
        }
        
        let data = await res.json()
        console.log(data);
    }
     catch (error) {
       console.log(error.message);
        
    }
}
display()


