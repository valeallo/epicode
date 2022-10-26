import React from 'react'
import AddComment from './AddComment'
import CommentList from './CommentList'

const CommentSection = (product) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1YTVhZGMxYjA2ZjAwMTVjMGJlZWEiLCJpYXQiOjE2NjY1NTczNTgsImV4cCI6MTY2Nzc2Njk1OH0.-9Yujzbc2qkjJOXB9jYmnAA0BKlBGSwmL5zpXNMPUHc"
    const url = "https://striveschool-api.herokuapp.com/api/comments/"
    
    const deleteComment = async () => {
        try {
            await fetch(url + product.product.asin, {
                "Authorization": "Bearer " + token,
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then(console.log)
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
        <CommentList asin={product.product.asin}/>
        <AddComment   asin={product.product.asin}/>

    </div>
  )
}

export default CommentSection