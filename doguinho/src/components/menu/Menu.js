import React from 'react';
import './menu.css';

const logo = './assets/logo.png';

const toggleMobileClasses = () => {
    let hamburgerIcon = document.getElementById('burger');
    hamburgerIcon.classList.toggle('is-active');
    let mobileMenu = document.getElementById('menu-container');
    mobileMenu.classList.toggle('opened');
}

const Menu = () => {
    return(
        <div>
            <div id={'burger'} className="burger" onClick={toggleMobileClasses}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>

        <div id={'menu-container'} className="menu-container">
            <div className="menu-logo"><img className="menu-logo-img" src={logo} alt="logo"/>
            <div className="menu-title">Caça Raça</div>
            <a className="menu-github" href="https://github.com/brunopeople/Projeto-Doguinho" target="_blank" rel="noopener noreferrer">Link do Repositório</a>
            <a className="menu-twitter" href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">Siga o Twitter</a>
        </div>
    );
}

export default Menu;