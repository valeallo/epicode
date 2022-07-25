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

//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina
function add_row(text0 = "default", text1 = "default", text2 = "default", text3 = "default", text4 = "default") {
    let table = document.getElementById("myTable");
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    let cell4 = row.insertCell(4);
    cell0.innerHTML = text0;
    cell1.innerHTML = text1;
    cell2.innerHTML = text2;
    cell3.innerHTML = text3;
    cell4.innerHTML = text4;
}
//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
function add_class_test() {
    let tr = document.getElementsByTagName("tr")
    for (let el of tr) {
        el.classList.add("test");
    }
}

//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina

function add_background() {
    let a = document.getElementsByTagName("a")
    for (el of a) {
        el.style.backgroundColor = "red";
    }
}
//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi

window.addEventListener("load", function () {
    console.log("page loaded");

})


//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
function add_to_ul(list_element) {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(list_element));
    ul.appendChild(li);
}



//40) Scrivi una funzione per svuotare una lista nella pagina


function empty_list() {
    let myList = document.getElementById("ordered_list");
    let items = document.querySelectorAll("#ordered_list li");
    for (let i = 0; i < items.length; i++) {
        myList.removeChild(items[i]);
    }
}

//EXTRAS 
//41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href
document.getElementsByTagName("a")[0].addEventListener("mouseover", () => {
    alert(document.getElementsByTagName("a")[0].href)
})


//42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
function hide(element) {
    element.classList.toggle("hidden");//ho messo toggle perché mi pare più bellino far scomparire e riapparire ma all'inizio avevo messo add
}
let deletePicsBtn = document.createElement("button");
deletePicsBtn.innerHTML = "Delete Pics";
document.body.appendChild(deletePicsBtn);

deletePicsBtn.onclick = function () {
    let imgs = document.getElementsByTagName("img");
    for (let el of imgs) {
        hide(el);
    }
}
//43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina

let table = document.getElementById("myTable");
let deleteTableBtn = document.createElement("button");
deleteTableBtn.innerHTML = "Toggle Table";
document.body.appendChild(deleteTableBtn);

deleteTableBtn.onclick = function () {
    hide(table);
};


//44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella(se il contenuto è un numero)
let tds = document.getElementsByTagName("td");

function count_cells() {
    let total = 0;
    for (let i = 0; i < tds.length; i++) {
        let td_content = parseInt(tds[i].innerHTML);
       
        if (isNaN(td_content) == false) {
            total += td_content;
        }
        else {
            continue;
        }
    }
    return total;
}

//45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra
document.getElementById("titoloH1").addEventListener("click", () => {
    let titolo = document.getElementById("titoloH1").innerHTML;
    document.getElementById("titoloH1").innerHTML = titolo.slice(0, - 1);
    
})



//46) Aggiungi un event listener in modo che cliccando un < td > nella pagina, questo cambi colore di sfondo
for (let el of tds) {
    el.addEventListener("click", () => {
        let randomColorRed = Math.floor(Math.random() * 256);
        let randomColorGreen = Math.floor(Math.random() * 256);
        let randomColorBlue = Math.floor(Math.random() * 256);
        el.setAttribute("style", "background-color: rgb(" + randomColorRed + "," + randomColorGreen + "," + randomColorBlue + ")");});
}


//47) Aggiungi un bottone che una volta cliccato elimini un < td > a caso nella tabella
let deleteTd = document.createElement("button");
deleteTd.innerHTML = "Delete Td";
document.body.appendChild(deleteTd);
deleteTd.addEventListener("click", () => {
    let randTd = Math.floor(Math.random() * (tds.length + 1));
    let e = document.getElementsByTagName("td")[randTd];
    e.remove();

})


//48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra
let pinkTd = document.getElementById("change_color")
pinkTd.addEventListener("mouseover", () => {
    pinkTd.style.borderColor = "pink";
})


//49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina

function createTable() {

}

//50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina
function deleteTable() {}