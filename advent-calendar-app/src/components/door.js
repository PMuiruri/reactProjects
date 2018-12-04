import React, {Component} from 'react';
import '../style.css';

const doorImgUrl = "/images/door.png";

class Door extends Component{
	constructor(props){
		super(props);
		this.state = {
			opened: false,
			day: 0,
			gifUrl: "",
			images: [],
			keyword: "santa claus"
		};
	}

	fetchData = (keyword) =>{
			const apiKey = '10651573-c48acbfbfe715c49db88f253c';
			fetch(`https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&per_page=${24}&safesearch=true`)
				.then(response => response.json())
				.then( data => {
					console.log(data);
					this.setState({
						images: data
					});
				})
				.catch(error => console.log(error));
		}

		componentDidMount() {
			this.fetchData(this.state.keyword);
		}

	open =() =>{
		this.setState({ opened: true});
	}

	close = () =>{
		this.setState({ opened: false});
	}

	renderDoor(){
		const { keyword, opened } = this.state;
		const { day } = this.props;
		console.log(day);

		if(opened)
			return(
				<div className="door-opened" onClick={this.close}>
					<img src={this.state.images.hits[day].largeImageURL} alt={keyword}/>
				</div>
			);
			else
				return(
					<div className="door-closed" onClick={this.open}>
						<img src={doorImgUrl} alt="door closed"/>
					</div>
				)
	}


	render(){
		return(
			<div className="door">
				{this.renderDoor()}
				<div className="day">{this.props.day}
				</div>
			</div>
		)
	}
}

export default Door;
