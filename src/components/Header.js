import React from 'react';
import './Header.css';


export default ({black})=>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}