import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Overview extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}

fetchData = () =>{
		fetch('https://gis.vantaa.fi/rest/tyopaikat/v1')
			.then(response => response.json())
			.then( data => {
				console.log(data);
				this.setState({
					data: data
				});
			})
			.catch(error => console.log(error));
	}

componentDidMount() {
	this.fetchData();
}

	render(){
		 const listItems = this.state.data.map( item => <li key ={item.ammattiala}>
			 	<Link to ={`/${item.ammattiala}`}> {item.ammattiala} </Link> :  {item.lukumäärä}
			 </li>)
		return(
			<div>
				<ul>{listItems}</ul>
			</div>
		)
	}
}

export default Overview
