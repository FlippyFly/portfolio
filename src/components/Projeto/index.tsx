import Paragrafo from "../Paragrafo/styles.ts";
import Titulo from "../Titulo/index.tsx";
import { Card, LinkBotao } from "./styles.ts";



const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao href="#">Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
