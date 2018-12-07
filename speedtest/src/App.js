import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './Button.js';
import Score from './Score';
import Gameover from './GameOver';

function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
state = {
	activeButton: 0,
	clicks: 0,
	queue:[],
	showGameover: false
}

timerId = undefined;
delay = 1500;

handleClick = (btnId) =>{
	console.log("Click", btnId);
	if(!(btnId === this.state.queue[0])){
		//Gameover
		this.gameover();
		return
	}
	this.setState({
		queue: this.state.queue.slice(1),
		clicks: this.state.clicks +1
	});
}


gameover =()=>{
	clearTimeout(this.timerId);
	this.setState({
		showGameover: true
	})
	return
}
//when you define a class define methods using arrow functions so that they are automatically bound to the class
next =() =>{
	// check for gameOver
	if(this.state.queue.length >=10 ){
		//end game
		this.gameover();
		return
	}
	// Pick next active button
	let nextActive = undefined;
	do{
		nextActive = getRandomInt(1, 3);
	} while (nextActive === this.state.activeButton);


	let q = this.state.queue;
	q.push(nextActive);
	// update active button setState
	//using this method you can update all components or classes
	this.setState({
		activeButton: nextActive,
		queue : q
	});
	console.log(this.state.queue);
	// set timer for next activation
	//setTimeout(() => this.next(), 1000);
	//setTimeout(this.next.bind(this), 1000);
	this.delay *= 0.95;
	this.timerId = setTimeout(this.next, this.delay);
}


componentDidMount(){
	//this is used to call the function at least once to start the program
	this.next();
}
  render() {
    return (
		<div className="App">
			<main>
				<Score score= {this.state.clicks} />
				<div className="container">
      	<Button label="B" active={ this.state.activeButton === 1 } clickHandler={ () => this.handleClick(1) }/>
				<Button label="C" active={ this.state.activeButton === 2 } clickHandler={ () => this.handleClick(2) }/>
				<Button label="H" active={ this.state.activeButton === 3 } clickHandler={ () => this.handleClick(3) }/>
				{this.state.showGameover && <Gameover />}
				</div>
				</main>
			</div>

    );
  }
}

export default App;
