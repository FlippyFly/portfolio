import { useState } from 'react'
import {ThemeProvider} from 'styled-components'

import Sidebar from './containers/Sidebar/index.tsx'
import Sobre from './containers/Sidebar/Sobre/index.tsx'
import Projetos from './containers/Projetos/index.tsx'
import GlobalStyle, { Container } from './styles.ts'
import temaLight from './themes/light.ts'
import temaDark from './themes/dark.ts'



function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function alternarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <GlobalStyle />
      <Container>
        <h1>Meu Portfólio</h1>
        <Sidebar alternarTema={alternarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
