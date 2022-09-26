location.href = "dettagliProdotto.html?id=2" //possimao aggiungere variabili all'url dopo ? con la sitassi key=value&key2=value2

//In dettagliProdotto.html nello script
const query = window.location.search
const params = new URLSearchParams(query)
let id = params.get("id")