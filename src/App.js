import './App.css';
// import CategoryList from "./Categories/CategoryList";
import React, {useEffect} from "react";
import CategoryList from "./Categories/CategoryList";
import Post from "./Post";
import Header from "./Header";

// import Loader from "./Loader";

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(response => response.json())
            .then(category => {
                setTodos(category)
            })
    }, [])
    return (
        <div><Header/>
            <h2 className={'title'}>Categories</h2>
            <div className={'container'}>
                <div className="categories-container">
                    {todos && <CategoryList categories={todos}/>}
                    <Post className={'post'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
