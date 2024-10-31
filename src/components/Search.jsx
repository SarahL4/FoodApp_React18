import { useState, useEffect } from 'react';
import styles from './search.module.css';
import useSearch from '../hooks/useSearch';

// const URL = 'https://api.spoonacular.com/recipes/complexSearch';
// const API_KEY = 'c82446aac5e5458eb9dd73b194a6d188';

export default function Search({ foodData, setFoodData }) {
	const [searchText, setSearchQuery] = useState('Pizza');
	// const { searchQuery } = useParams();
	const { data } = useSearch(searchText);

	useEffect(() => {
		if (data?.results) {
			setFoodData(data?.results);
		}
	}, [data, setFoodData]);

	//useEffect hook,随时写,随时查找.实时
	// useEffect(() => {
	// 	// a hook. need a callback (()=>{},[]), en dependencis array
	// 	async function fetchFood() {
	// https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=
	// 		const res = await fetch(`${URL}?query=${searchText}&apiKey=${API_KEY}`);
	// 		const data = await res.json();
	// 		console.log(data.results);
	// 		setFoodData(data.results);
	// 	}

	// 	fetchFood();
	// }, [searchText]); //input 的时候感知到的传到这里来处里

	// function fetchFood() {
	// 	setFoodData(data?.results);
	// }

	return (
		<>
			{/* <div>
				<h1>Search results for {searchText}</h1>
				<ul>
					{foodData?.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</div> */}
			<div className={styles.searchContainer}>
				<input
					className={styles.input}
					value={searchText}
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
					type='text'
				/>
			</div>
		</>
	);
}
