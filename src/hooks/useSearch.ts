import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import pizzas from '../data/pizzas';

const useSearch = (searchQuery: string) => {
	const apiClient = new APIClient(`/complexSearch`);

	return useQuery({
		queryKey: ['query', searchQuery],
		queryFn: () => apiClient.get(searchQuery),
		initialData: pizzas,
	});
};

export default useSearch;
