import React from 'react';
import './error.css';
import Header from '../header/header';

export default function Error404() {
    return (
        <section className='erro'>
            <div className='container'>
                <div className='erroContent'>
                    <h1 className='errorNumber'>404</h1>
                    <img className='errorImg' src={require('../../assets/img/404.svg')} alt='Error'></img>
                    <h2 className='errorMessage'>Oops, essa página não existe.</h2>
                </div>
            </div>
        </section>
    )
}