
async function fetchData() {
    let res = await fetch("http://localhost:3000/Objects")
    try {
        if (!res.ok) {
            throw new Error("Something went Wrong");


        } else {
            let data = await res.json()
            console.log(data);
            showData(data)
        }
    } catch (error) {
        console.log(error);
    }
}
async function showData(data) {
    let container = document.getElementsByClassName("container")[0]
    data.forEach(player => {
        let item = document.createElement("div")
        item.innerHTML = `
        <h2>ID : ${player.id} </h2>
        <h2>NAME : ${player.name} </h2>
        <img src="${player.image}" width=200px><br>
        <button id='delbtn${player.id}'>Delete</button>
        <button id='edbtn${player.id}'>Edit</button>
        `
        container.appendChild(item)
        let delbtn = document.getElementById(`delbtn${player.id}`)


        delbtn.onclick = () => {
            let res = fetch(`http://localhost:3000/Objects/${player.id}`)
            // let data = res.json()
            console.log(player.id);
            deleteData(player.id)
        }


        let edbtn = document.getElementById(`edbtn${player.id}`)
        edbtn.onclick = () => {
            console.log(player.id);
            editData(player.id)
        }
    });


    //Deleting Data
    async function deleteData(id) {
        let res = await fetch(`http://localhost:3000/Objects/${id}`, { "method": "DELETE" })
        let data = await res.json()
        if (res.ok) {
            alert("Data Deleted successfully")
        } else {
            alert("Something went wrong in deletion")
        }
    }

    //Editing the data
    async function editData(id) {
        let playerId = document.getElementById("id")
        let playerName = document.getElementById("name")
        let playerImage = document.getElementById("image")

        let res = await fetch(`http://localhost:3000/Objects/${id}`)
        let data = await res.json()
        // console.log(data);
        
        playerId.value = data.id
        playerName.value = data.name
        playerImage.value = data.image



    }
    document.body.appendChild(container)
}


//save the data 

async function saveData() {
    console.log("called");
   let playerId = document.getElementById("id").value
        let playerName = document.getElementById("name").value
        let playerImage = document.getElementById("image").value

// for next id number
        let finalNum = playerId
        if(!playerId){
            let res = await fetch("http://localhost:3000/Objects")
            let data = await res.json()
            let lastNum = 0
            data.forEach(obj => {
                currentNum = Number(obj.id)
                if(currentNum>lastNum){
                    lastNum=currentNum
                }
            }); 
            finalNum=String(lastNum+1)
        }

        let obj = {
            "id":finalNum,
            "name":playerName,
            "image":playerImage
        }
        let studentMethod= playerId?"PATCH":"POST"
        let res = await fetch(`http://localhost:3000/Objects${playerId}`
            , {
            method: studentMethod,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }
    )
    let data = await res.json()
    // console.log(data);
    if(res.ok){
        !playerId?alert("data added successfully"):alert("data added successfully")
    }
 
  

}
document.addEventListener("DOMContentLoaded", fetchData)