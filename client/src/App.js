import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import BubblePage from './components/BubblePage';
import './styles.scss';

function App() {
  // const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className='App'>
        <h1>oOo Bubbles oOo</h1>
        <Route exact path='/' component={Login} />
        <Route path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
