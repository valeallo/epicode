import React, { useState } from "react";

const Card = ({ post, toggle, setSingle }) => {
  const [formData, setFormData] = useState(null);

  const deleteCard = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCard = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" px-6 flex flex-row   mt-6 mb-6 place-content-center ... ">
        <div className=" text-center w-[50%] border-separate border-spacing-2 border border-slate-400 rounded ...">
          <h4 className="bg-slate-100 text-center text-xl  text-pink-500 font-bold  border border-slate-300 ...">
            Title
          </h4>
          <p className="bg-slate-50 border border-slate-300 text-l">
            {post.title.slice(0, 8)}
          </p>
          <h5 className="bg-slate-100 text-center text-xl  text-pink-500 font-bold 0 border border-slate-300 ...">
            Body
          </h5>
          <p className="bg-slate-50 border border-slate-300 text-l">{`${post.body.slice(
            0,
            40
          )}...`}</p>
          <div className="button">
            <span>
              <button
                onClick={() => [toggle(true), setSingle(post)]}
                className="bg-red-200 w-[100%]  text-xl text-pink-500 font-bold"
              >
                Read All
              </button>
            </span>
            <hr />
            <span>
              <button
                onClick={() => deleteCard()}
                className="bg-red-200 w-[100%]  text-xl text-pink-500 font-bold"
              >
                DELETE POST
              </button>
            </span>
          </div>
          <div className="buttons">
            <form onSubmit={updateCard}>
              <input
                type="text"
                placeholder="title"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="body"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    body: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                className="  text-xl text-pink-500 font-bold"
              >
                POST
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
