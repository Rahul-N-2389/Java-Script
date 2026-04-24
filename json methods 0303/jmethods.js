/**  json methods
 * ----------------
 * GET
 * DELETE
 * PUT
 * PATCH
 * POST
 * DELETEALL
 * POSTALL
 * 
 * today about  DELETEALL, POSTALL
 * ----------------------------------
 */

// const URL = "http://localhost:3000/movies"
// let options = { "method": "GET" }
// fetch(URL, options)
//     .then(res => res.json())
//     .then(data => {
//         for (i = 0; i < data.length; i++) {
//             fetch(`http://localhost:3000/movies/${data[i].id}`, { "method": "DELETE" })  // to delete all data at a time we use like this
//                 .then(res => {
//                     if (res.ok) {
//                         console.log("Deleted", res.status, res.statusText)
//                     } else {
//                         console.log("not deleted")
//                     }
//                 }).catch(res => console.log(res))
//         }
//     })


// let data=[
//     {
//         "id":"1",
//         "name":"Rajesh"
//     },
//     {
//         "id":"2",
//         "name":"anvesh"
//     },
//     {
//         "id":"3",
//         "name":"avesh"
//     },
// ]

// let options={
//     "method":"POST",
//     "headers":{
//         "Content-type":"application/json"
//     }
// }
// for(i=0;i<data.length;i++){
//     // console.log(data[i]);
//     let obj=data[i];
//     options.body=JSON.stringify(obj)
//     fetch("http://localhost:3000/movies",options)
//     .then(res=>{
//         if(res.ok){
//             console.log("Posted",res.status,res.statusText)
//         }else{
//             console.log("Data not posted");
            
//         }
//     })
    
// }