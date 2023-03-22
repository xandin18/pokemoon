import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";

const ContainerListPoke = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  flex-wrap: wrap;
    li{
      display: flex;
      flex-direction: column;
      width: 160px;
      height: 190px;
      padding: 20px;
      align-items: center;
      text-align: center;
      border-radius: 10px;

      background-color: #111111;

      img{
        width: 100%;
        height: 70%;
        margin-bottom: 20px;
      }
    }
`;

function ListPoke() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  

  return (
    <ContainerListPoke>
      {pokemonData.map((pokemon, index) => (
        <li key={index}>
          <Pokemon pokemon={pokemon} />
        </li>
      ))}
    </ContainerListPoke>
  );
}

function Pokemon({ pokemon }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.sprites.other.dream_world.front_default;
        setImageUrl(imageUrl);
      })
      .catch((error) => console.error(error));
  }, [pokemon]);

  return (
    <>
      {imageUrl ? (
        <>
          <img src={imageUrl} alt={pokemon.name} />
          {pokemon.name}
        </>
      ) : (
        <Spinner color='light'/>
      )}
    </>
  );
}

export default ListPoke;