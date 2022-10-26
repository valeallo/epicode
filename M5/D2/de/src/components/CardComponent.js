import React, { useState, useEffect } from "react";

const CardComponent = () => {
  const [productData, setProductData] = useState([]);
  const retrieveInfo = async () => {
    try {
      const response = await fetch("horror.json", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      const res = response.json();
      return res;
    } catch (error) {
      console.log("errore fetch");
    }
  };
  useEffect(
    () => {
      retrieveInfo().then((res) => setProductData(res));
    },
    //   questo è l'array delle dipendenze, voul dire che eseguo solo una volta
    []
  );

  return (
    <div>
      <div>
        {productData.products?.map((product) => {
          console.log(product);
          return (
            <div>
              <div>
                <img src={product.img} alt={product.title}/>
              </div>
              <div>{product.title}</div>
              <div>{product.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
