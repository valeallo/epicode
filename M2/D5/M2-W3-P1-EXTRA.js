// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

function checkArray(array) {
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        if (array[i] > 5) {
            console.log(true);
            sum += array[i];
        }
        else {
            console.log(false);
        }
        return sum;
    }
}


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/
let shoppingCart = [
    {
        item_id: 1,
        name: 'ball',
        price: 9,
        quantity: '6',
    },
    {
        item_id: 2,
        name: 'spoons',
        price: 7,
        quantity: '10',
    },
    {
        item_id: 3,
        name: 'pen',
        price: 30,
        quantity: '5',
    },
    {
        item_id: 4,
        name: 'bowl',
        price: 15,
        quantity: '1',
    }
]

function shoppingCartTotal(shoppingCart) {
    totalprice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
         totalprice += shoppingCart[i].price;
    }
    return totalprice;
}

shoppingCartTotal(shoppingCart);
/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/
let newObJ = {
    item_id: 5,
    name: 'bow',
    price: 15,
    quantity: '4',
}
function addToShoppingCart(obj) {
    shoppingCart.push(obj);
}
addToShoppingCart(newObJ);

console.log(shoppingCart);
/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(shoppingCart) {
    prices = [];
    for (let i = 0; i < shoppingCart.length; i++) {
        prices.push(shoppingCart[i].price);
    }
    return Math.max(...prices);
}



/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/
function lastestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
}
console.log(lastestShoppingCart(shoppingCart));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/
function loopUntil(x) {
    if (x > 0 & x <= 9) {
        let i = 0;
        while (i < 3) {
            let y = Math.floor(Math.random() * 10);
            if (y > x) {
                console.log(y);
                i++;
            }
        }
    }
    else { console.log("inserisci un umero tra 0 e 9")}
}

/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/
function average(array) {
    let sum = 0;
    let dividendo = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == NaN) {
            continue;
        }
        else {
            sum += array[i];
            dividendo++;
        }
    }
    let average = sum / dividendo;
    return average;
   
}

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/
function longest(array) {
    for (i = 0; i < array.length; i++) {
        array[i].lenght
    }
}


/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/
function isSpam(emailContent) {
    if (emailContent.includes("SPAM" || "SCAM")){
        return false;
    }
    else {
        return true;
    }
}

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
function matrixGenerator(x, y) {

}

