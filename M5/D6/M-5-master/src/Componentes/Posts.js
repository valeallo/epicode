import React, { useState, useEffect } from 'react';
import ReadMoreModal from './ReadMoreModal';
import Card from './Card';



const Posts = () => {
    const [postData, setPostData] = useState([])
    /*console.log(postData);*/
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [readMoreModal, setReadMoreModal] = useState(false)
    const [singlePostData, setSinglePostData] = useState(null)

    const getPosts = async () => {

        setLoading(true)
        try {
            const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
            setLoading(false)
            return await myPosts.json()
        } catch (error) {
            setError(error)
        }
    }

    

    

    const toggleReadMoreModal = () => setReadMoreModal(!readMoreModal)//Toggle: imposto readMoreModal al contrario di quello che è. 


    useEffect(() => {
        getPosts().then((res) => setPostData(res))


    }, [])

    return (

        <div className='container'>
            <div>
                {loading && !error && <h1>Caricamento in corso...</h1>}
                {error && !loading && <h1>Ops si è verificato un errore..</h1>}
                {!loading && !error && postData?.map((post, index) => { // quando si parla di ogetti, quando ci sono errori undefind bloccanti mostra Unefind
                    /*console.log(post);*/
                    return (
                        <Card 
                          
                            key={index}
                            post={post}
                            toggle={setReadMoreModal}
                            setSingle={setSinglePostData}
                            
                           
                            


                            
                        
                        />
                    )
                })}
            </div>
            
            {readMoreModal && <ReadMoreModal singlePost={singlePostData} close={setReadMoreModal} />}
        </div>

    )

}

export default Posts