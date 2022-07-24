// JavaScript source code


//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x + "<>" + y);


//22) Crea un oggetto con le seguenti proprietà: name, surname, email
let person = {
    name: "Jack",
    surname: "Black",
    email: "jackblack@email.it"
}


//23) Cancella la proprietà email dall'oggetto appena creato
delete person.email;


//24) Crea un array contenente 10 stringhe
let first_array = ["ciao", "come", "ti", "chiami", "io", "sono", "Valentina", "e", "ho", "sonno"];

//25) Mostra in console ogni stringa del precedente array
for (let i = 0; i < first_array.length; i++) {
    console.log(first_array[i]);
}


//26) Crea un array contenente 100 numeri random

let random = [];
for (let i = 0; i < 100; i++) {
    let randnum = Math.floor(Math.random() * 100);
    random.push(randnum);
}

//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
function find_max_min() {
 let min = Math.min(...random);
 let max = Math.max(...random);
  console.log(min);
   console.log(max);
}

//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
let big_array = [["arr_zero"], ["arr_one"], ["arr_two"], ["arr_three"], ["arr_four"]]

for (let i = 0; i < big_array.length; i++) {
    for (let d = 0; d < 10; d++) {
        big_array[i][d] = Math.floor(Math.random() * 10)
    }
}
console.log(big_array);

//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
function longer_array(array1, array2) {
    if (array1.length > array2.length) {
        return array1;
    }
    else if (array2.length > array1.length) {
        return array2;
    }
    else {
        console.log("sono uguali")
    }
}
let n_array = [1, 2, 3, 4, 5]

//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

function sum(array) {
    let total_sum = 0;
    for (let i = 0; i < array.length; i++) {
        total_sum += array[i];
    }
    return total_sum;
}

function array_bigger_count(array1, array2) {

    if (sum(array1) > sum(array2)) {
        return array1;
    }
    else if (sum(array2) > sum(array1)) {
        return array2;
    }
    else {
        console.log("i due array sono uguali");
    }

}


//31) Seleziona l'elemento con id "container" nella pagina
let container = document.getElementById("container");

//32) Seleziona tutti gli elementi di tipo < td > nella pagina
let td = document.getElementsByTagName("td");

//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento < td > nella pagina
function print_in_console() {
    for (let el of td) {
        console.log(el.innerHTML);
    }

}
//34) Scrivi una funzione per cambiare il titolo della pagina

function change_title(newTitle) {
    document.getElementsByTagName("title")[0].innerHTML = newTitle;

}
