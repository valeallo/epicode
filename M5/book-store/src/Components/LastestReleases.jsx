import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";



const LastestReleases = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch("fantasy.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const res = response.json();
      return res;
    } catch (error) {
      console.log("errore fetch");
    }
  };

  const toggleSelected = () => {
    setSelected(!selected);
    console.log(selected);
  };

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>Lastest Releases:</h1>
      <div className="container">
        {data.slice(0, 12).map((product, index) => {
          return (
            <SingleBook
              key={product.asin}
              product={product}
              toggleSelected={toggleSelected}
            />
          );
        })}
      </div>
    </>
  );
};

export default LastestReleases;
