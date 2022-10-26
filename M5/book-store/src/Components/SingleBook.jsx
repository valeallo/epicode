import React, { useState } from "react";
import CommentSection from "./CommentSection";

// . Crea un componente CommentArea e incorporalo nel componente SingleBook. Quando un utente clicca su un SingleBook,
// il componente CommentArea deve venire renderizzato (suggerimento: puoi usare l’operatore &&).

const SingleBook = ({ product, toggleSelected }) => {
  const [isSelected, setSelected] = useState(false);
  const toggleClass = () => {
    setSelected(!isSelected);
  };

  return (
    <div
      id={product.asin}
      style={{ width: "40rem" }}
      className={isSelected ? "selected d-flex flex-col" : "d-flex flex-col"}
      onClick={() => {
        toggleClass();
      }}
    >
      <div className="d-flex flex-row">
        <img style={{ width: "5rem", margin: "1rem" }} src={product.img} />
        <div>
          <h5>{product.title}</h5>
          <p>{product.category}</p>
        </div>
      </div>
      {isSelected && <div>
        <CommentSection product={product}/>
      </div>}
    </div>
  );
};

export default SingleBook;
