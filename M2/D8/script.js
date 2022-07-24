
//ESERCIZI JAVASCRIPT

//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
//22) Crea un oggetto con le seguenti proprietà: name, surname, email
//23) Cancella la proprietà email dall'oggetto appena creato
//24) Crea un array contenente 10 stringhe
//25) Mostra in console ogni stringa del precedente array
//26) Crea un array contenente 100 numeri random
//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore


//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x + "<>" + y)

let person = {
    name: "Jack",
    surname: "Black",
    email: "jackblack@email.it"
}
delete person.email;



let first_array = ["ciao", "come", "ti", "chiami", "io", "sono", "Valentina", "e", "ho", "sonno"];
for (let i = 0; i < first_array.length; i++) {
    console.log(first_array[i]);
}


let random = [];
for (let i = 0; i < 100; i++) {
    let randnum = Math.floor(Math.random() * 100);
    random.push(randnum);
}

function find_max_min (random){
    Math.min(...random);
    Math.max(...random);
}


let big_array = [];

let i = 0
 while (i < 10) {
    let array,[i] = [];
    for (let d = 0; d < 10; d++) {
        let random_number = Math.floor(Math.random() * 100);
        array[i].push(random_number);
     }
     big_array.push(array[i]);
     i++
}


function longer_array(array1, array2) {
    if (arra1.length > array2.length) {
        return array1;
    }
    else {
        return array2;
    }
}

function sum(array) {
    let total_sum = 0;
    for (let i = 0; i < array.length; i++) {
        total_sum += array[i];
    }
    return total_sum;
}

function array_bigger_count(array1, array2) {
    if (total_sum(array1) > total_sum(array2)) {
        return array1;
    }
    else if (total_sum(array2) > total_sum(array1)) {
        return array2;
    }
    else {
        console.log("i due array sono uguali");
    }

}

//ESERCIZI SUL DOM

//31) Seleziona l'elemento con id "container" nella pagina
//32) Seleziona tutti gli elementi di tipo < td > nella pagina
//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento < td > nella pagina
//34) Scrivi una funzione per cambiare il titolo della pagina
//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina------
//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi-------
//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
//40) Scrivi una funzione per svuotare una lista nella pagina


let container = document.getElementById("container");

let td = document.getElementsByTagName("td");

function print_in_console() {
    for (let el of td) {
        console.log(el);
    }

}


function change_title (newTitle){
    document.getElementsByTagName(title)[0].innerHTML = newTitle;

}


function add_class_test() {
    document.getElementsByTagName("tr").classList.add("test");
}

function add_background() {
    let a = document.getElementsByTagName("a")
    for (el of a) {
        el.style.backgroundColor = "red";
    }
}

function page_loaded() {

}

function add_to_ul(list_element) {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(list_element));
    ul.appendChild(li);
}


//function empty_list() {
//    let ordered_list = document.getElementByTagName("ol")[0];
//    let items = document.querySelectorAll("ol li");
//    for (let i = 0; i)
//}