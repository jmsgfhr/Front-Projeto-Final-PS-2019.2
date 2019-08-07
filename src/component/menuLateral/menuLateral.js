import React from 'react';
import './menuLateral.css';

export default function MenuLateral() {
    return(
    <section className='menuLateral'>
        <div className='dashTitle'>
            <h2>Dashboard</h2>
        </div>
        <button className='accordionBtn'>Processos Seletivos</button>
        <div className='panel'>
            <button className='accordionBtnChoices'>Processo Seletivo Vigente</button>
            <button className='accordionBtnChoices'>Todos os Processos Seletivos</button>
            <button className='accordionBtnChoices'>Criar Processo Seletivo</button>
        </div>
        <button className='accordionBtn'>Usuários</button>
        <div className='panel'>
            <button className='accordionBtnChoices'>Todos os Usuários</button>
            <button className='accordionBtnChoices'>Candidatos</button>
            <button className='accordionBtnChoices'>Colaboradores</button>
            <button className='accordionBtnChoices'>Criar Usuários</button>
        </div>
    </section>)
}