//Il sito dare accesso via interfaccia alle funzionalità CRUD
//1 - leggere i prodotti e visualizzarli
//2 - poter creare un nuovo prodotto
//3 - poter eliminare un prodotto
//4 - poter modificare un prodotto
//Attenzione - se modifico/elimino/aggiungo un prodotto questo deve essere visibile correttamente nell'interfaccia

let url = ""
let cards = []

window.onload = async function () {
    //Specifichiamo tutto quello che deve essere eseguito all'avvio

    //leggiamo i prodotti
    let prodotti = await getProdotti();
    //per ogni prodotto creo una card e la inserisco nel documento
    prodotti.forEach((p) => {
        let c = creaCard(p)
        document.getElementById("prodotti").appendChild(c)
    })

    //Impostiamo il form create
    //Osserviamo l'evento submit del form - NON il click del pulsante
    document.getElementById("createForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        //Ogni funzione passata a un eventListener di submit deve iniziare con questo comando per evitare il redirect automatico del form
        // console.log(e.target); //form
        /*
        let prodotto = {}
        let data = new FormData(e.target)
        data.forEach((value, key)=>{
            // prodotto.name==prodotto["name"]
            //key -> name degli input
            //value -> value degli input
            prodotto[key] = value
        })
        */
        let prodotto = {
            name: e.target[0].value,
            price: e.target[1].value
        }
        // console.log(prodotto);
        let nuovoProdotto = await createProdotto(prodotto)

        let nuovaCard = creaCard(nuovoProdotto)
        document.getElementById("prodotti").appendChild(nuovaCard)
    })


    document.getElementById("updateForm").addEventListener("submit", async (e)=>{
        e.preventDefault()
        if(confirm("Sei sicuro di voler modificare il prodotto?")) {
            let prodotto = {
                name: e.target[1].value,
                price: e.target[2].value
            }
            let prodottoModificato = await updateProdotto(e.target[0].value, prodotto)
            let cardDaModificare = cards.find(c=>c.id == e.target[0].value)
            cardDaModificare.element.getElementsByTagName("b").innerText = e.target[2].value + "€"
        }
    })

}


//1 - lettura dei prodotti
async function getProdotti() {
    apriCaricamento()
    // return fetch(url+"/prodotti").then(res=>res.json()).then(res=>{
    //     chiudiCaricamento()
    // }).catch(err=>{console.log(err);chiudiCaricamento()})
    let response = await fetch(url + "/prodotti")
    let res = await response.json()
    chiudiCaricamento()
    return res
}

//2 - creazione nuovo prodotto
async function createProdotto(p) {
    apriCaricamento()
    try {
        let response = await fetch(url + "/prodotti", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(p)
        })
        let res = await response.json()
    } catch(err) {
        //FEEDBACK UTENTE ERRORE
        console.log(err);
        document.getElementById("msgError").innerText = "Creazione fallita"
        document.getElementById("errore").classList.remove("hidden")
    }
    chiudiCaricamento()
    return res
}

//3 - delete prodotto
async function deleteProdotto(id) {
    apriCaricamento()
    let response = await fetch(url + "/prodotti/" + id, {
        method: "DELETE"
    })
    chiudiCaricamento()
    if(response.status == 200) return true
    return false
    //il delete da {} come risultato, non serve allo script il return
}

//4 - update prodotto
async function updateProdotto(id, prod) {
    let response = await fetch(url + "/prodotti/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(prod)
    })
    let res = await response.json()

    return res
}


//Creare la card
function creaCard(prod) {
    let card = document.createElement("div")
    card.classList.add("card")
    let prodTitle = document.createElement("h4")
    prodTitle.innerText = prod.name
    let prodPrice = document.createElement("b")
    prodPrice.innerText = prod.price + "€"

    let deleteButton = generaDeleteButton(prod.id)
    let updateButton = generaUpdateButton(prod)
    
    
    
    card.appendChild(prodTitle)
    card.appendChild(prodPrice)
    card.appendChild(deleteButton)
    card.appendChild(updateButton)

    cards.push({
        id: prod._id,
        element: card
    })

    return card
}

function generaDeleteButton(id) {
    let deleteButton = document.createElement("button")
    deleteButton.style.background = "red"
    deleteButton.innerText = "Elimina"
    //NON posso passare una funzione con parametri all'eventListener
    //Posso creare una funzione senza parametri che esegua la funzione parametrica e passare quella come callback
    // deleteButton.addEventListener("click", eventListenerDelete)
    // function eventListenerDelete() {
    //     deleteProdotto(prod.id)
    // }
    //Ma se non ho molti event listener nella funzoine conviene usare una funzione anonima/freccia
    deleteButton.addEventListener("click", async ()=>{
        if(confirm("Confermare l'eliminazione?")){
            if(await deleteProdotto(id)){
                //l'indice di una card non è detto che corrisponda all'id del prodotto eliminato
                let cardToDelete = cards.find((c)=>{
                    return c.id == id
                })
                cardToDelete.element.remove()
            }
        }
    })

    return deleteButton
}
function generaUpdateButton(prod) {
    let updateButton = document.createElement("button")
    updateButton.style.background = "green"
    updateButton.innerText = "Modifica"
    updateButton.addEventListener("click", ()=>{
        let updateForm = document.getElementById("updateForm")
        updateForm[0].value = prod.id
        updateForm[1].value = prod.name
        updateForm[2].value = prod.price
        updateForm.classList.remove("hidden")
    })

    return updateButton
}

//CARICAMENTO
function apriCaricamento() {
    // document.getElementById("prodotti").innerHTML = "Caricamento..."
    document.getElementById("caricamento").classList.remove("hidden")
}

function chiudiCaricamento() {
    // document.getElementById("prodotti").innerHTML = ""
    document.getElementById("caricamento").classList.add("hidden")
    
}