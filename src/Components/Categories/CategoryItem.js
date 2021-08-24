import React, {useEffect, useState} from 'react';

export default function CategoryItem({category, onShowPost, postActive}) {
    const [post, setPost] = useState([]);
    const [isActive, setIsActive] = useState(true);


    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(post => {
                setPost(post)
            })
    }, [category])

    function clickHandler() {
        setIsActive(!isActive);
        onShowPost(post);
        postActive(isActive);
    }

    return <li onClick={clickHandler}
    >{category}</li>
}