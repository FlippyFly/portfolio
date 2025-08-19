import Titulo from "../../components/Titulo/index.tsx"
import Paragrafo from "../../components/Paragrafo/index.tsx"
import Avatar from "../../components/Avatar/index.tsx"

import {Descricao, BotaoTema, SidebarContainer } from "../Sidebar/styles.ts";

type Props = {
  alternarTema: () => void;
}

const Sidebar = (props: Props) => (
<aside>
  <SidebarContainer>
    <Avatar />
  <Titulo fontSize={20}>Felipe Almeida</Titulo>
  <Paragrafo tipo="secundario" fontSize={16}>FlippyFly</Paragrafo>
  <Descricao tipo="principal" fontSize={12}>
    Desenvolvedor Front-end
  </Descricao>
  <BotaoTema onClick={props.alternarTema}>Trocar tema</BotaoTema>
  </SidebarContainer>

</aside>
)

export default Sidebar
