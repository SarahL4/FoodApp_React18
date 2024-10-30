import styles from '../components/item.module.css';

export default function Item({ item }) {
	return (
		<>
			<div className={styles.itemContainer}>
				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={
							`https://img.spoonacular.com/ingredients_100x100/` + item.image
						}
						alt=''
					/>
				</div>

				<div className={styles.nameContainer}>
					<div className={styles.name}>{item.aisle}</div>
					<div className={styles.amount}>
						{item.amount}
						{item.unit}
					</div>
				</div>
			</div>
		</>
	);
}
