import styled from "styled-components";
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardLink } from "reactstrap";
import Xand from "../img/Xand.png"
import { Link } from "react-router-dom";

const ContainerCard = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

function CardTitles(){
    return(
        <ContainerCard>
            <Card
            style={{
                width: '40rem'
            }}
            >
                <CardBody>
                    <CardTitle style={{color: "black"}} tag="h5">
                        Alexandre Piorunneck Sobral
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    style={{color: "black"}}
                    >
                        Front-End Developer
                    </CardSubtitle>
                </CardBody>
                <img
                    alt="Alexandre Piorunneck Sobral"
                    src={Xand}
                    width="100%"
                    style={{height: "50vh", objectFit: "cover", margin: 0}}
                />
                <CardBody>
                    <CardText style={{color: "black"}}>
                        <i>
                            Eu Alexandre quem criou este projeto, bom como disse na Home o intuito era treinar mais o ReactRouter, mas ainda sim eu aproveitei e aprendi um pouco de bootstrap, aah e também consumi uma api para práticar que fazia tempo que não consumia, e gostei bastante do resultado final, é isso obrigado por acompanhar este projeto até aqui espero que tenha gostado.
                        </i>
                    </CardText>
                    <CardLink>
                        <b><Link to="/">◀ Home</Link></b>    
                    </CardLink>
                    <CardLink>
                        <b><a target="_blank" href="https://github.com/xandin18">Github</a></b>
                    </CardLink>
                </CardBody>
            </Card>
        </ContainerCard>
        
    )
}

export default CardTitles;