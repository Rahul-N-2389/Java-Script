function Converter(){
    let input = document.getElementById("input").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    showvalue(input,from,to);
}

const url = 'https://v6.exchangerate-api.com/v6/0c2db1270d011e8d9f858737/latest/${from}';
async function showvalue(input,from,to) {

        const result = await response.json();
        console.log(result);
        const res = result.conversion_rates;
        
        // showdata(amount);
    
    
}