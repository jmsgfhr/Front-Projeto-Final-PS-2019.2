import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import Header from './component/header/header';
import axios from 'axios';
import Error from './component/error/error';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
