import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
              <Route path="/checkout">
                <Header />
                <div> this is check out page </div>
              </Route>
              <Route path="/login">
                <div> this is login page </div>
              </Route>
              <Route path="/">
                <Header />
                <div> this is home page </div>
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
