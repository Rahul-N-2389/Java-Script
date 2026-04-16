

// let promise = new Promise((resolve,reject)=>{
//     // resolve("success")
//     reject("failure")
// })
// promise.then((res)=>console.log(res)).catch((res)=>console.error(res))  //error object
// promise.then((res)=>console.log(res)).catch((res)=>console.error(res.message))// undefined
// promise.then((res)=>console.log(res)).catch((res)=>console.warn(res))  //warning 
// promise.then((res)=>console.log(res)).catch((res)=>console.log(res))


/**to get data from API we have fetch method */
// console.log(fetch());

/** whenever we wanty get or push data into API we need to get or push data with JSON format */
// const URL ="https://fakestoreapi.com/products"
// fetch(URL).then((res)=>{console.log(res);     
// })
 
/** whileprint this we get respose obj in that obj we have status 
 * then status = 200-299   // good no mistakes
 *      status = 400-499 // client error
 *      status = 500-599   //server error */


//  const URL ="https://fakestoreapi.com/products"
// fetch(URL).then((res)=>{
//     return res.json()    // response object is converted into JSON, here return promise obj
// }).then((data)=>console.log(data) )


//short hand 
// const URL="https://fakestoreapi.com/products"
// fetch(URL).then(res=>res.json()).then(resgit1=>console.log(res1))
//              arrow return implicit


//to iterate maultiple values in an array
const URL="https://fakestoreapi.com/products"
fetch(URL).then(res=>res.json()).then(res1=>{
    for(i=0;i<res1.length;i++){
        console.log(res1[i]);
        console.log(res1[i].category);
        console.log(res1[i].title);
        
    }
})
