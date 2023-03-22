import styled from "styled-components";
import { Link } from "react-router-dom";
import { CloseButton } from "reactstrap";
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
    height: 100px;
    padding: 30px;
    z-index: 9999;

    h1{
        font-family: 'Pokemon Solid', sans-serif;
    }

    .HambOff{
        color: transparent;
        transition: all 0.2s ease-in-out;
        cursor: default;
    }

    .HambOn{
        transition: all 0.2s ease-in-out;
    }

    .ContainerOff{
        display: none;
        animation-duration: 0.5s;
        animation-name: slidenOff;
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

            .link{
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                transition: all 0.3s ease-in-out;
            }
        }

        li:hover{
            color: #FF3131;
            .link{
                color: #FF3131;
            }
        }

        @keyframes sliden{
            from{
                width: 150px;
                display: none;
            }
            to{
                width: 300px;
                display: flex;
            }
        }

    }
        @keyframes slidenOff{
            from{
                width: 300px;
                display: flex;
            }
            to{
                width: 0px;
                display: none;
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
                className={clickSide === false ? "HambOn" : "HambOff"}
            />
            <ul className={clickSide === true ? "ContainerOn" : "ContainerOff"}>
                <CloseButton
                    cursor={'pointer'}
                    onClick={handleClick}
                    size={25}
                    variant="white"
                />
                <li> <Link className="link" to="/"><AiOutlineHome /> Home</Link> </li>
                <li> <Link className="link" to="me"><BsPerson/> Quem fez?</Link> </li>
                <li> <Link className="link" to="pokemon"><BiBookAlt/> Pokemons</Link> </li>
            </ul>
        </ContainerHeader>
    )
}

export default Header;