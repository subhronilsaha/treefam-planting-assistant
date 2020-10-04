import React from 'react';
// import firebase from './firebase.js';
// import {Switch, Route, Router} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const location = {
  lat: 37.42216,
  lng: -122.08427,
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: {
        email: "",
        username: "",
        points: 0,
        location: {
          lat: 90,
          lng: 90
        }
      }, 
      route: "login",
      locArray: []
    }
  }

  plantTree = (points) => {
    var currentState = {...this.state};
    currentState.userData.points += 1;
    this.setState(currentState)
  }

  changeRoute = (route, email, username, lat, long) => {
    this.setState({
      userData: {
        email: email,
        username: username,
        points: 0,
        location: {
          lat: lat,
          lng: long
        }
      },
      route: route
    })
  }

  render() {  
    return (
      <div className="App">
        {this.state.route === "login" 
          ? <LoginPage changeRoute = {this.changeRoute} />
          : <HomePage 
              changeRoute = {this.changeRoute}
              location={this.state.userData.location} 
              zoomLevel={20} 
              userData={this.state.userData} 
              others={this.state.locArray}
              plantTree={this.plantTree}
            />
        }
      </div>
    );
  }
}

export default App;
