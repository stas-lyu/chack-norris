import './App.css';
import React, {useEffect, useState} from "react";
import CategoryList from "./Categories/CategoryList";
import Header from "./Header";
import Post from "./Post";
import Loader from "./Loader";

// import Loader from "./Loader";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(category => {
                setTodos(category)
                setLoading(false)
            })
    }, [])

    function showPost(post) {
        setTodos(todos.filter((item) => {
            return item === post.title
        }))
    }

    return (
        <div>
            <Header/>
            <h2 className={'title'}>Categories</h2>
            <div className={'container'}>
                <div className="categories-container">
                    {loading && <Loader/>}
                    {todos.length ? (
                        <CategoryList categories={todos}/>
                    ) : loading ? null : (<p>No categories</p>)}
                    <Post onCreate={showPost} className={'post'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
