import React, {useState, useEffect} from 'react'

const CommentList = ({asin}) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1YTVhZGMxYjA2ZjAwMTVjMGJlZWEiLCJpYXQiOjE2NjY1NTczNTgsImV4cCI6MTY2Nzc2Njk1OH0.-9Yujzbc2qkjJOXB9jYmnAA0BKlBGSwmL5zpXNMPUHc"
    const url = "https://striveschool-api.herokuapp.com/api/comments/"
    const [comments,setComments]=useState([]);

    const getComments = async () => { 
        try {
          const response = await fetch(url + asin
          ,{
            headers : { 
                "Authorization": "Bearer " + token,
            }
          }
          )
          const res = response.json();
          console.log(res)
          return res;
        }
        catch (error) {console.log("errore fetch");}
      }
      
  useEffect(
    () => {
      getComments().then((res) => setComments(res));
    }, [])


  return (
    <>
    <div>CommentList</div>
    <div className='container'>
       {
         comments.slice(0, 5).map((comment, index)=> { 
          return(

            <p key = {index}>{comment.comment}</p>
          
          )
         })
        
       }
    </div>
    </>
    
  )
}

export default CommentList