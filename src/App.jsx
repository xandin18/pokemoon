import styled from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

function App() {
  return (
    <ContainerApp>
      <Header />
      <Outlet /> 
    </ContainerApp>
  );
}

export default App;
