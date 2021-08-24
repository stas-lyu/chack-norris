import './App.css';
import React, {useEffect, useState} from "react";
import CategoryList from "./Components/Categories/CategoryList";
import Header from "./Components/Header";
import Post from "./Components/Post";
import Loader from "./Loader";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState('');
    const [statePost, setStatePost] = useState(false);


    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(category => {
                setTodos(category)
                setLoading(false)
            })
    }, [])

    function handlerShowPost(post) {
        setText(post.value)
    }

    function handlerActive(state) {
        if (!state) {
            return false
        } else setStatePost(state)
    }

    return (
        <div>
            <Header/>
            <h2 className={'title'}>Categories</h2>
            <div className={'container'}>
                <div className="categories-container">
                    {loading && <Loader/>}
                    {todos.length ? (
                        <CategoryList postState={handlerActive} postText={handlerShowPost} categories={todos}/>
                    ) : loading ? null : (<p>No categories</p>)}
                    <Post text={text} state={statePost} postText={handlerShowPost} className={'post'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
