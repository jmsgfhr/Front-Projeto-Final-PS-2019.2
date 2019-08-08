import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import Login from './component/login/login';
import MenuLateral from './component/menuLateral/menuLateral';
import Header from './component/header/header';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Header></Header>
    </div>
  );
}

export default App;
