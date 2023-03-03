import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"
import { BiBookAlt } from "react-icons/bi"
import { useState } from "react";

const ContainerHeader = styled.header`
    @import url('https://fonts.cdnfonts.com/css/pokemon-solid');

    display: flex;
    background-color: #FF3131;
    width: 100vw;
    align-items: center;
    justify-content: space-around;
    height: 110px;

    h1{
        font-family: 'Pokemon Solid', sans-serif;
    }

    .ContainerOff{
        display: none;
    }

    .ContainerOn{
        top: 0;
        right: 0;
        position: fixed;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 230px;
        font-size: 20px;
        background-color: #070707;
        margin: 0;
        padding: 0;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        animation-duration: 0.5s;
        animation-name: sliden;
        width: 300px;
        transition: all 0,5s ease-in-out;

        li{
            cursor: pointer;
            justify-content: center;
            align-items: center;
        }

        li:hover{
            color: #FF3131;
        }

        @keyframes sliden{
            from{
                width: 0px;
                display: none;
            }
            to{
                width: 300px;
                display: flex;
            }
        }

    }

`

function Header(){
    const [clickSide, setClickSide] = useState(false);

    const handleClick = () => {
        setClickSide(!clickSide);
    }



    return(
        <ContainerHeader>
            <h1>Pokemoon</h1>
            <GiHamburgerMenu 
                size={25}
                cursor={'pointer'}
                onClick={handleClick}
                className="Hamb"
            />
            <ul className={clickSide === true ? "ContainerOn" : "ContainerOff"}>
                <AiOutlineClose
                    cursor={'pointer'}
                    onClick={handleClick}
                    size={25}
                />
                <li> <AiOutlineHome /> Home</li>
                <li> <BsPerson/> Quem fez?</li>
                <li> <BiBookAlt/> Pokemons</li>
            </ul>
        </ContainerHeader>
    )
}

export default Header;