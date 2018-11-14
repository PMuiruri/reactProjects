import React, { Component } from 'react';
import Counter from './counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';

const initalState ={
	count: 0
};

function reducer(state = initalState, action){
	console.log(action);
	switch(action.type){
		case 'INCREMENT':
		return{
			count: state.count + action.amount
		};
		case 'DECREMENT':
		return{
			count: state.count - action.amount
		};
		default:
			return state;
	}

}
const store = createStore(reducer);
class App extends Component {
  render() {
    return (
			<Provider store={store}>
      <div className="App">
        <header className="App-header">
        <h2>Counter</h2>
        </header>
				<Counter />
      </div>
			</Provider>
    );
  }
}

export default App;
