import styled from "styled-components";
import ListPoke from "../components/ListPoke";
import Header from "../components/Header";

const ContainerPokeApi = styled.nav`
    display: flex;
    flex-direction: column;
    background-color: #000000;
    padding: 30px;
    margin: 15px;
    border-radius: 10px;
    width: 90%;
    align-items: center;
    justify-content: center;
    text-align: center;
`

function PokeApi() {

  return (
    <ContainerPokeApi>
      <h1>Lista de Pokemons</h1>
      <ListPoke />
    </ContainerPokeApi>
  );
};

export default PokeApi;