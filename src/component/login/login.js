import React from 'react';
import '../../ui/ui.css';
import './login.css';
import PanelLeft from '../panelLeft/panelLeft';
import { Link } from 'react-router-dom';

export default function Login(props) {
    return (
        <section className='login'>
            <PanelLeft></PanelLeft>
            <div className='loginContent'>
                <h2 className='formTitle'>Área do treinamento</h2>
                <form className='formLogin'>
                    <div className='inputDiv'>
                        <input className='loginName' placeholder='login'></input>
                        <input className='loginPassword' placeholder='senha'></input>
                    </div>
                    <Link to="/usermenu" className='loginSubmit'>ENTRAR</Link>
                </form>
                <Link to="/forgot" className='recoverPassword'>Recuperar Senha</Link>
            </div>
        </section>
    )
}