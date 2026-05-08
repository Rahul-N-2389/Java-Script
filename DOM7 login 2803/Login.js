
//get all data

async function getUserData() {
    try {
        let res = await fetch("http://localhost:4000/Users")
        let data = await res.json()
        console.log(data);


    } catch (error) {
        console.log(error);
    }

}
getUserData()

//get single Data

async function getSingleUser() {
    let res = await fetch(`http://localhost:4000/Users/1`)
    let data = await res.json()
    console.log(data);

}
getSingleUser()

let username = document.getElementById("UserName")
let email = document.getElementById("Email")
let password = document.getElementById("Password")
let sbmbtn = document.getElementById("sbmBtn")
sbmbtn.onclick = async function (event) {
    // event.preventDefault()  //when click on btn it can't refresh 
    console.log("clicked");  // checking pursose
    try {
        // console.log(username.value);
        // console.log(email.value);
        // console.log(password.value);

        //To creatre Data into object
        const newUser = {
            uname: username.value,
            mail: email.value,
            pword: password.value
        }
        // console.log(newUser);        // checking pursose


        //post new data into JSON
        let res = await fetch("http://localhost:4000/Users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        let data = await res.json()
        // console.log(data);
        if (res.ok) {
            console.log("Data registerd Successfully");

        }

    } catch (error) {
        console.log(error);
    }
}

//Data update fun
async function updateUser() {
    try {
        let res = await fetch("http://localhost:4000/Users/2", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "UserName": "PainObito",
                "Email": "PainObito@gmail.com",
                "password": "Pain420"
            })
        })
        if(res.ok){
            console.log("data Updated");
            
        }else{
            console.log("uder not found");
            
        }
    } catch (error) {
        console.log(error);
    }
}
// updateUser()
async function deleteUser() {
    try {
        let res = await fetch("http://localhost:4000/Users/2",{
            method:"DELETE"
        })
        if(res.ok){
            console.log("deleted");
            
        }else{
            console.log("user not found");
            
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}
deleteUser()