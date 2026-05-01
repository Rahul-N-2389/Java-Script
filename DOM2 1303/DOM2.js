
/**innerText  vs innerHTML
 * -------------------------
 */
// let div1 = document.createElement("div")
// div1.innerText = "Enjoy the little things"
// div1.innerText = "<i> Enjoy the little things</i>"
// div1.innerText = "<i style = 'color:red;'> Enjoy the little things</i>"  //In innerText there is applied of tags and style, all tags and styles are  directly take it as text
// console.log(div1);

// let div2 = document.createElement("div")
// div2.innerHTML = "Enjoy the little things"
// div2.innerHTML = "<i> Enjoy the little things</i>"
// div2.innerHTML = "<i style = 'color:red;'> Enjoy the little things</i>"// In innerHTML all tags are applied and style also applied and give new text 
// console.log(div2);

// /**appendChild vs append
//  * --------------------
//  */
// document.body.appendChild(div1)  // when we have one paramenter we use appendChild
// document.body.append(div1, div2) //when we have more than one paramenter we use append
// document.body.append(div1,"javaScript",div2)  // it also accept String value 

/**To create atributes dynamically
 * -----------------------------
 */
// let div = document.createElement("div")
// div.id="one"
// div.className= "container"
// console.log(div);
// //            attribute  value
// div.setAttribute("name","hii")
// console.log(div);


// let arr = ["surya","karthi","dev","nani"]
// let div = document.createElement("div")

// arr.forEach(ele=>{                          //iterate by using forEach
//     let p =document.createElement("p")
//     p.innerHTML=ele
//     div.appendChild(p)
// }) 
// document.body.appendChild(div)  
// console.log(div);


// for(i=0;i<arr.length;i++){             //iterate by using for loop
//     let p = document.createElement("p")
//     p.innerHTML=arr[i]
//     console.log(p.innerHTML);
//     div.appendChild(p)  
// }
// document.body.appendChild(div)

// for(let data of arr){                   //by using forof  
//     let p = document.createElement("p")
//     p.innerHTML=data
//     div.appendChild(p)
// }
// document.body.appendChild(div)


// let i=0
// while( i<arr.length){
//     let p = document.createElement("p")
//     p.innerHTML=arr[i]
//     div.appendChild(p)
//     i++
// }
// document.body.appendChild(div)

// for(let data in arr){                       //by using forin
//     let p = document.createElement("p")
//     // p.innerHTML=data  // if we give like this we get index value
//     p.innerHTML=arr[data]
//     div.appendChild(p)
// }
// document.body.appendChild(div)


// let data = [
//     { id: 1, name: "Rahul", age: 22 },
//     { id: 2, name: "Anvesh", age: 23 },
//     { id: 3, name: "Karthi", age: 24 },
//     { id: 4, name: "Surya", age: 25 },
//     { id: 5, name: "Nani", age: 21 },
//     { id: 6, name: "Dev", age: 26 },
//     { id: 7, name: "Arjun", age: 22 },
//     { id: 8, name: "Ravi", age: 23 },
//     { id: 9, name: "Vikram", age: 24 },
//     { id: 10, name: "Kiran", age: 25 }
// ];

// let div = document.createElement("div")
// div.id = "name"
// data.forEach(ele => {
//     // console.log(ele.id,ele.name,ele.age);

//     let p = document.createElement("p")
//     p.innerHTML = ` <h2>id : ${ele.id} </h2>
//                      <h2> name : ${ele.name}  </h2> 
//                     <h2> age : ${ele.age} </h2>`
//     div.appendChild(p)
// })
// document.body.appendChild(div)

/** Create a nav bar by dynamically
 * --------------------------------
 */
let arr = ["home","contacts","projects","about","Help"]
let nav = document.createElement("div")
nav.id="main"
arr.forEach(obj=>{
    let p = document.createElement("p")
    p.innerHTML=`
    <p>${obj}</p>
    `
    nav.appendChild(p)
})
document.body.appendChild(nav)


