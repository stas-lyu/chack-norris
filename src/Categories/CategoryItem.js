import React, {useEffect} from 'react';
import Post from '../Post'



export default function CategoryItem({category}) {
    const [Post, setPost] = React.useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
            .then(response => response.json())
            .then(Post => {
                setPost(Post)
            })
    }, [category])

    function show() {
        return  <Post props={'123'}/>
    }

    return <li onClick={show.bind(Post, this)}>{category}</li>
}