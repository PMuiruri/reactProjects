import React, {Component} from 'react';

class Branch extends Component{
	constructor(props){
		super(props);
		this.state ={
			data: []
		};
	}

	fetchData = () =>{
		const url = `https://gis.vantaa.fi/rest/tyopaikat/v1/${this.props.match.params.branch}`;
		fetch(url)
		.then( response => response.json())
		.then( data => {
			console.log(data);
			this.setState({
				data: data
			});
		})
		.catch(error => console.log(error));
	}

	componentDidMount(){
		this.fetchData();
	}

	render(){
		const listItems = this.state.data.map( item =>
			<div key={item.id}>
			<h2>{item.tyotehtava}</h2>
				<ul>
					<li> Organisation : {item.organisaatio}</li>
					<li> Address : {item.osoite}</li>
					<li> Due Date : {item.haku_paattyy_pvm}</li>
					<li> <a href={item.linkki}> Link </a></li>
				</ul>
			</div>
		)

		return(
			<div>
			<h1>{this.props.match.params.branch}</h1>
			{listItems}
			</div>
		);
	}
}

export default Branch;
