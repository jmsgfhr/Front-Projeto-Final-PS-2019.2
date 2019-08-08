import React from 'react';
import './login.css'
import PanelLeft from '../panelLeft/panelLeft';

export default function Login(props) {
    return  (
        <section className='login'>
            <PanelLeft></PanelLeft>
            <div className='loginContent'>
                <h2 className='formTitle'>Área do treinamento</h2>
                <form className='formLogin'>
                    <input className='loginName' placeholder='login'></input>
                    <input className='loginPassword' placeholder='senha'></input>
                    <button className='loginSubmit' >ENTRAR</button>
                </form>
            </div>
        </section>
    )
}