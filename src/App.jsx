import styled from 'styled-components';
import Header from './components/Header';
import PokeApi from './components/PokeApi';

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
      <PokeApi />
      <h1>Hello World!</h1>
    </ContainerApp>
  );
}

export default App;
