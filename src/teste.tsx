import styled from "styled-components";

type BotaoProps = {
  principal?: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${props => props.principal ? 'blue' : 'gray'};
  font-size: ${props => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
    font-weight: bold;
  }
`

function Teste() {
  return (
    <div>
      <Botao  principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>Cancelar</Botao>
      <BotaoPerigo as= "a" principal>
        <span>Não Clique Aqui</span>
      </BotaoPerigo>
    </div>
  )
}

export default Teste;
