let randomNames = [
    "Cathy",
    "Gwen Stacy",
    "Ana De Armas",
    "Rossy",
    "Saddy Sink",
    "millie Bobby",
    "Emma Watson",
    "Nancy",
    "Tokyo"
]


function findpair(){
    let name = document.getElementById("name").value;
    let nickname = document.getElementById("nickname");

    if(name === ""){
        document.getElementById("output").innerHTML = 
        `
        <h2>${name} and ${randomNames} 
        `
    }

}
