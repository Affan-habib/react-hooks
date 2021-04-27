import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching5 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFfromButtonClick, setIdFromButtonClick] = useState()
    
    const handleClick = () => {
      setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
    },[idFfromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange = {e=> setId(e.target.value)}/>
            <button onClick = {handleClick}>change title</button>
            <p> {post.title} </p>
        </div>
    );
};

export default DataFetching5;