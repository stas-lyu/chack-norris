import React, {useEffect, useState} from 'react';
import Post from "../Post";

export default function CategoryItem({category}) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(post => {
                setPost(post)
            })
    }, [category])

    function handleClick(post) {
        return <Post post={post}/>
    }

    return <li onClick={()=> handleClick(post)}>{category}</li>
}