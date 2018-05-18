import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';

//Import Components
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import Jokes from "./components/jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*App Routes*/}
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/jokes' component={Jokes} />
                
      </div>
    );
  }
}

export default App;
