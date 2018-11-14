import React, {Component} from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './action'

class Counter extends Component{

	increment = () =>{
		this.props.dispatch( incrementCounter(5) );
	}

	decrement = () =>{
		this.props.dispatch( decrementCounter(5) );
	}

	render(){
		return(
			<div>
				<div>
					<button onClick ={this.decrement}>-</button>
					<span>{this.props.count}</span>
					<button onClick ={this.increment}>+</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		count: state.count
	};
}

export default connect(mapStateToProps)(Counter);
