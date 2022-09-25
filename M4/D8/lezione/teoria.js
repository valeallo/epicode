let url = "";


//CREATE; POST aggiungo un prodotto

let nuovoProdotto = {
    name: "Prodotto3",
    price: 200

}


async function createProdotto(p)
{
fetch(url, {
    method: "POST",
    headers: {
        "content-type": "application/json"

    },
    body: JSON.stringify(p)
})

console.log ("CREATE", "RESPONSE", response);
let res = await response.json();
console.log ("CREATE", "RES", res);

}



//RETRIEVE - GET - leggo un prodotto o la lista di prodotti

async function retrieveAllProdotti (){
    let response = await fetch(url);
    console.log ("RETRIEVE ALL", "RESPONSE", response);
    let res = await response.json();
    console.log ("RETRIEVE ALL", "RES", res);

}

async function retrieveProdotto(id){
    let response = await fetch(url + '/'+ id);
}

// UPDATE- PUT- modificare un prodotto
// url -> url della risorsa da modificare
//optins:
    let options = {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify()
    //nel body vanno solo le proprietà da modificare ma spesso per sicurezza conviene inviare l'intero oggetto
}
// return sarà l'oggetto modificato
 
async function updateprodotto (id, p){
    let updateUrl = url + id;
    let updateOptions = {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
}

    let response = await fetch(updateUrl, updateOptions);
    console.log ("UPDATE", "RESPONSE", response);
    let res = await response.json();
    console.log ("UPDATE", "RES", res);
   
}
//DELETE

     
async function deleteProdotto (id){
    let deleteUrl = url + id;
    let deleteOptions = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    },
}
    let response = await fetch(deleteUrl, deleteOptions);
    console.log ("DELETE", "RESPONSE", response);
    let res = await response.json();
    console.log ("DELETE", "RES", res);
    
}
