import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPlantas } from '../../../pages/api/bd';
import { Filter } from '../FillterCards';
import SortButtons from '../SortButtons';

const PlantCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    text-align: center;
    width: 369px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.02);
    }
`;

const Image = styled.img`
    width: 43%;
    height: auto;
    border-radius: 8px;
`;

const Title = styled.h2`
    font-family: 'Elsie Swash Caps', sans-serif;
    font-size: 32px; 
    font-weight: bold; 
    margin: 0; 
    color: #202020;
`;

const TextContainer = styled.div`
    line-height: 36px;
`;

const Price = styled.p`
    font-family: 'Montserrat', sans-serif;
    color: #202020;
    font-size: 14px;
`;

const ButtonBuy = styled.span`
    padding: 10px;
    color: #FFCB47;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: #ffb84d;
    }
`;

const Loader = styled.div`
    font-size: 18px;
    color: #666;
    margin: 20px;
`;

export default function CardsPlants() {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);
    const [sortCriteria, setSortCriteria] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadPlants = async () => {
            try {
                const plantsData = await fetchPlantas();
                setPlants(plantsData);
            } catch (error) {
                console.error("Erro ao carregar as plantas:", error);
                setError("Não foi possível carregar as plantas. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        };

        loadPlants();
    }, []);

    const filteredPlants = plants
        .filter((plant) => {
            const price = plant.price;
            return price >= minPrice && price <= maxPrice;
        })
        .sort((a, b) => {
            if (sortCriteria === 'price') {
                return a.price - b.price;
            } else if (sortCriteria === 'name') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

    const handleResetFilters = () => {
        setMinPrice(0);
        setMaxPrice(200);
        setSortCriteria('');
    };

    const handleSortChange = (criteria) => {
        setSortCriteria(criteria);
    };

    if (loading) {
        return <Loader>Carregando plantas...</Loader>;
    }

    if (error) {
        return <Loader>{error}</Loader>;
    }

    return (
        <>
            <Filter 
                minPrice={minPrice} 
                setMinPrice={setMinPrice} 
                maxPrice={maxPrice} 
                setMaxPrice={setMaxPrice} 
                handleResetFilters={handleResetFilters} 
            />
            <SortButtons 
                handleSortChange={handleSortChange} 
                sortCriteria={sortCriteria} 
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredPlants.length > 0 ? (
                    filteredPlants.map((plant) => (
                        <PlantCard key={plant.id}>
                            <Image src={plant.imageUrl} alt={plant.name} />
                            <TextContainer>
                                <Title>{plant.name}</Title>
                                <Price>R$ {plant.price.toFixed(2)}</Price>
                                <ButtonBuy>
                                    Comprar
                                </ButtonBuy>
                            </TextContainer>
                        </PlantCard>
                    ))
                ) : (
                    <p>Nenhuma planta encontrada.</p>
                )}
            </div>
        </>
    );
}
