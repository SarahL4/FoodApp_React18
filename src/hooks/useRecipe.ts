import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';

// const apiClient = new APIClient(`/${id}/information`);
const useRecipe = (id: string) => {
	return useQuery({
		queryKey: ['id', id],
		// queryFn: () => apiClient.getRecipe(id),
		queryFn: () => new APIClient(`/${id}/information`).getRecipe(),
	});
};

export default useRecipe;
