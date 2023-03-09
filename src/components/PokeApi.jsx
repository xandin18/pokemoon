import styled from "styled-components";
import InputSearch from "./InputSearch";
import ListPoke from "./ListPoke";
import { useState, useEffect } from "react";

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
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSearchInput(event) {
    setSearch(event.target.value);
  }

  const filteredPokemons = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ContainerPokeApi>
      <InputSearch search={handleSearchInput} />
      <h1>Lista de Pokemons</h1>
      <ListPoke pokemonData={filteredPokemons} />
    </ContainerPokeApi>
  );
};

export default PokeApi;