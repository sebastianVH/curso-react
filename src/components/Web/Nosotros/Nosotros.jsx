import imagen from '../Nosotros/nosotros.jpg'
import './Nosotros.css'

export default function Nosotros() {

    return (
        <>
            <h1>Sobre Nosotros</h1>
            <div className="nosotros">
                <img className='nosotros-img' src={imagen} alt="" />
                <p className='nosotros-text'>En Cyber Sale, somos apasionados por la tecnología y estamos comprometidos en ofrecer lo mejor en artículos para PC. Nuestro equipo de expertos trabaja incansablemente para seleccionar productos de la más alta calidad, desde componentes esenciales como procesadores, tarjetas gráficas y memorias RAM, hasta periféricos como teclados, mouse y monitores.

                    Con más de 10 años de experiencia en el mercado, hemos construido una reputación basada en la confianza y la satisfacción de nuestros clientes. Creemos que la tecnología debe estar al alcance de todos, por eso ofrecemos precios competitivos y una atención al cliente excepcional.

                    En Cyber Sale, tu satisfacción es nuestra prioridad. Estamos aquí para brindarte no solo productos de calidad, sino también una experiencia de compra sencilla y segura. Únete a nuestra comunidad tecnológica y descubre todo lo que podemos ofrecerte para potenciar tu experiencia frente a la pantalla..</p>
            </div>
        </>
    )

}