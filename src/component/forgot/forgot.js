import React from 'react';
import './forgot.css';
import PanelLeft from '../panelLeft/panelLeft';

export default function Forgot(props) {
    return (
        <section className='forgot'>
            <PanelLeft></PanelLeft>
            <div className='forgotContent'>
                <h2 className='formTitle'>Recuperar senha</h2>
                <form className='formForgot'>
                    <input className='forgotEmail' placeholder='email'></input>
                    <button className='forgotSubmit' >ENVIAR</button>
                </form>
            </div>
        </section>
    )
}