// const apiKey = "seYUer2bPoJZHvH7soSy12u5ynQXIYbT";
//
// function getGiphyUrl(category){
// 	return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=G&tag=${category}`;
// 	}
//
// 	function fetchGiph(category){
// 		category = category.replace(/ /g, "+");
// 		return fetch(getGiphyUrl(category))
// 			.then(res => res.json())
// 			.then(data => data.data.image_url);
// 	}
const apiKey = '10651573-c48acbfbfe715c49db88f253c';
function fetchGiph(keyword){
		return fetch(`https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&per_page=${24}&safesearch=true`)
			.then(res => res.json())
			.then(data => data.hits);
	}

export default fetchGiph;
