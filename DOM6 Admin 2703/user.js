
let container = document.createElement("div")
async function fetchData() {
    let res = await fetch("http://localhost:3000/Objects")
    let data = await res.json()
    data.forEach(obj => {
        let p = document.createElement("p")
        p.innerHTML=`
        <h1> id : ${obj.id}</h1>
       <h1> name : ${obj.name}</h1>
        <img src="${obj.image}" width = "100px">
        `
        container.appendChild(p)
    });
}
document.addEventListener("DOMContentLoaded",fetchData)
document.body.append(container)