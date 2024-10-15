import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPlants } from '../../../pages/api/bd';

const PlantCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    text-align: center;
    width: 369px;
`;

const Image = styled.img`
    width: 43%;
    height: auto;
`;

const Title = styled.h2`
    font-family: Elsie Swash Caps;
    font-size: 32px; 
    font-weight: bold; 
    margin: 0; 
    color: #202020;
 
`;

const TextContainer = styled.div`
    line-height: 36px;
`;

const Price = styled.p`
    font-family: Montserrat;
    color: #202020;
    font-size: 14px;
`;

const ButtonBuy = styled.span`
    padding: 10px;
    color: #FFCB47;
    cursor: pointer;
`;

const SetaImage = styled.img`
    margin-left: 30px;
`;

export default function CardsPlants(){

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        const loadPlants = async () => {
            const plantsData = await fetchPlants();
            setPlants(plantsData);
        };

        loadPlants();
    }, []);

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {plants.map((plant) => (
                <PlantCard key={plant.id}>
                    <Image src={plant.imageUrl} alt={plant.name} />
                    <TextContainer>
                        <Title>{plant.name}</Title>
                        <Price>R${plant.price.toFixed(2)}</Price>
                        <ButtonBuy>
                            Comprar 
                            <SetaImage src="/images/icons/seta.png" alt="seta ilustração" />
                        </ButtonBuy>
                    </TextContainer>
                </PlantCard>
            ))}
        </div>
    )
}