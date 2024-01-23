import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundaria">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      temporibus pariatur, error saepe doloremque eum deserunt ad tempora, nobis
      ea velit illum unde incidunt, iste sed quos. Adipisci, itaque architecto.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=RamonOrtisz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RamonOrtisz&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
