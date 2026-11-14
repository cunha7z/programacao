import './styles.css'

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <span className="site-header__mark" aria-hidden="true">SG</span>
                <p className="site-header__title">Sistema de Gestão de Clientes</p>
            </div>
        </header>
    )
}