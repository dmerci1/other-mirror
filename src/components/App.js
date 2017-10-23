import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './mirror.css';
import Settings from './settings';
import Header from './header';
import User from './user';
import Calendar from './calendar';
import Footer from './footer';
import Exercisw from './exercise';
import xhr from 'xhr';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ToggleDisplay from 'react-toggle-display';
import firebase, { auth, provider } from './firebase.js';
import Dragula from 'react-dragula';


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        show: false,
        
      };
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      //this.name =  this.name.bind(this);
      //this.state.user.displayName;
    }
    

    login() {
      auth.signInWithRedirect(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      })
    }

    logout() {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
         });
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    }

    handleClick() {
      this.setState({
        show: !this.state.show
      });
    }

  render() { 
    return (
    <div>    
      <div>   
        {this.state.user ?
        <button id = "logout-button" onClick={this.logout}></button>
        :
        <button id="normal-login" onClick={this.login}>normal-login</button>
        }
      </div>

      {this.state.user ?
      <div>
        <Header user = {this.state.user.displayName}></Header>
          <div className = "menu">
          <button id = "menu-button" onClick={ () => this.handleClick() }></button>
        </div>
          <ToggleDisplay show={this.state.show}>
          <Settings image ={this.state.user.photoURL}></Settings>
          </ToggleDisplay>
    
          <Footer></Footer>

      
      
     
      </div>
      :
      <div id="login-container">
        <h1 id = 'title'> Mirror Assistant</h1>
        <button id = "google-login" onClick={this.login}>Log In With Google Account</button>
        <button id="fb-login">Log In with Facebook Account(Coming Soon)</button>
      </div>
        
        }
    </div>
    );
  }
}

export default App;