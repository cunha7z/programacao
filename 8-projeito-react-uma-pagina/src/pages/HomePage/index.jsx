import './styles.css'

export default function HomePage() {
  return (
    <section className="home-card" aria-labelledby="clientes-titulo">
      <div className="sunset" aria-hidden="true">
        <span className="sun" />
        
        <span className="horizon" />
      </div>

      <div className="home-content">
        <span className="district">Vice City &bull; {new Date().getFullYear()}</span>
        <h2 id="clientes-titulo">Cadastrar Clientes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error nam in doloremque velit,
          mollitia, illo dolor numquam ipsum possimus dolorem ducimus ad alias, fuga iste ipsa aliquid
          excepturi culpa. Nihil optio consectetur, obcaecati tempora quis soluta ab qui, officia velit,
          aspernatur sequi minima porro incidunt cum officiis fuga adipisci.
        </p>
        <button className="primary-action" type="button">Novo cadastro</button>
      </div>
    </section>
  )
}