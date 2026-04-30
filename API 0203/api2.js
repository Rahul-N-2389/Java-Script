/** this is for GET the data from JSON file */

// const URL = "http://localhost:3000/objects"
// let options = {"method":"GET"}
// fetch(URL,options).then(res=>res.json())
// .then(data=>console.log(data))


/** this is for DELETE data from JSON file */
// const URL = "http://localhost:3000/objects"
// let options = {"method":"DELETE"}
// fetch(URL,options).then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);

//     }else{
//         console.log("some thing went wrong");
//     }
// })


/** To add data direct to the JSON file through function  */

/** using   POST 
 * ----------------------
*/
// const URL ="http://localhost:3000/objects"
// let options = {
//     "method":"POST",
//     "headers":{              //object
//         "content-Type":"application/json"
//     },
/**
 * "body": {                 //object
    "id":"4",
    "name":"react",     // we canot pass objects directly to server then we use stringfy 
    "price":"30000"     // so this wrong way just for example to show how we cant pass objects
}  */


//      "body": JSON.stringify({                 //object
//         "id":"4",
//         "name":"react",
//         "price":"30000"
//     } )              
// }
/** stringify :- it is used to convert into String from objects*/

// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);   
//     }else{
//         console.log("some thing went wrong");
//     }
// }).catch(res=>console.log(res))



/**using PUT, CATCH:- To update the object 
 * ------------------------------------------
 */
 
// const URL ="http://localhost:3000/objects/5"
// let options = {
//     "method":"PUT",
//     "headers":{
//         "content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "name":"SQL",
//         "price":"35000"       //change name rect into SQL 
//     })
// }
// fetch(URL,options)
// .then(res=>{
//     if(res.ok){
//         console.log(res.status,res.statusText);  
//     }else{
//         console.log("Some thing went Wrong");
//     }
// })
/** when we use PUT, object will change and also their places will  change
 * ex:- {
        "id": "5",
      "name": "SQL",        //before
      "price": "35000"
    }
       {
      "name": "SQL",
      "price": "35000",   // after
      "id": "5"
    }
  */

// const URL = "http://localhost:3000/objects/4"
// let options = {
//     "method": "PATCH",
//     "headers": {
//         "content-Type": "application/json"
//     },
//     "body": JSON.stringify({
//         "id": "4",
//         "name": "react",
//         "price": "30000"      
//     })
// }
// fetch(URL, options)
//     .then(res => {
//         if (res.ok) {
//             console.log(res.status, res.statusText);
//         } else {
//             console.log("Some thing went Wrong");
//         }
//     })
    /** when we use PATCH what we want to change only that will change 
     * ex:-  "id": "4",
        "name": "react",
        "price": "30000"  

        "id": "4",
        "name": "react",
        "price": "32000"  //only this will change
    */


// const URL = "http://localhost:3000/objects"
// let options = {"method":"GET"}
// fetch(URL,options).then(res=>res.json())
// .then(data=>{
//     for(i=0;i<data.length;i++){
//         console.log(data[i]);     //object
//         console.log(data[i].id);  //id
//         console.log(data[i].name); //name
//     }
// })

