import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
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

function Search(){
    return(
        <ContainerSearch>
            <BiSearch color="#a1a1a1"/>
            <StyleSearch
                placeholder="Escreva o nome do Pokemon..."
            />
        </ContainerSearch>
    )
}

export default Search;