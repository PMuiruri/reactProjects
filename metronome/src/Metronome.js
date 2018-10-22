import React, {Component} from 'react';
import './Metronome.css';
import click1 from './click1.wav';
import click2 from './click2.wav';


class Metronome extends Component{
	constructor(props){
		super(props);
		//creating audio objects with the webpack files
		this.click1 = new Audio(click1);
		this.click2 = new Audio(click2);

		this.state = {
			playing: false,
			count: 0,
			bpm: 100,
			beatsPerMeasure: 4
		};
	}

	handleBpmChange = event => {
		const bpm = event.target.value;

		if(this.state.playing){
			//stop the old timer and start a new one
			clearInterval(this.timer);
			this.timer = setInterval(this.playClick, (60/bpm)*1000);
			this.setState({
				count:0,
				bpm
			});
		} else{
			this.setState({bpm});
		}
	}

	startStop =()=>{
		if(this.state.playing){
			//stop the timer
			clearInterval(this.timer);
			this.setState({
				playing:false
			})
		}else {
			//start a timer with the current BPM
			this.timer = setInterval(
				this.playClick, (60 / this.state.bpm)*1000);
				this.setState({
					count: 0,
					playing: true
				},
				this.playClick
			);
		}
	};

	playClick = () =>{
		const {count, beatsPerMeasure} = this.state;

		if(count % beatsPerMeasure ===0){
			this.click2.play();
		} else{
			this.click1.play();
		}
		this.setState(state =>({
			count:(state.count+1)% state.beatsPerMeasure
		}));
		console.log(this.state.count);
	};

	render(){
		// let bpm = 100;
		// let playing = false;

		const {playing, bpm} = this.state;

		return (
			<div className="metronome">
			<div className = "bpm-slider">
			<div>{bpm} BPM </div>
			<input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange} />
			</div>
			<button onClick={this.startStop}>{playing ? 'Stop': 'Start'}</button>
			</div>
		);
	}
}

export default Metronome;
