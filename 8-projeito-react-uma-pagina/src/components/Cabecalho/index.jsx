import './styles.css'
  
export default  function Cabecalho() {
  
  return (
    <header className="app-header">
      <div className="brand-mark" aria-hidden="true">S</div>
      <div>
        <span className="brand-kicker">Painel urbano</span>
        <h1>Sistema de Clientes</h1>
      </div>
      <span className="live-status"><i /> Online</span>
    </header>
  )
}
