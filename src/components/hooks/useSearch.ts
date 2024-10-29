import { useQuery } from '@tanstack/react-query';
import APIClient from '../../services/apiClient';

const UseSearch = (searchQuery: string) => {
	const apiClient = new APIClient();

	return useQuery({
		queryKey: ['query', searchQuery],
		queryFn: () => apiClient.get(searchQuery),
	});
};

export default UseSearch;
