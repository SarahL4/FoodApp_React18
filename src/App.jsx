import { useState } from 'react';
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import './App.css';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

function App() {
	/*foodData is an array.
	 *setFoodData从search写了东西而来.
	 *foodData是在App这里被setFoodData(search)传来赋值的
	 */
	const [foodData, setFoodData] = useState([]);

	return (
		<div className='App'>
			<Nav />
			<Search foodData={foodData} setFoodData={setFoodData} />
			<Container>
				<InnerContainer>
					<FoodList foodData={foodData} />
				</InnerContainer>
			</Container>
		</div>
	);
}

export default App;
