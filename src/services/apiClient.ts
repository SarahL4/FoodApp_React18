import axios from 'axios';

const axioInstance = axios.create({
	baseURL: 'https://api.spoonacular.com/recipes',
	params: {
		apiKey: 'c835ff7e73be435695eee8bb4e1fb59e',
	},
});

class APIClient<T> {
	get = async (query: string) => {
		const res = await axioInstance.get<T>(`` + '/complexSearch', {
			params: { query },
		}); // Adds `query` to the request
		return res.data;
	};

	getRecipe = async (id: string) => {
		// const resp = await axioInstance.get<T>(`` + '/' + id + '/information');
		const resp = await axioInstance.get<T>(`/${id}/information`);
		// console.log(resp);
		// console.log(resp.data);
		return resp.data;
	};
}

export default APIClient;
