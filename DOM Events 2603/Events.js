
// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")


// btn1.onclick=()=>{                           
//         document.body.style.background="red"
//         btn2.remove()                        // when we click on the btn1, btn2 will be removed
// }
// btn2.onclick=()=>{
//         // document.body.style.background="black"
//         btn1.remove()                        // when we click on the btn2, btn1 will be removed

// }
//   1) how to perform  2)performed fun
// btn1.addEventListener(type, callback)     //It used to loads DOM content first 



/** To fetch Data while click on the button in dynamic way */

let globalData = []
btn1.addEventListener("click", async () => {      // we can take arrow fun as async fun
    // console.log("welcome to dark wed");
    let res = await fetch("https://fakestoreapi.com/products")
    globalData = await res.json()
    // console.log(data);
    getData(globalData)

})
function getData(data) {
    let container = document.getElementsByClassName("container")[0]
    container.innerHTML = ""

    data.forEach((obj, index) => {               // in arrow fun there are two paramenters 1 for elements another for index
        let p = document.createElement("p")
        p.innerHTML =
            `
        <h2> ID :${obj.id}</h2>
        <h3> title : ${obj.title}</h3>
        <img src="${obj.image}">
        <button>Delete</button>
        `
        let delbtn1 = p.querySelector("button")
        // let delbtn1 = document.getElementById(`delbtn${index}`)
        delbtn1.onclick = () => {
            // console.log(index);
            globalData.splice(index, 1)
            getData(globalData)
            // console.log(arrS);
        }
        container.append(p)
    });
}





/** chatGPT
 * --------
*/
// let globalData = []

// btn1.addEventListener("click", async () => {
//     let res = await fetch("https://fakestoreapi.com/products")
//     globalData = await res.json()
//     getData(globalData)
// })

// function getData(data) {
//     let container = document.getElementsByClassName("container")[0]
//     container.innerHTML = ""   // clear old data

//     data.forEach((obj, index) => {
//         let div = document.createElement("div")

//         div.innerHTML = `
//         <h2>ID : ${obj.id}</h2>
//         <h3>Title : ${obj.title}</h3>
//         <img src="${obj.image}" width="100">
//         <button>Delete</button>
//         `

//         let delBtn = div.querySelector("button")

//         delBtn.onclick = () => {
//             // 🔴 remove from array
//             globalData.splice(index, 1)

//             // 🔄 re-render
//             getData(globalData)
//         }

//         container.append(div)
//     })
// }