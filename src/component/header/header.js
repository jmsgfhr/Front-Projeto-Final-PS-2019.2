import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='headerContent'>
                    <img className='logoImg' src={require('../../assets/img/logo.svg')} alt='logo'></img>
                    {/* <div className='dropdown'>
                        <a href='#'><img className='configMenuBtn' src={require('../../assets/img/icon-settings.svg')} alt='settings'></img></a>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                                <a href='#'>Link 4</a>
                            </div>
                    </div> */}
                    <div className="dropdown">
                        {/* <img className='dropbtn' src={require('../../assets/img/icon-settings.svg')} alt='settings'></img> */}
                        <button className="dropbtn"></button>
                        <div className="dropdown-content">
                            <Link to='/' href="#">Configurações</Link>
                            <Link to='/' href="#">Log do Sistema</Link>
                            <Link to='/' href="#">Log da Conta</Link>
                            <Link to='/' href="#">Sair</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}