import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sidebar/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx';
import GlobalStyle, { Container } from './styles.ts';



function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Meu Portfólio</h1>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
