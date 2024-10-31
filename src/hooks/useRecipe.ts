import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';

const apiClient = new APIClient();
const useRecipe = (id: string) => {
	return useQuery({
		queryKey: ['id', id],
		queryFn: () => apiClient.getRecipe(id),
	});
};

export default useRecipe;
