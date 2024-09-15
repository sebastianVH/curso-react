
import { Link } from 'react-router-dom'
import './Footer.css'


export default function Footer() {
    return (
        <footer className="footer container">
            <div className="footer__container">
                <h1 className="footer__title">CyberSale</h1>
                <span className="footer__copy">&#169; Todos los derechos reservados</span>
            </div>
            <div>
                <p className="footer__text footer__copy">Creado por:
                    <Link target='_blank' to={"https://github.com/sebastianvh"}>Sebastian</Link>
                </p>
            </div>
        </footer>
    )
}

