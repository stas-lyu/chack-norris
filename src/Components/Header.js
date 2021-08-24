import React from "react";
import img from '../logo.png'

export default function Header() {
    return (
        <header className={'header'}>
            <div className="container">
                <div className="logo">
                    <img className={'avatar'} srcSet={img} alt=""/>
                    <h5 className={'name'}>Chuck Norris</h5>
                </div>
            </div>
        </header>
    )
}