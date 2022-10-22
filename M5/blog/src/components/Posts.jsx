import React, {useState, useEffect} from 'react'





const post = () => {
  const [postData, setPostData] = useState([]);
  console.log(postData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getPosts = async () => {
    setLoading(true)
    try {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      setLoading(false)
      return await posts.json()
      
      
    }
    catch{
      setError(error)
    }
  }

  useEffect( ()=>{
    getPosts().then(res => setPostData(res))
  }, [])
  return (
    <div></div>
  )
}

export default post