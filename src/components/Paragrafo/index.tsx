import { P } from '../../components/Paragrafo/styles.ts';


export type Props = {
  children: string
  tipo?: string
}

const Paragrafo = ({ children, tipo = "principal" }: Props) =>
  <P tipo={tipo}>{children}</P>


export default Paragrafo
