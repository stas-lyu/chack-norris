import React, {useEffect, useState} from 'react';
import Post from "../Post";

export default function CategoryItem(props) {
    const [post, setPost] = useState([]);
    const [postActive, setPostActive] = useState(true);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${props.category}`)
            .then(response => response.json())
            .then(post => {
                setPost(post)
            })
    }, [props.category])

    function clickHandler() {
        setPostActive(!postActive);
        props.onShowPost(post, postActive)
        props.postActive(postActive);
    }


    return <li onClick={clickHandler}
    >{props.category}</li>
}