import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function PokeDetails(){
    const { id } = useParams();

    const [ info, setInfo ] = useState([]);

    useEffect(() => {
        fetch=("https://pokeapi.co/api/v2/pokemon")
        .then((response) => response.json())
        .then((data) => {
            setInfo(data.results)
        })
        .catch((error) => console.error(error))
    });

    return(
        <>
         {
         info.map((index) => {
            <div key={index}>
                {info.id}
            </div>
         }
         )
         }
        </>
    )
}

export default PokeDetails;