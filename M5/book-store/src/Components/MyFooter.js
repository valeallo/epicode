import React from "react";

// Crea un componente di nome MyFooter, che renderizzerà un footer per l’applicazione.
const MyFooter = () => {
    const year = new Date().getFullYear();
  
    return <footer >{`Copyright Valentina${year}`}</footer>;
  };
  
  export default MyFooter;
