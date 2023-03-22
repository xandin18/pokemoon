import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";
import ImgBanner from "../img/Img_Banner.png"

const ContainerBanner = styled.nav`
    margin: 50px;
    z-index: -99999;
`

function Banner(){
    return(
        <ContainerBanner>
            <Card style={{
                backgroundColor: "black",
                border: 0
            }} inverse>
                <CardImg
                alt="Card image cap"
                src={ImgBanner}
                style={{
                    height: 300,
                    width: "90vw",
                    opacity: "50%"
                    
                }}
                
                />
                <CardImgOverlay>
                <CardTitle tag="h5">
                    Home
                </CardTitle>
                <CardText>
                    Aqui nesse projeto fiz algumas coisas, o principal intuito é treinar meu ReactRouter, mas, acabei consumindo uma api e falando um pouco sobre mim. Então curta um pouco dos meus conhecimentos.
                </CardText>
                <CardText>
                    <small className="text-muted">
                        <b>
                            by: <i>Xandツ</i>
                        </b>
                    </small>
                </CardText>
                </CardImgOverlay>
            </Card>
        </ContainerBanner>
    )
}

export default Banner;