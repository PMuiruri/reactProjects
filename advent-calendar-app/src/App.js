import React, { Component } from 'react';
import './style.css';
import Calendar from './components/calendar';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
					<h1>Merry Christmas</h1>
					<Calendar />
      </div>
    );
  }
}

export default App;
