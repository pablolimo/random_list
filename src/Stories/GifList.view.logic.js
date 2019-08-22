import React, { useState, useEffect } from 'react'
import GifList from './GifList.view.js'
import '../css/custom.css'

export default function GifListLogic(props) {
	let [ gifs, setGifs ] = useState([]);
	//Shuffle array
	const shuffle = (arr) => {
		var ctr = arr.length, temp, index;
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = arr[ctr];
			arr[ctr] = arr[index];
			arr[index] = temp;
		}
		return arr;
	};
	/**
	 * Returns a list of random gifs
	 */
	const getRandom = async () => {
		const result = []
		let tags = ['cat', 'dog', 'kitten','puppy','elephant','lion','monkey'];
		tags = shuffle(tags.concat(tags));
		for (let i = 0; i < tags.length; i++) {
			const tag = tags[i];
			const res = await fetch(`${process.env['REACT_APP_GIPHY_RANDOM_URL']}?api_key=${process.env['REACT_APP_GIPHY_API_KEY']}&tag=${tag} adorable`,{
				headers : { 
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const json = await res.json();
			if (json.meta.status === 200) {
				const {data} = json;
				result.push(data);
			}
		}
		return result;
	};
	useEffect(function () {
			getRandom().then(setGifs);
	}, [])
	return <GifList {...props} from={gifs} />
}