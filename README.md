#React-Food-App

#Data: spoonacular
https://spoonacular.com/food-api/docs
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c82446aac5e5458eb9dd73b194a6d188";

#Postman
https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=c82446aac5e5458eb9dd73b194a6d188

#axios
fetch or axios

> npm i axios@latest

#React-query
React Query:
<npm I @tanstack/react-query@latest
Main.tx: import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient=new QueryClient();
createRoot(document.getElementById('root')!).render(
<StrictMode>
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
</

#eslint.config.js
'react/prop-types': 'off',

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
