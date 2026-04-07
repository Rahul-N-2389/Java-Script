// function sum(val, callback){
//     callback(val+10)
    
//     sub(20,a=>console.log("sub : "+a))
// }


// function sub(val, callback){
//     callback(val-5)
    
//     mul(10,a=>console.log("mul : "+a))
// }

// function mul(val, callback){
//     callback(val*2)
    
//     div(5,a=>console.log("div : "+a))
// }

// function div(val, callback){
//     callback(val/2)

// }
//     sum(10,(a)=>console.log("sum : "+a))


// console.log("start");
// setTimeout(()=>{
//     console.log("first call");
    
// },5000);
// for(i=0; i<=50000;i++){
//     console.log("i");
    
// }
// setTimeout(()=>{
//     console.log("second call")
    
// },3000);



function orderplace(callback){
    callback("order successful");
    dispatch((disres)=>{console.log(disres)});
}
function dispatch(callback){
    callback("dispatch successful");
    shipping((shipres)=>{console.log(shipres)});
}
function shipping(callback){
    callback("shipping successful");
    deliver((delres)=>{console.log(delres)});
}
function deliver(callback){
    callback("deliverd successful");
}

orderplace((orres)=>{console.log(orres)});

