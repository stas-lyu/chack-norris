import React from "react";
import CategoryItem from './CategoryItem'

export default function CategoryList({postText, categories, postState}) {
    function handlerShowPost(post) {
        postText(post)
    }

    function handlerPostActive(state) {
        postState(state)
        console.log(state)
    }

    return (
        <ul className={'categories-list'}>
            {categories.map((category) => {
                return <CategoryItem postActive={handlerPostActive} onShowPost={handlerShowPost} key={category}
                                     category={category}/>
            })}
        </ul>
    )
}
