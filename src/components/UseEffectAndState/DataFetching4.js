import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching4 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
    },[id])
    return (
        <div>
            <input type="text" value={id} onChange = {e=> setId(e.target.value)}/>
            <p>{post.title}</p>
        </div>
    );
};

export default DataFetching4;