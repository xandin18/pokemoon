import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    border: 2px solid white;
    padding: 10px;
    border-radius: 20px;
    width: 250px;
`

const StyleSearch = styled.input`

    padding: 5px;
    border-radius: 10px;
    border: 0px solid white;
    background-color: transparent;
    outline: none;
    width: 250px;
    text-align: center;
    font-size: 16px;
    color: #a1a1a1;
`

function InputSearch(props){
    const handleSearch = (event) => {
        props.search(event.target.value);
    }

    return(
        <ContainerSearch>
            <BiSearch color="#a1a1a1"/>
            <StyleSearch
                type="text"
                placeholder="Escreva o nome do Pokemon..."
                onChange={handleSearch}
            />
        </ContainerSearch>
    )
}

export default InputSearch;