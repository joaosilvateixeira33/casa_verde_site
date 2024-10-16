import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const RangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
`;

const RangeInput = styled.input`
    width: 80%;
`;

const ResetButton = styled.button`
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

export const Filter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, handleResetFilters }) => {
    return (
        <FilterContainer>
            <RangeContainer>
                <label>
                    Preço Mínimo: R$ {minPrice}
                    <RangeInput 
                        type="range" 
                        min="0" 
                        max="200" // Ajuste o valor máximo conforme necessário
                        value={minPrice}
                        onChange={(e) => setMinPrice(parseFloat(e.target.value))}
                    />
                </label>
            </RangeContainer>
            <RangeContainer>
                <label>
                    Preço Máximo: R$ {maxPrice}
                    <RangeInput 
                        type="range" 
                        min="0" 
                        max="200" // Ajuste o valor máximo conforme necessário
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                    />
                </label>
            </RangeContainer>
            <ResetButton onClick={handleResetFilters}>
                Resetar Filtros
            </ResetButton>
        </FilterContainer>
    );
};
