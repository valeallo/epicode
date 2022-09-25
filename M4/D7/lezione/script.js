//REQUEST
/*
- url -> l'indirizzo dell'api da contattare -> REST la risorsa da manipolare
- method -> GET, POST, PATCH, DELETE, PUT, EDIT, ... va usato quello richiesto dall'API -> REST il tipo di interazione da effettuare sulla risorsa

- headers -> Informazioni aggiuntive per far leggere correttamente la request
- body -> dati da inviare nella request
*/

//REST - CRUD
/* DATI PER FETCH: METHOD - URL - Headers - Body
 - Create - POST  - url della tabella - Content-Type - JSON dell'oggetto da aggiungere
 - Read - GET - url della risorsa (tabella o singolo) - ? - ?
 - Update - PATCH - url della singola risorsa - Content-Type - JSON delle modifiche
 - Delete - DELETE - url della singola risorsa (anche della tabella ma elimineremmo tutto) - ? - ?

*/

//Chiamata http - CRUD
/*
let url = "https://reqres.in/api/users"; //l'indirizzo da contattare
url = "/api/users" //la tabella users
url = "/api/users/4" //l'elemento singolo della tabella users con id 4

let data = {
    nome: "Prova"
}

let options = {
    method: "GET", //METHOD - stringa
    headers:{ //Informazioni aggiuntive sulla request - stringhe
        "Content-type": "application/json", //Il tipo di contenuto nel body (Json)
        "Accept": "application/json", //per ora non serve
        "Authorization": "Bearer ......" //per login - per ora non serve
    },
    //il body contiene i dati da inviare
    body: JSON.stringify(data) //Bisogna inviare stringhe, il più delle volte vorremo convertire variabili con JSON.stringify()
}
fetch(url, options).then(res => res.json()).then(res => {})
*/


//READ
//tabella di risorsa
async function readUtenti(){
    let url = "https://reqres.in/api/users"
    let options = {
        method: "GET" //Di default è GET -> non serve impostare le options al fetch
    }

    let response = await fetch(url)
    console.log("GET RESPONSE", response)
    let data = await response.json()
    console.log("GET DATA", data) //Array con lista risorse e possibili altre informazioni aggiuntive
}
//singola risorsa
async function readUtente(id) {
    let url = `https://reqres.in/api/users/${id}`

    let response = await fetch(url)
    console.log("GET RESPONSE", response)
    let data = await response.json()
    console.log("GET DATA", data) //Oggetto con i dati della singola risorsa e possibili altre informazioni aggiuntive
}


//CREATE
//il dato da inviare deve essere un oggetto con le proprietà chiamate come sono usate nel backend (come ci dice l'API)
let u = {
    name: "morpheus",
    job: "leader"
}
async function createUser(u){
    let url = "https://reqres.in/api/users" //Se l'indirizzo non è la tabella ma la singola risorsa il più delle volte avremo un errore 404
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(u)
    }

    let response = await fetch(url, options)
    console.log("GET RESPONSE", response)
    let data = await response.json()
    console.log("GET DATA", data) //L'oggetto appena creato, avrà i dati che abbiamo inserito nel body più i dati che ottiene automaticamente al momento della creazione
}



fetch("http://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify({name: "test"})
}).then(res=>res.json()).then(res=>{
    console.log(res)
})

async function post() {
    let response = await fetch("http://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: "test"})})
    let data = await response.json()
}
// async function postShorter() {
//     let data = await (await fetch("http://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({name: "test"})})).json()
// }