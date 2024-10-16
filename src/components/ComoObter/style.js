import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    gap: 2%;
    margin-top: 16%;

    @media (max-width: 768px) {
        flex-direction: column; /* Empilha os elementos verticalmente */
        margin-top: 8%; /* Reduz a margem superior */
        padding: 10px; /* Reduz o padding */
    }
`;

export const ImagemIlustrada = styled.img`
    max-width: 40%; 
    border-radius: 15px;

    @media (max-width: 768px) {
        max-width: 80%; /* Aumenta a largura da imagem em dispositivos móveis */
        margin-bottom: 20px; /* Espaço abaixo da imagem */
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 45%;
    margin-left: 20px;

    @media (max-width: 768px) {
        max-width: 100%; /* Ocupa a largura total */
        margin-left: 0; /* Remove a margem à esquerda */
    }
`;

export const Title = styled.h2`
    font-family: Elsie Swash Caps;
    font-size: 42px; 
    font-weight: bold; 
    margin: 0; 
    color: #333; 

    @media (max-width: 768px) {
        font-size: 32px; /* Reduz o tamanho da fonte */
        text-align: center; /* Centraliza o título */
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin: 10px 0; 
    color: #666; 

    @media (max-width: 768px) {
        font-size: 18px; /* Reduz o tamanho da fonte */
        text-align: center; /* Centraliza o subtítulo */
    }
`;

export const MarkContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: center; /* Centraliza os elementos */
        flex-wrap: wrap; /* Permite quebra de linha, se necessário */
    }
`;

export const CircleSpan = styled.span`
    display: inline;
    height: 52px;
    width: 52px;
    background-color: #FFCB47;
    border-radius: 60%;
    margin-right: 10px;

    @media (max-width: 768px) {
        margin-right: 5px; /* Reduz a margem direita */
        height: 42px; /* Reduz o tamanho do círculo */
        width: 42px;
    }
`;