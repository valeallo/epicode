// JavaScript source code
let url = "https://striveschool-api.herokuapp.com/api/product/";
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMwN2NhOTQwYWU2YTAwMTU0ZmJiNGQiLCJpYXQiOjE2NjQxMjIwMjYsImV4cCI6MTY2NTMzMTYyNn0.KE1ac056HpuPlBhtTwK5lNWpmII8qeBR1v7VPRFX6VU";

window.onload = async function () {
    let products = await getProducts();
    console.log(products);
    products.forEach((p) => {
        let t = createTr(p)
        document.getElementById("products").appendChild(t)
    })

    document.getElementById("createForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        let prodotto = {
            name: e.target[0].value,
            description: e.target[1].value,
            brand: e.target[2].value,
            imageUrl: e.target[3].value,
            price: e.target[4].value
        }
        let nuovoProdotto = await createProdotto(prodotto)
        let t = createTr(nuovoProdotto)
        document.getElementById("products").appendChild(t)
    })
}




async function getProducts() {
    apriCaricamento()
    let response = await fetch(url,
        {
            headers: {
                "content-type": "application/json",
                "Authorization": token

            }
        });
    let res = response.json();
    chiudiCaricamento()
    return res;
}

function createTr(prod) {
    let tr = document.createElement("div");
    tr.className = "d-flex flex-row justify-content-around prodTr"
    tr.id = "prod" + prod._id
    let name = document.createElement("div");
    let description = document.createElement("div");
    let brand = document.createElement("div");
    let imageUrl = document.createElement("div");
    let image = document.createElement("img");
    image.classList.add("image");
    imageUrl.appendChild(image)
    let price = document.createElement("div");

    name.id = "name";
    description.id = "description";
    brand.id = "brand";
    price.id = "price";


    name.innerHTML = "<b>" + prod.name + "</b>";
    description.innerHTML = prod.description;
    brand.innerHTML = prod.brand;
    image.src = prod.imageUrl;
    price.innerHTML = prod.price + "$";


    tr.appendChild(imageUrl)
    tr.appendChild(name)
    tr.appendChild(description)
    tr.appendChild(brand)
    tr.appendChild(price)

    let deleteButton = generaDeleteButton(prod._id)
    let updateButton = generaUpdateButton(prod)

    tr.appendChild(deleteButton)
    tr.appendChild(updateButton)

    return tr
}


async function createProdotto(p) {
    apriCaricamento()
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": token

        },
        body: JSON.stringify(p)
    })

    let res = await response.json();
    chiudiCaricamento()
    return res

}






async function deleteProduct(id) {
    apriCaricamento()
    let deleteUrl = url + id;
    let deleteOptions = {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            "Authorization": token
        },
    }
    let response = await fetch(deleteUrl, deleteOptions);
    let res = await response.json();
    chiudiCaricamento()
    if (response.status == 200) return true
    return false
}



function generaDeleteButton(id) {
    let deleteButton = document.createElement("button")
    deleteButton.className = "btn btn-outline-danger"
    deleteButton.innerText = "Elimina"
    deleteButton.addEventListener("click", async () => {
        if (confirm("Confermare l'eliminazione?")) {
            if (await deleteProduct(id)) {
                let cardToDelete = document.getElementById("prod" + id);
                cardToDelete.remove();
            }
        }
    })

    return deleteButton
}



async function updateProdotto(id, prod) {
    apriCaricamento();
    let updateUrl = url + id;
    let updateOptions = {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(prod)
    }

    let response = await fetch(updateUrl, updateOptions);
    let res = await response.json();
    chiudiCaricamento();
    return res

}


function generaUpdateButton(prod) {
    let updateButton = document.createElement("button")
    updateButton.className = "btn btn-outline-success"
    updateButton.innerText = "Modifica"
    updateButton.addEventListener("click", () => {
        let updateForm = document.getElementById("updateForm")
        let modificaButton = document.getElementById("modificaButton")
        updateForm[0].value = prod.name
        updateForm[1].value = prod.description
        updateForm[2].value = prod.brand
        updateForm[3].value = prod.imageUrl
        updateForm[4].value = prod.price
        updateForm.addEventListener("submit", (e) => { e.preventDefault(); updatebutton(prod._id); })
        updateForm.classList.remove("hidden")
    })
    return updateButton;
}




async function updatebutton(id) {

    let updateForm = document.getElementById("updateForm")
    if (confirm("Sei sicuro di voler modificare il prodotto?")) {
        let prodotto = {
            name: updateForm[0].value,
            description: updateForm[1].value,
            brand: updateForm[2].value,
            imageUrl: updateForm[3].value,
            price: updateForm[4].value
        }
        console.log(prodotto)
        let prodottoModificato = await updateProdotto(id, prodotto)
        let cardDaModificare = document.getElementById("prod" + id)
        cardDaModificare.getElementsById("name").innerText = e.target[0].value
        cardDaModificare.getElementsById("description").innerText = e.target[1].value
        cardDaModificare.getElementsById("brand").innerText = e.target[1].value
        cardDaModificare.getElementsByTagName("img").src = e.target[3].value
        cardDaModificare.getElementsById("price").innerText = e.target[4].value
    }
}







function apriCaricamento() {
    document.getElementById("caricamento").classList.remove("hidden")
}

function chiudiCaricamento() {
    document.getElementById("caricamento").classList.add("hidden")
}