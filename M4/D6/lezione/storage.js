//localStorage - sessionStorage
//permettono di salvare dei dati nel browser per essere usati successivamente, anche dopo aver chiuso, ricaricato o riaperta la nostra pagina

//localStorage e sessionStorage sono due oggetti di classe Storage già istanziati (come document, window, console, ...)

//I metodi si applicano agli oggeti Storage
//.setItem(key, value) -> crea una "variabile" da salvare localmente
//key - il nome della "variabile" che vogliamo salvare
//value - stringa del valore della "variabile"
//RETURN -> non restituisce nulla (undefined)
//.getItem(key) -> leggere dallo Storage una "variabile"
//key - il nome della "variabile" che vogliamo leggere
//RETURN -> restituisce il valore della "variabile" se presente in stringa, altrimenti restituisce null

// localStorage.setItem("nome", "Flavio");
// sessionStorage

let nome = localStorage.getItem("nome");

console.log(nome);


//.removeItem(key) -> rimuove dallo Storage la "variabile"
//key - il nome della "variabile" che vogliamo eliminare
//RETURN -> non restituisce nulla (undefined)
// localStorage.removeItem("nome")

//localStorage salva le variabili senza scadenza finchè non si riavvia il computer * si preferisce il localStorage

//sessionStorage salva le variabili senza scadenze finchè non si chiude il browser

//cookies - sono dati salvati in memoria persistente fino alla loro scadenza

//ES
// let logbutton = document.getElementById("logbutton")

// logbutton.addEventListener("click", login)

// function login() {
//     let input = document.getElementById("nomeInput")
//     document.getElementsByTagName("h1")[0].innerText = "Benvenuto " + input.value + "!"

//     input.remove()

//     logbutton.remove()


//     logbutton = document.createElement("button")
//     logbutton.id = "logbutton"
//     logbutton.innerText = "Logout"

//     document.body.appendChild(logbutton)

//     logbutton.addEventListener("click", logout)

// }

// function logout() {
//     logbutton.remove()
//     logbutton = document.createElement("button")
//     logbutton.id = "logbutton"
//     logbutton.innerText = "Login"

//     let input = document.createElement("input")
//     input.id = "nomeInput"

//     document.getElementsByTagName("h1")[0].innerText = "Effettua il login"

//     document.body.appendChild(input)
//     document.body.appendChild(logbutton)

//     logbutton.addEventListener("click", login)
// }


let logbutton = document.getElementById("logbutton")

let NomeLogin = localStorage.getItem("NomeLogin")

if (NomeLogin) {
    //Abbiamo un nome già salvato
    document.getElementsByTagName("h1")[0].innerText = "Benvenuto " + NomeLogin + "!"
    loginUI();
} else {
    logbutton.addEventListener("click", login)
}


function login() {
    let input = document.getElementById("nomeInput")
    document.getElementsByTagName("h1")[0].innerText = "Benvenuto " + input.value + "!"

    localStorage.setItem("NomeLogin", input.value)

    loginUI();
}

function logout() {
    logbutton.remove()
    logbutton = document.createElement("button")
    logbutton.id = "logbutton"
    logbutton.innerText = "Login"

    let input = document.createElement("input")
    input.id = "nomeInput"

    document.getElementsByTagName("h1")[0].innerText = "Effettua il login"

    document.body.appendChild(input)
    document.body.appendChild(logbutton)


    localStorage.removeItem("NomeLogin")

    logbutton.addEventListener("click", login)
}


function loginUI() {
    let input = document.getElementById("nomeInput")

    input.remove()

    logbutton.remove()



    logbutton = document.createElement("button")
    logbutton.id = "logbutton"
    logbutton.innerText = "Logout"

    document.body.appendChild(logbutton)

    logbutton.addEventListener("click", logout)
}

// 

let variabileStorage = localStorage.getItem("nomeVariabile")
if (variabileStorage) {
    //cosa fare quando il dato è gia presente (facciamo saltare degli step all'utente)
} else {
    //cosa fare al primo avvio o se non c'è il dato (potrebbe essere stato rimosso - logout o il pc è stato riavviato)
}
//da qualche parte dovranno esserci setItem e removeItem

//I dati salvati negli storage sono soltato STRINGHE, possiamo però sfruttare JSON.stringify(obj) che ci da un stringa JSON sa partire da un oggetto JS. In questo modo possiamo salvarci dati complessi in localStorage e rileggerli successivamente e riconvertirli a oggetti JS usando JSON.parse(string)

function loginUser() {
    let nome = document.getElementById("nome").value
    let cognome = document.getElementById("cognome").value

    let user = {
        nome: nome,
        cognome: cognome
    }

    localStorage.setItem("User", JSON.stringify(user))
}