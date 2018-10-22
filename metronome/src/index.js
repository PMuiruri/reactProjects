import React from 'react';
import ReactDOM from 'react-dom';
import Metronome from './Metronome';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Metronome />, document.getElementById('root'));
serviceWorker.register();
