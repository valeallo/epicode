//Non possiamo usare dati ottenuti da esecuzioni asincrone nel flow del codice sincrono
//Quindi usiamo le Promise per "impacchettare" un'esecuzione asincrona e poterla assegnare a una variabile (Oggetto classe Promise)
//Sulle Promises possiamo applicare il metodo .then() e .catch() per indicare preventivamente quali esecuzioni seguire al termine dell'esecuzione asincrona (usando i dati risultato)

let p = fetch("") //creiamo la promise
p.then((res) => { //eseguiamo il then
    //callback -> cosa fare una volta finita l'eseciuzione interna alla promise
})

//Siccome spesso delle esecuzioni asincrone possono avere all'interno altri scope (altre esecuzioni asincrono, concatenazione di then, eventListener, forEach, ) si rischia di avere un codice molto disorganizzato 
fetch().then((res) => {
    return res.json()
}).then((res) => {
    //
})

fetch().then((res) => {
    res.json().then((res) => {
        res.forEach((el) => {
            let button = document.createElement("button")
            button.innerText = res.text
            button.addEventListener("click", () => {

            })
        })
    })
})

//Per rendere più organizzata un'esecuzione asincrona possiamo impostare i vari comandi dentro a una funzione asincrona (ASYNC) in modo "sincrono" sfruttando la keyword AWAIT per indicare al codice di attendere l'esecuzione asincrona prima di passare al successivo comando

//1 - specificare async per poter usare await
async function f() {
    //2 - Sostiutiamo ogni operazione seguita da un .then con unn await, in questo caso il risultato dell'esecuzione asincrona non sarà una Promise la il risultato della funzione interna alla Promise
    //let p = fetch() //QUESTO RESTITUISCE UNA PROMISE
    let res = await fetch() //QUESTO RESTITUISCE IL RISULTATO DELL'ESECUZIONE
    //p = res.json() //restituisce PROMISE
    res = await res.json() //restituisce l'oggetto
    res.forEach(
        (el) => {
            let button = document.createElement("button")
            button.innerText = res.text
            button.addEventListener("click", () => {})
        }
    )
}

// function g(succ, err){}
// let p = new Promise(g);

//ATTENZIONE - eseguire f() nel flow principale comunque avvierà l'esecuzione dentro una Promise (una funzione async restituisce una Promise che la impacchetta) e quindi nnon possiamo considerare f come una funzinoe normale, non possiamo comqunue usare i dati ottenuti in f nel flow

let x = 10
g().then((res) => {
    console.log("THEN", res)
}) //qua parte un'esecuzione asincrona, il codice dopo verrà eseguito immediatamente
console.log("FINE SCRIPT", x)

async function g() {
    console.log("INIZIO G", x);
    x = await new Promise((succ, err) => {
        setTimeout(() => {
            succ(500)
        }, 100)
    })
    console.log("FINE G", x);
    return 999 //questo return sarà letto dal then come res -> g().then((res)=>{})
}


//!!!!!!
let risultato = g() //QUESTO NON È 999 ma una PROMISE
risultato.then((res) => {
    //res == 999
})


//NON POSSIAMO USARE AWAIT NEL FLOW PRINCIPALE
// let res = await fetch("")

//Noi però spesso usiamo il fetch come primo comando dello script per popolare il sito con i dati

//Le funzioni assegnate a window.onload verranno eseguite quando tutto l'html ha caricato (e le risorse(css, js, img) sono state scaricate) e di conseguenza dopo tutti gli script
window.onload = () => {
    console.log("WINDOW CARICATA")
}

//possiamo impostare a window.onload con una funzione asincrona in cui specificare comodamente cosa fare all'avvio
window.onload = async () => {
    console.log("ASYNC ONLOAD INIZIATO")
    let res = await fetch("http://jsonplaceholder.typicode.com/users")
    console.log("FETCH", res);
    res = await res.json()
    console.log("JSON", res);
    res.forEach(el => {
        console.log(el)
    })
    console.log("ASYNC ONLOAD FINITO")
}


//Se però il fetch dovesse fallire dove troviamo l'errore senza .catch()?
//In questo caso l'errore non è gestito dal metodo delle Promise .catch() ma dal costruttio try{}catch(){} come si farebbe con qualunque esecuzione sincrona

fetch("").then(res => res.json()).then(res => {
    console.log("RES", res)
}).catch(err => {
    console.warn("ERR", err)
})

async function h() {
    try {
        let res = await fetch("1235213553")//1 -qua viene generato un errore, le esecuzioni interne al try successive saranno saltate
        res = await res.json()
        console.log("RES", res)
    } catch(e) {
        console.warn("ERR", e)//2 - verrà quindi eseguito il catch
    }
    console.log("FINE H")//3 - si va avanti dopo al try
}