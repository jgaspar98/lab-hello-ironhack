import React from 'react';
import Declarative from './declarative.js';
import Components from './components.js';
import SingleWay from './singleway.js';
import JSX from './jsx.js';
import './app.css';

function App() {
    return (
        <div>
            <div className="intro">
                <div className="nav-bar">
                    <img className='logo' src='/images/ironhack-logo.svg' />
                    <img className='menu' src='/images/menu-top.svg'/>
                </div>
                <div className="greatings">
                    <h1 className="title">Say hello to ReactJS</h1>
                    <p className="intro-p">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                </div>
                    <button className="btn">Awesome!</button>
            </div>
            <div className='info'>
                <Declarative />
                <Components />
                <SingleWay />
                <JSX/>
            </div>
        </div>)
    
}

export default App;