import React, { useState, useEffect } from "react";

const AddComment = (asin) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1YTVhZGMxYjA2ZjAwMTVjMGJlZWEiLCJpYXQiOjE2NjY1NTczNTgsImV4cCI6MTY2Nzc2Njk1OH0.-9Yujzbc2qkjJOXB9jYmnAA0BKlBGSwmL5zpXNMPUHc";
  const url = "https://striveschool-api.herokuapp.com/api/comments/";

  const [newComment, setComment] = useState(null)

  const postComment = async (e) => {
    e.preventDefault();
    try {
      await fetch(url + asin, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then(console.log);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <form>
      <div>AddComment</div>
      <textarea onChange={(e) =>
      setComment({
          ...comment,
          comment: e.target.value,
      })}></textarea>
      <select onChange={
        (e) => setComment({
          ...comment,
          rate: e.target.value,
        })
      }   name="rating" id="rating">
        <option value="1">1</option>
        <option value="2">2 </option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        type="submit"
       onSubmit={()=> {postComment()}}>Add</button>
        
      
    </form>
  );
};

export default AddComment;
