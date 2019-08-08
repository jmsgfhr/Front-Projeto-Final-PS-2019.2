import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import Forgot from './component/forgot/forgot';
// import axios from 'axios';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      <Forgot></Forgot>
    </div>
  );
}

export default App;
