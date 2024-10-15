const API_URL = 'http://localhost:5000';

export const fetchPlants = async () => {
    try {
        const response = await fetch(`${API_URL}/plants?inStock=true&_limit=7`);
        if (!response.ok) {
            throw new Error('Erro ao buscar as plantas.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};