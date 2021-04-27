import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching3 = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(error =>{
            console.log(error);
        })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map((post) => (<li key = {post.id}>{post.title}</li>))
                }
            </ul>
        </div>
    );
};

export default DataFetching3;