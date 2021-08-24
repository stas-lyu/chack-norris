import React from "react";
import chackImg from '../chack.png'

export default function Post({text, state}) {
    return (<div className={state ? 'post-container active' : 'post-container'}>
        <img className={'post-img'} srcSet={chackImg} alt="Chack Norris"/>
        <p className={'post-text'}>{text}</p>
    </div>)
}