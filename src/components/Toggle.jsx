import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const ContainerToggle = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
`

function Toggle(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <ContainerToggle>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem', backgroundColor: "red", border: "1px solid white" }}>
        Clique aqui!!!
      </Button>
      <Collapse isOpen={isOpen} {...args}>
        <Card style={{ border: "2px solid black" }}>
          <CardBody style={{ color: "black", width: "90vw"}}>
            Bom!! é isso o home, colequei pouca coisa pois, o intuito é colocar mais o ReactRouter em prática, e aproveitando estou tentando 
            entender um pouco mais de bootstrap então esse é mais de um dos meus testes, haha, então fique à vontade para passar para 
            próxima página e dar uma olhada no projetoツ.
          </CardBody>
        </Card>
      </Collapse>
    </ContainerToggle>
  );
}

export default Toggle;