import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright Valentina${year}`}</footer>;
  };
  
  export default Footer;
