import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Component1 from './Components/Component1/Component1';
import Component2 from './Components/Component2/Component2';


function App() {
  return (
    <div >
      <Switch>

        <Route path='/firstPage'>
          <Component1/>
        </Route>

        <Route path='/'>
          <Component2/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
