import axios from 'axios';

const axioInstance = axios.create({
	baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
	params: {
		apiKey: 'c835ff7e73be435695eee8bb4e1fb59e',
	},
});

class APIClient<T> {
	get = async (query: string) => {
		const res = await axioInstance.get<T>(``, { params: { query } }); // Adds `query` to the request
		return res.data;
	};
}

export default APIClient;
