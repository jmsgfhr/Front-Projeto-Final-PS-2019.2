import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='headerContent'>
                    <img className='logoImg' src={require('../../assets/img/logo.svg')} alt='logo'></img>
                    <img className='configMenuBtn' src={require('../../assets/img/icon-settings.svg')} alt='settings'></img>
                </div>
            </div>
        </header>
    )
}