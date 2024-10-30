import { useEffect, useState } from 'react';
import viewRecipePizza1 from '../data/viewRecipePizza1';
import styles from '../components/foodDetails.module.css';
import ItemList from './ItemList';

//Get Recipe information: GET https://api.spoonacular.com/recipes/{id}/information
export default function FoodDetails({ foodId }) {
	// {} means object
	const [food, setFood] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
	const API_KEY = 'c835ff7e73be435695eee8bb4e1fb59e';

	// useEffect(() => {
	// 	async function fetchFood() {
	// 		// https://api.spoonacular.com/recipes/715538/information?apiKey=c835ff7e73be435695eee8bb4e1fb59e
	// 		const res = await fetch(`${URL}?apiKey=${API_KEY}`);
	// 		const data = await res.json();
	// 		if (!data) {
	// 			setFood(viewRecipePasta1);
	// 		} else {
	// 			console.log(data);
	// 			setFood(data);
	// 		}
	// 		setIsLoading(false);
	// 	}
	// 	fetchFood();
	// }, [URL, foodId]);

	useEffect(() => {
		async function fetchFood() {
			try {
				// https://api.spoonacular.com/recipes/656329/information?apiKey=c835ff7e73be435695eee8bb4e1fb59e
				const res = await fetch(`${URL}?apiKey=${API_KEY}`);
				const data = await res.json();
				if (!data) {
					setFood(viewRecipePizza1); // Ensure `viewRecipePizza1` is defined somewhere
				} else {
					console.log(data);
					setFood(data);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
				setFood(viewRecipePizza1);
			} finally {
				setIsLoading(false);
			}
		}
		fetchFood();
	}, [URL, API_KEY, foodId]);

	return (
		<>
			<div>
				<div className={styles.recipeCard}>
					<h1 className={styles.recipeName}>{food.title}</h1>
					<img className={styles.recipeImage} src={food.image} />
					{/* recipe details */}
					<div className={styles.recipeDetails}>
						<span>
							⏰<strong>{food.readyInMinutes} Minutes</strong>
						</span>
						<span>
							👪<strong>Serves {food.servings}</strong>
						</span>
						{/* |+ctrl+p  insert emoji*/}
						<span>
							<strong>
								{food.vegetarian ? '🥕Vegetarian' : '🍖Non-Vegetarian'}
							</strong>
						</span>
						<span>
							<strong>{food.vegan ? '🐮Vegan' : ''}</strong>
						</span>
					</div>

					<div>
						💲
						<span>
							<strong>
								{(food.pricePerServing / 100).toFixed(2)} Per serving
							</strong>
						</span>
					</div>

					<h2>Ingredients</h2>
					<ItemList food={food} isLoading={isLoading} />
				</div>
			</div>
		</>
	);
}
