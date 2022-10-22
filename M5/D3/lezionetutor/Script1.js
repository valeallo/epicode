// JavaScript source code
import React, { useState, useEffect, CSSProperties } from 'react';
import BounceLoader from 'react-spinners/ClipLoader';
import './style.css';
import Form from './Form';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState([]);
  const [formData, setFormData] = useState(null);
  console.log(formData)

  const getProductsFromApi = async () => {
    setLoading(true);
    try {
      const products = await fetch('https://dummyjson.com/products');
      setLoading(false);
      return await products.json();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const postUser = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const deleteUser = async () => {
    await fetch ("https://dummyjson.com/products/1", {
      method: "DELETE"
    }).then((res) => res.json())
    .then((res) => console.log(res));
  }


  useEffect(() => {
    getProductsFromApi().then((res) => setProductData(res));
  }, []);

  return (
    <>
      <form onSubmit={postUser}>
        <input
          type="text"
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <input
          type="text"
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <input
          type="text"
          onChange={(e) =>
            setFormData({
              ...formData,
              images: e.target.value,
            })
          }
        />
        <button type="submit">INVIA</button>
      </form>
      <div className="buttons">
        <button onClick={()=> deleteUser()}>DELETE user</button>
      </div>
      <div className="buttons"></div>
      <div className="container">
        {loading && <BounceLoader color="#ff8200" />}
        {productData &&
          !loading &&
          !error &&
          productData?.products?.map((product, i) => {
            return (
              <div key={i} className="card">
                <div className="card-header">
                  <img src={product.images[0]} alt="rover" />
                </div>
                <div className="card-body">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}