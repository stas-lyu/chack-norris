import React from "react";
import CategoryItem from './CategoryItem'

export default function CategoryList({categories}) {
    return (
        <ul className={'categories-list'}>
            {categories.map((category)=> {
                return <CategoryItem key={category} category={category}/>
            })}
        </ul>
    )
}
