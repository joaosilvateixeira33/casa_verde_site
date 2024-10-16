import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #28a745;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #28a745;
    }
`;

export default function SortButtons ({ handleSortChange, sortCriteria }){
    return(
        <ButtonsContainer>
            <Button
                onClick={() => handleSortChange('price')}
                style={{ fontWeight: sortCriteria === 'price' ? 'bold' : 'normal' }}
            >
                Ordenar por Preço
            </Button>
            <Button
                onClick={() => handleSortChange('name')}
                style={{ fontWeight: sortCriteria === 'name' ? 'bold' : 'normal' }}
            >
                Ordenar por Nome
            </Button>
        </ButtonsContainer>
    )
};
