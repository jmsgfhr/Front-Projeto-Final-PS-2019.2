import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/header/header';
import MenuLateral from '../component/menuLateral/menuLateral';
import IndexInstrutor from '../component/indexUsers/indexInstrutor';
import IndexCandidate from '../component/indexUsers/indexCandidates';
import IndexCollaborator from '../component/indexUsers/indexCollaborator';

export default class UserMenu extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className='uiContent'>
                    <MenuLateral></MenuLateral>
                    <IndexCollaborator></IndexCollaborator>
                </div>
            </div>
        )
    }
}