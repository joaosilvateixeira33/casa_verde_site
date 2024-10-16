import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardsPlants from "../plantasCard"; // Importando o componente de cartões de plantas
import { API_URL } from "../../../pages/api/bd"; // URL da API
import { ToastContainer, toast } from "react-toastify"; // Importando Toastify
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toastify

const PlantsContainer = styled.section`
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
    font-family: 'Elsie Swash Caps', sans-serif;
    font-size: 42px;
    font-weight: bold;
    margin: 0;
    color: #202020;
`;

const FiltersContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputRange = styled.input`
    width: 300px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #218838;
    }
`;

export default function NossasPlantas() {
    
    return (
        <PlantsContainer>
            <Subtitle>Conheça</Subtitle>
            <Title>Nossas plantas</Title>
            <CardsPlants/>
            <ToastContainer /> {/* Adicionando ToastContainer */}
        </PlantsContainer>
    );
}