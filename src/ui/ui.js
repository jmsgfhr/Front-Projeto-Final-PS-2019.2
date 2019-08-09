import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/header/header';
import MenuLateral from '../component/menuLateral/menuLateral';
import IndexInstrutor from '../component/indexInstrutor/indexInstrutor';

export default class UserMenu extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MenuLateral></MenuLateral>
                <IndexInstrutor></IndexInstrutor>
            </div>
        )
    }
}