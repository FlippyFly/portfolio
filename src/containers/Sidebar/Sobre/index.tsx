import Titulo from "../../../components/Titulo/index.tsx"
import Paragrafo from "../../../components/Paragrafo/styles.ts";
import { GithubSecao } from "./styles.ts";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias cupiditate quos. Aliquam quia ex impedit odit reprehenderit, ab dolore adipisci voluptas magni asperiores eum itaque doloremque, molestiae fuga recusandae.
    </Paragrafo>
    <GithubSecao>
      <img  src="https://github-readme-stats.vercel.app/api?username=FlippyFly&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=FlippyFly&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)


export default Sobre;

