import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    gap: 2%;
    margin-top: 16%;
`;

export const ImagemIlustrada = styled.img`
    max-width: 40%; /* Ajusta a largura da imagem */
    border-radius: 15px; /* Bordas arredondadas para a imagem */
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%; /* Limita a largura do texto */
    margin-left: 20px; /* Espaço entre imagem e texto */
`;

export const Title = styled.h2`
    font-family: Elsie Swash Caps;
    font-size: 42px; 
    font-weight: bold; 
    margin: 0; 
    color: #333; 
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin: 10px 0; 
    color: #666; 
`;

export const MarkContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const CircleSpan = styled.span`
    display: inline;
    height: 52px;
    width: 52px;
    background-color: #FFCB47;
    border-radius: 60%;
    margin-right: 10px;
`;