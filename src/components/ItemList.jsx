import styles from '../components/foodDetails.module.css';
import Item from '../components/Item';

export default function ItemList({ food, isLoading }) {
	return (
		<>
			<div>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					food.extendedIngredients.map((item) => (
						<Item item={item} key={item.id} />
					))
				)}
				<h2>Instructions</h2>
				<div className={styles.recipeInstructions}>
					<ol>
						{isLoading ? (
							<p>Loading...</p>
						) : (
							food.analyzedInstructions[0].steps.map((step) => (
								<li key={step.number}>{step.step}</li>
							))
						)}
					</ol>
				</div>
			</div>
		</>
	);
}
