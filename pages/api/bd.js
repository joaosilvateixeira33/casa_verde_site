export const API_URL = 'http://localhost:5000';

export const fetchPlantas = async () => {
    try {
        const response = await fetch(`${API_URL}/plants`);
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar plantas:", error);
        throw error;
    }
};
