import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import pizzas from '../data/pizzas';

const UseSearch = (searchQuery: string) => {
	const apiClient = new APIClient();

	return useQuery({
		queryKey: ['query', searchQuery],
		queryFn: () => apiClient.get(searchQuery),
		initialData: pizzas,
	});
};

export default UseSearch;