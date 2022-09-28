//RECAP
let url = "http://localhost:3000/prodotti"


//CREATE - POST - aggiungo un prodotto
async function createProdotto(p) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(p)
    })
    console.log("CREATE", "RESPONSE", response);

    let res = await response.json();
    console.log("CREATE", "RES", res);
}

let nuovoProdotto = {
    name: "NuovoProdotto",
    price: 200
}

// createProdotto(nuovoProdotto)

//RETRIEVE - GET - leggo un prodotto o la lista di prodotti
async function retrieveAllProdotti() {
    let response = await fetch(url)
    console.log("RETRIEVE ALL", "RESPONSE", response);

    let res = await response.json();
    console.log("RETRIEVE ALL", "RES", res);

}
// retrieveAllProdotti();

async function retrieveProdotto(id) {
    let response = await fetch(url + "/" + id)
    console.log("RETRIEVE", "RESPONSE", response);

    let res = await response.json();
    console.log("RETRIEVE", "RES", res);
}
// retrieveProdotto(1)

//UPDATE - PUT - modificare un prodotto
//url -> url della singola risorsa da modificare /prodotti/2
//return -> l'oggetto modificato
let options = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "prodottoTest"
    })
    //Ma spesso per sicurezza conviene inviare l'intero oggetto
}

async function updateProdotto(id, p) {
    let updateUrl = url + "/" + id
    let updateOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(p)
    }

    let response = await fetch(updateUrl, updateOptions)
    console.log("UPDATE", "RESPONSE", response);

    let res = await response.json();
    console.log("UPDATE", "RES", res);

}


//DELETE - DELETE - rimuove un prodotto
//url -> url della singola risorsa da eliminare /prodotti/2
//options -> method: "DELETE"
async function deleteProdotto(id) {
    let deleteUrl = url + "/" +id
    let deleteOptions = {
        method: "DELETE"
    }

    let response = await fetch(deleteUrl, deleteOptions)
    console.log("DELETE", "RESPONSE", response);

    let res = await response.json();
    console.log("DELETE", "RES", res);
}