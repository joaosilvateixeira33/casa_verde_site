import styled from "styled-components";
import CardsPlants from "../plantasCard";

const OfferContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Subtitle = styled.p`
    font-size: 20px;
    margin: 10px 0; 
    color: #666; 
`;

export const Title = styled.h2`
    font-family: Elsie Swash Caps;
    font-size: 42px; 
    font-weight: bold; 
    margin: 0; 
    color: #202020; 
`;

export default function OfferSection(){
    return(
        <OfferContainer>
            <Subtitle>Conheça nossas</Subtitle>
            <Title>Ofertas</Title>
            <CardsPlants/>
        </OfferContainer>
    )
}