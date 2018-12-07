import React, { Component } from 'react';

// import logo from './logo.svg';

import './App.css';

import Button from './Button';

import Score from './Score';

import Gameover from './GameOver';

class App extends Component {

    state = {

        activeButton: 0,

        clicks: 0

    }
		handleClick = (btnId) => {

        console.log("Click", btnId);

        this.setState({

            clicks: this.state.clicks + 1

        });

    }
		next() {

        //pick next active Button

        let nextActive = 1 + (this.state.activeButton + 1) % 3;

        //update active button state

        this.setState({

            activeButton: nextActive

        });

        //set timer for next activation

        setTimeout(this.next.bind(this), 1000);

    }    componentDidMount() {

        this.next();

    }  render() {

   return (

            <div className="App">

                <main>

                    <Score score={this.state.clicks} />

                    <Button label="&#8576;" active={ this.state.activeButton === 1 } clickHandler={ () => this.handleClick(1) }/>

                    <Button label="&#8584;" active={ this.state.activeButton === 2 } clickHandler={ () => this.handleClick(2) }/>

                    <Button label="&#8578;" active={ this.state.activeButton === 3 } clickHandler={ () => this.handleClick(3) }/>

                    <Gameover />

                </main>

             </div>

   );

 }

}
export default App;
