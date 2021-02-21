import React from 'react';
import Header from '../component/header/header';
import MenuLateral from '../component/menuLateral/menuLateral';
// eslint-disable-next-line import/no-named-as-default
import IndexCollaborator from '../component/indexUsers/indexCollaborator';

// eslint-disable-next-line react/prefer-stateless-function
export default class UserMenu extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="uiContent">
          <MenuLateral />
          <IndexCollaborator />
        </div>
      </div>
    );
  }
}
