/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let number1 = 1;
let number2 = 2;

if (number1 > number2) {
    console.log("il primo numero è più grande");
}
else {console.log ("Il secondo numero è più grande") }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
if (number1 != 5) { console.log("not equal") }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (number1 % 5 == 0) { console.log("divisible by 5") } else { console.log("not divisible by 5") }



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

if (number1 == 8 || number2 == 8 || number1 - number2 == 8 || number2 - number1 == 8 || number1 + number2 == 8) { console.log("Yes 8") } else {console.log("no 8")}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let conto = 50;

if (conto < 50) {
    let totale = conto + 10;
    console.log("totale:" + totale);
}
else {
    console.log("totale:"+ conto)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let blackfridayconto = conto - (conto / 100 * 20);

if (conto < 50) {

    let totale = blackfridayconto + 10;
    console.log("totale:" + totale);
}
else {
    console.log("totale:" + blackfridayconto)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 >= num2) {
    if (num1 >= num3) {
        if (num2 >= num3) {
            console.log(num1 + num2 + num3)
        }
        else {
            console.log(num1 + num3 + num2)
        }
    }
    else {
        console.log(num3 + num1 + num2)
    }
}
else {
    if (num2 >= num3) {
        if (num1 >= num3) {
            console.log(num2 + num1 + num3)
        }
        else {
            console.log(num2 + num3 + num1)
        }
    }
    else {
        console.log(num3 + num2 + num1)
    }


}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let m = 7;

if (typeof (m) == number && m % 1 == 0) {
    console.log("m è intero")
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let n = 8;
if (n % 2 == 0) {
    console.log("è un numero pari")
}
else { console.log("è dispari o non è un intero")}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let num = 5;
if (num >= 20) {
    console.log("Huge");
}
else {
    if (num >= 15) {
        console.log("Large")
    }
    else {
        if (num >= 10) {
            console.log("Medium")
        }
        else {
            if (num >= 5) {
                console.log("Small")
            }
            else {
                console.log("Tiny")
            }
        }

    }
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
let isMale = true;
let gender = isMale ? Male : False;



/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/
let x = 0;
while (x <= 5) {
    console.log(x);
    x++;
}


/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for (i = 0; i <= 10; i++) {
    console.log(i);
}
/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
for (i = 0; i <= 10; i++) {
    console.log(i);
    if (i === 3 || i === 8) {
        continue;
    }
}


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
for (i = 0; i <= 15; i++) {
    console.log(i);
    if (i % 2 == 0) {
        console.log("is even")
    }
    else {
        console.log("is uneven")
    }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
        continue;
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {

        console.log(i)
    }

}


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 1;
let week = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
