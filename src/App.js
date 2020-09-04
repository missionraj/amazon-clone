import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';

import Home from './home/Home';
import CheckOut from './checkout/CheckOut';
import Login from './login/Login'

import { useDataLayerValue } from './StateProvider';
import { auth } from './firebase'

function App() {
  const [{user}, dispatch ] = useDataLayerValue();
  useEffect(()=> { 
    const unSubscribe = auth.onAuthStateChanged(authUser=> { 
      if (authUser) {
        // user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else {
        // user  not logged in
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
    return () => { 
        // clean up
        unSubscribe();
    }
  },[])
  console.log('this is the user', user);
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
                <Login />
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
