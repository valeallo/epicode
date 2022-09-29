let url = "https://striveschool-api.herokuapp.com/api/product/";
let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMwN2NhOTQwYWU2YTAwMTU0ZmJiNGQiLCJpYXQiOjE2NjQxMjIwMjYsImV4cCI6MTY2NTMzMTYyNn0.KE1ac056HpuPlBhtTwK5lNWpmII8qeBR1v7VPRFX6VU";


window.onload = async function () {
    let products = await getProducts();
    console.log(products);
    products.forEach((p) => {
        let c = createCard(p)
        document.getElementById("products").appendChild(c)
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

function createCard(object) {
    let column = document.createElement("div");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let name = document.createElement("h6");
    let price = document.createElement("p");
    let description = document.createElement("small");


    column.className = "col-6 col-md-3 col-lg-2 ";
    card.className = "card mb-4 box-shadow";
    cardBody.className = "card-body";
    description.className = "text-muted"
    price.className = "card-text";
    img.classname = "card-img-top";
    name.className = "card-text";


    column.id = "thiscolumn" + object._id;
    img.src = object.imageUrl;
    name.innerHTML = object.name;
    price.innerHTML = object.price + " $";
    description.innerHTML = object.description;



    column.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(name);
    cardBody.appendChild(description);
    cardBody.appendChild(price);


    let pagebutton = generaPaginaButton(object)

    card.appendChild(pagebutton)

    return column;

}



function generaPaginaButton(prod) {
    let paginaButton = document.createElement("button")
    paginaButton.className = "btn btn-sm btn-outline-secondary";
    paginaButton.innerText = "Informazioni"
    paginaButton.addEventListener("click", async () => {
        const myWindow = window.open();
        myWindow.body
        myWindow.document.write(`<head>
                                    <meta charset="utf-8" />
                                    <title></title>
                                    <link rel="stylesheet" href="paginaprod.css">
                                    </head>
                                    <body class="pagina">
                                     <main>
                                          <figure>
                                            <img src="${prod.imageUrl}"/>
                                          </figure>
                                          <div>
                                              <h1>${prod.name}</h1>
                                              <b>${prod.brand}</b>
                                              <p>${prod.description}</p>
                                              <p>${prod.price} $</p>
                                          </div>
                                     </main>
                                  </body>`);

    })
    return paginaButton
}




function apriCaricamento() {
    document.getElementById("caricamento").classList.remove("hidden")
}

function chiudiCaricamento() {
    document.getElementById("caricamento").classList.add("hidden")
}// JavaScript source code
