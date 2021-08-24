import React from "react";
import chackImg from './chack.png'

export default function Post({post}) {

    return (<div className={'post-container'}>
        <img className={'post-img'} srcSet={chackImg} alt="Chack Norris"/>
        <p className={'post-text'}>{post}</p>
    </div>)
}