import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

function App() {
	/*foodData is an array.
	 *setFoodData从search写了东西而来.
	 *foodData是在App这里被setFoodData(search)传来赋值的
	 */
	const [foodData, setFoodData] = useState([]);
	//在foodItem(under foodList) 点击 view food detail, 把所点击的这个receipe 的id传给 foodDetails页面
	const [foodId, setFoodId] = useState('656329');

	return (
		<div className='App'>
			<Nav />
			{/* Search Recipes */}
			<Search foodData={foodData} setFoodData={setFoodData} />
			<Container>
				<InnerContainer>
					<FoodList foodData={foodData} setFoodId={setFoodId} />
				</InnerContainer>
				<InnerContainer>
					{/*Get Recipe information */}
					<FoodDetails foodId={foodId} />
				</InnerContainer>
			</Container>
		</div>
	);
}

export default App;
