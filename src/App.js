import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import MenuLateral from './component/menuLateral/menuLateral';

// import axios from 'axios';

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
