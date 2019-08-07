import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import Header from './component/header/header';
import axios from 'axios';
import Error from './component/error/error';
import MenuLateral from './component/menuLateral/menuLateral';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      <MenuLateral></MenuLateral>
    </div>
  );
}

export default App;
