
import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {

  

  const [{user} , dispatch] = useStateValue();
  
  return (

    //BEM naming convention
    <div className="app">
    {!user ? (
        <Login />
    ):(
      
      <div className="app__body">
      <Router>
          <Sidebar />
        <Switch>
            <Route exact path="/">
              <Chat />
            </Route>
           

            <Route exact path="/rooms/:roomId">
                <Chat /> 
            </Route>

        </Switch>
      </Router>
      </div>
    )}
    </div>
  ); 
}

export default App;
