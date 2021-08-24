import React from "react";
import CategoryItem from './CategoryItem'

export default function CategoryList(props) {
    return (
        <ul className={'categories-list'}>
            {props.categories.map((category)=> {
                return <CategoryItem key={category} category={category}/>
            })}
        </ul>
    )
}
