import './styles.css'

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
                <p>SENAI <span aria-hidden="true">/</span> Bahia</p>
            </div>
        </footer>
    )
}