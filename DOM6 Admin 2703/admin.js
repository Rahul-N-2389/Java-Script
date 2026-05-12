

// async function fetchData() {
//     let res = await fetch("http://localhost:3000/Objects")
//     try {
//         if (!res.ok) {
//             throw new Error("Something went wrong");
//         }
//         let data = await res.json()
//         // console.log(data);
//         showdata(data)

//     } catch (error) {
//         console.log("error");

//     }
// }
// function showdata(data) {
//     let container = document.getElementById("container")
//     let item = document.createElement("div")
//     // let arr =data.map((obj)=>{             // map method we get new array objects
//     item.innerHTML = data.map((obj) => {
//         return `
//         <p> ID : ${obj.id}<p>
//         <p> NAME : ${obj.name}<p>
//         <img src="${obj.image}" width="200px">
//         <button id='delbtn${obj.id}'>Delete</button>
//       `
//     }).join("")           // we mention direct to the obj instead of taking new variable
//     // console.log(arr.join(""));     // to overcome map array objects we use join, it arrange in String format
//     container.append(item)
//     data.forEach(obj => {
//         let delbtn = document.getElementById(`delbtn${obj.id}`)
//         delbtn.onclick = () => {
//             // console.log(obj.id);
//             deleteData(obj.id)
//         }
//     });
// }
//  async function deleteData(id){
//     // console.log(id);
//     let res = await fetch(`http://localhost:3000/Objects/${id}`,{"method":"DELETE"})
//    if(res.ok){
//             alert("deleted success")
//         }else{
//             console.log("not Deleted");
//         }
// }

// document.addEventListener("DOMContentLoaded", fetchData)


/** Practice 
 * ----------
 * 
 * fetch data
 */
async function fetchData() {
    let res = await fetch("http://localhost:3000/Objects")
    let data = await res.json()
    console.log(data);

    showData(data)

}
/** Data getting in UI*/

function showData(data) {
    let container = document.getElementById("container")
    let div = document.createElement("div")
    div.innerHTML = data.map((obj) => {
        return `
    <p>ID : ${obj.id}</p>
    <p>NAME : ${obj.name}</p>
    <img src = "${obj.image}" width = "200px"><br>
    <button id='delbtn${obj.id}'>Delete</button>
     <button id='edbtn${obj.id}'>Edit</button>
    `
    }).join("")

    container.appendChild(div)

    /**delete Button Function */

    data.forEach(obj => {
        let delbtn = document.getElementById(`delbtn${obj.id}`)
        let edbtn = document.getElementById(`edbtn${obj.id}`)
        delbtn.onclick = () => {
            // console.log(obj.id);
            deleteData(obj.id)
        }

        /**edit Button Function */

        edbtn.onclick = () => {
            // console.log(obj.id);
            editData(obj.id)
        }
    });
}
/** Data Delete */

async function deleteData(id) {
    let res = await fetch(`http://localhost:3000/Objects/${id}`, { "method": "DELETE" })
    // let data = res.json()
    if (res.ok) {
        alert("Data deleted")
    } else {
        alert("not deleted")
    }
}

/** Data Edit */
async function editData(id) {
    let ninjaId = document.getElementById("id")
    let ninjaName = document.getElementById("name")
    let ninjaImage = document.getElementById("image")

    let res = await fetch(`http://localhost:3000/Objects/${id}`)  // data get by id when we click on edit button
    let data = await res.json()

    ninjaId.value = data.id        // id value assign to input field from json data to inout feild
    ninjaName.value = data.name     // name value assign to input field from json data to inout feild
    ninjaImage.value = data.image   // image value assign to input field from json data to inout feild
}
async function saveData() {
    let ninjaId = document.getElementById("id").value;        // get input feild value 
    let ninjaName = document.getElementById("name").value;
    let ninjaImage = document.getElementById("image").value;


    // let finalId = ninjaId;

    // // IF ADDING NEW DATA
    // if (!ninjaId) {

    //     // get all existing data
    //     let res = await fetch("http://localhost:3000/Objects");
    //     let data = await res.json();

    //     // get highest id
    //     let lastId = 0;

    //     data.forEach(obj => {
    //         let currentId = Number(obj.id);

    //         if (currentId > lastId) {
    //             lastId = currentId;
    //         }
    //     });

    //     finalId = String(lastId + 1);
// }
    let finalId = ninjaId
    if(!ninjaId){
        let res = await fetch("http://localhost:3000/Objects")
        let data = await res.json()

        let lastId = 0
        data.forEach(obj => {
            currentId = Number(obj.id)
            if(currentId>lastId){
                lastId= currentId
            }
        });
        finalId= String(lastId+1)
    }

    let obj = {
        "id": finalId,
        "name": ninjaName,     // asingning input feild value to json obj
        "image": ninjaImage
    }
    let stMethod = ninjaId ? "PATCH" : "POST"
    let URL = ninjaId ? `http://localhost:3000/Objects/${ninjaId}` : "http://localhost:3000/Objects"

    let res = await fetch(URL, {
        "method": stMethod,
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(obj)  //asign obj
    })
    let data = await res.json()
    if (res.ok) {
        alert("Data updated")
    } else {
        alert("not Updated")
    }

}
document.addEventListener("DOMContentLoaded", fetchData)