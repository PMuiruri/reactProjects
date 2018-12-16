import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Overview from './components/overview';
import { Route } from 'react-router-dom';
import Branch from './components/branch';


class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
				<Route exact path='/' component ={Overview} />
				<Route path='/:branch' component={Branch} />
				<Footer />
      </div>
    );
  }
}

export default App;
