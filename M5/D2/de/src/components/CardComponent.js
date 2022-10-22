import React, {useState, useEffect} from 'react'

const CardComponent = () => {

    const[productData, setProductData] = useState([])
  const retrieveInfo = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const res = response.json();
        return res;
    } catch (error){
        console.log("errore fetch")

    }
  }
  useEffect(() => {
    retrieveInfo().then(res => setProductData(res))
  }, 
//   questo è l'array delle dipendenze, voul dire che eseguo solo una volta
  [])
   
  
  
    return (
    <div>
        <div>
            {productData.products?.map((product) =>{
                console.log(product)
                return (
                    <div>
                        <div>
                            <img src={product.images[0]} />
                        </div>
                        <div>
                            {product.title}
                        </div>
                        <div>
                            {product.description}
                        </div>
                    </div>

                )
            })}
        </div>
    </div>
  )
}

export default CardComponent