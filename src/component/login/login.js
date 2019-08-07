import React from 'react';
import './login.css'

export default function Login(props) {
    return  (
        <section className='login'>
            <div className='loginContent'>
                <h2 className='formTitle'>Área do treinamento</h2>
                <form className='formLogin'>
                    <input className='loginName' placeholder='login'></input>
                </form>
            </div>
        </section>
    )
}