

/**
 * Dom in js :
 * ----------
 * getElemtById           // get atribute id created by statically
 * getElementByClassName  //get atribute class created by statically
 */
// let div = document.getElementById("container")
// // console.log(div);

// // let div = document.getElementsByClassName("container")[0]
// // console.log(div[0]);

// let arr = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
// arr.forEach(obj => {
//     let p = document.createElement("p")
//     p.innerHTML = `
//         <h2>Id:${obj.id}</h2>
//     `
//     div.append(p)     
// })   // no need to append to body because already it is taken from statically written code in html


// async function fetchdata() {
//     let res = await fetch("http://localhost:3000/Objects")
//     let data = await res.json()
//     // console.log(data);
//     getdata(data)
// }

// function getdata(data) {
//     let container = document.getElementsByClassName("container")[0]
//     data.forEach(element => {
//         // console.log(element);

//         let p = document.createElement("p")
//         p.innerHTML = `
//         <h2> ID : ${element.id}</h2>
//         <h2> Naame : ${element.name},/h2>
//         `
//         container.append(p)
//     });
// }
// fetchdata()

/** get data from fakestore api */
async function api() {                        
    let res = await fetch("https://fakestoreapi.com/products/")
    let data = await res.json()
    console.log(data);
    getdata(data)
    
    
}
api();
function getdata(data){
     let container = document.getElementsByClassName("container")[0]
    data.forEach(element => {
        // console.log(element);

        let p = document.createElement("p")
        p.innerHTML = `
        <h2> ID : ${element.id}</h2>
        <h2> Naame : ${element.category}</h2>
        <img src="${element.image}" >
        `
        container.append(p)
    });

}



