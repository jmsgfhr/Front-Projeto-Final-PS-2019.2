import React from 'react';
import './panelLeft.css'

export default function PanelLeft(props) {
    return (
        <div className='panelLeft'>
            <img className='logoPanel' src={require('../../assets/img/logo.svg')} alt='logo'></img>
            <div className='panelLeftContent'>
                <h2 className='panelLeftTitle'>Processo Seletivo</h2>
                <p className='panelLeftDescription'>Está aberto o processo seletivo de 2019.2 As inscrições irão de 01/01 até 01/01.</p>
            </div>
        </div>
    )
}