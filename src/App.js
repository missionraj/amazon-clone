import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';

import Home from './home/Home';
import CheckOut from './checkout/CheckOut';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
              <Route path="/checkout">
                <Header />
                <CheckOut />
              </Route>
              <Route path="/login">
                <div> this is login page </div>
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
