import React from 'react';
import PanelLeft from '../panelLeft/panelLeft';

export default function Forgot(props) {
    return  (
        <section className='login'>
            <PanelLeft></PanelLeft>
            <div className='forgotContent'>
                <h2 className='formTitle'>Recuperar senha</h2>
                <form className='formLogin'>
                    <input className='forgotEmail' placeholder='email'></input>
                    <button className='forgotSubmit' >ENVIAR</button>
                </form>
            </div>
        </section>
    )
}